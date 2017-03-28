const db = require('APP/db')
const Promise = require('bluebird')

const dummyUser = require('../dummyData').dummyUser
const dummyMessages = require('../dummyData').dummyMessages

const trace = tracer => data => {
  console.log(typeof tracer === 'function' ? tracer(data) : tracer)
  return data
}

const seed = () => {

  const processZNum = znum => znum.replace(/[^0-9]/g, '').slice(-10)

  const seedUsers = () =>
    db.Promise.map(dummyUser, user =>
      db.model('users')
      .findOrCreate({
        defaults: user,
        where: { ZFULLNUMBER: processZNum(user.ZFULLNUMBER) }
      })
      .then(array => array[0])
    )

  const seedMessages = () =>
    db.Promise.map(dummyMessages, message =>
      db.model('message')
      .findOrCreate({
        defaults: message,
        where: { content: message.content }
      })
      .then(array => array[0])
    )

  const clearingDb = db.didSync
    .then(() => db.sync({force: true}))
    .then(trace('DB Synced'))

  const seedingUsersAndMessages = clearingDb
    .then(() => Promise.props({
      users: seedUsers(),
      messages: seedMessages()
    }))
    .then(trace(obj =>
      `Seeded ${obj.users.length} users, ${obj.messages.length} messages`)
    )

  const selectOurUser = users => users.find(user => user.username === 'ak123')

  const findingOurUser = seedingUsersAndMessages
    .then(({users}) => selectOurUser(users))
    .then(trace('Found selected user'))

  const addingFriends = findingOurUser
    .then(ourUser => {
      const addingEachFriend = []
      for (let i = 0; i <= dummyUser.length; i++){
        addingEachFriend.push(ourUser.addFriend(i))
      }
      return Promise.all(addingEachFriend)
    })
    .then(trace(friends => `Added ${friends.length} friends`))

  const givingMessagesPeople = seedingUsersAndMessages
    .then(({messages, users}) => {
      const ourUser = selectOurUser(users)
      let promises = []
      for (let i = 0; i < 100; i++){
        let randomUserId = Math.floor(Math.random() * dummyUser.length)
        if (randomUserId === ourUser.id || randomUserId === 0) randomUserId = 1
        promises.push(messages[i].update({sender_id: ourUser.id}))
        promises.push(messages[i].update({recipient_id: randomUserId}))
      }
      for (let i = 101; i < 200; i++){
        let randomUserId = Math.floor(Math.random() * dummyUser.length)
        if (randomUserId === ourUser.id || randomUserId === 0) randomUserId = 1
        promises.push(messages[i].update({recipient_id: ourUser.id}))
        promises.push(messages[i].update({sender_id: randomUserId}))
      }
      return Promise.all(promises)
    })
    .then(trace(messages => `Modified ${messages.length} messages`))

  Promise.all([addingFriends, givingMessagesPeople])
  .catch(error => console.error(error))
  .finally(() => {
    db.close()
    return null
  })
  .then(trace('Seeding complete'))

}

if (module === require.main) {
  console.log('Running seed script directly')
  seed()
}

module.exports = seed
