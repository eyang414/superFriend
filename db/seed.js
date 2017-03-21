'use strict'; // eslint-disable-line semi

const db = require('APP/db')

const dummyUser = require('../dummyData').dummyUser;
const dummyMessages = require('../dummyData').dummyMessages;

const seedUsers = () => db.Promise.map(dummyUser, user => db.model('users').create(user))
const seedMessages = () => db.Promise.map(dummyMessages, messages => db.model('message').create(message))

db.didSync
  .then(() => db.sync({force: false}))
  .then(seedUsers)
  .then(users => {
    console.log(`Seeded ${users.length} users OK`)
    for (let i=2; i<=25; i++){
      users[0].addFriend(i)
    }
    return users[0].save()
  })
  .catch(error => console.error(error))
  .finally(() => db.close())
// 
// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(seedMessages)
//   .catch(error => console.error(error))
