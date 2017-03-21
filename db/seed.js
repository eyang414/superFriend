
const seed = () => {

  const db = require('APP/db')
  const User = require('./models/user')
  const Message = require('./models/message')
  const Promise = require('bluebird')

  const dummyUser = require('../dummyData').dummyUser;
  const dummyMessages = require('../dummyData').dummyMessages;

  const seedUsers = () => db.Promise.map(dummyUser, user => db.model('users').create(user))
  const seedMessages = () => db.Promise.map(dummyMessages, messages => db.model('message').create(messages))

  db.didSync

    .then(() => db.sync({force: true}))
    .then( () => Promise.all([seedUsers(), seedMessages()]) )
    .then((seededStuff) => {

      User.findOne({
        where: {username: 'ak123'}
      })
      .then( (ourUser) => {
        for (let i=0; i<=29; i++){
          ourUser.addFriend(i)
        }

        Message.findAll()
        .then((allMessages) => {

          for (let i=0; i<100; i++){

            let randomUserId = Math.floor(Math.random()*30)
            if (randomUserId === ourUser.id || randomUserId === 0) randomUserId = 1

            allMessages[i].update({sender_id: ourUser.id})
            allMessages[i].update({recipient_id: randomUserId})
          }
          for (let i=101; i<200; i++){

            let randomUserId = Math.floor(Math.random()*30)
            if (randomUserId === ourUser.id || randomUserId === 0) randomUserId = 1

            allMessages[i].update({recipient_id: ourUser.id})
            allMessages[i].update({sender_id: randomUserId})
          }
        })
      })
    })
    .catch(error => console.error(error))
}

module.exports = seed
