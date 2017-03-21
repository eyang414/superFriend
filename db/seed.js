'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const User = require('./models/user')
const Message = require('./models/message')
const Promise = require('bluebird')

const dummyUser = require('../dummyData').dummyUser;
const dummyMessages = require('../dummyData').dummyMessages;

const seedUsers = () => db.Promise.map(dummyUser, user => db.model('users').create(user))
const seedMessages = () => db.Promise.map(dummyMessages, messages => db.model('message').create(messages))

//TODO: need to change dummyseed data to NOT have recipient and sender in messages. need to set recipient, sender, friend IDs

//not sure why the below method isnt working. getting error: relation "users" does not exist
// db.sync({force: true})
//   .then( () => (User.bulkCreate(dummyUser)) )
//   .then(() => (User.findById(1)))
//   .then(user => {
//     for (let i = 2; i <= 25; i++) {
//       user.addFriend(i)
//     }
//     return user.save()
//   })
//   .catch(error => console.error(error))
//   .finally(() => db.close())

db.didSync
  .then(() => db.sync({force: true}))
  .then( () => Promise.all([seedUsers(), seedMessages()]) )
  .then((seededStuff) => {

    User.findOne({
      where: {username: 'ak123'}
    })
    .then( (ourUser) => {
      console.log(ourUser)

      for (let i=0; i<=29; i++){
        ourUser.addFriend(i)
      }
    })



    //made it so that you AND all your contacts are your friends


    // for (let i=1; i<=50; i++){
    //   seededStuff[1].addSender(1);
    //   seededStuff[1].addRecipient(i)
    // }
    //
    // for (let i=51; i<=100; i++){
    //   seededStuff[1].addRecipient()
    // }

  })
  .catch(error => console.error(error))

  //   (seedUsers, seedMessages) => Promise.all)
  //
  // .then((messages) => {
  //   console.log(messages)
  //   for (let i=2; i<=25; i++){
  //     users[0].addFriend(i)
  //   }
  //   return users[0].save()
  // })
  // .catch(error => console.error(error))
  // .finally(() => db.close())


// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(seedUsers, seedMessages)
//   .then(stuff => {
//     console.log(`Seeded ${users.length} users OK`)
//     for (let i=2; i<=25; i++){
//       users[0].addFriend(i)
//     }
//     return users[0].save()
//   })
//   .catch(error => console.error(error))
//   .finally(() => db.close())
//
// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(seedMessages)
//   .catch(error => console.error(error))
