// const iMessage = require('imessage')
// const AddressBook = require('./util/AddressBook')
//
// const ab = new AddressBook()
// const im = new iMessage()
//
// const db = require('APP/db')
// const User = require('./db/models/user')
const Message = require('./db/models/message')
const Sequelize = require('sequelize')

Message.findAll({
  attributes: { include: [[Sequelize.fn('MAX', Sequelize.col('date')), 'latestDate']] }
  // order: [['date', 'ASC']],
  // limit: 1
})
.then((messageWithLatestDate) => {
  console.log('=======here is the messageWithLatestDate========', messageWithLatestDate)
})


// const loadContacts = require('./util/loadContacts')
// const loadMessages = require('./util/loadMessages')

// console.log("MESSAGES")
//
// im.getMessages(false, true, (error, messages) => {
//   if (error) { console.error(error) }
//   console.log(messages);
// })
//
// console.log("CONTACTS")
//

// ab.getContacts((error, contacts) => {
//   if (error) { console.error(error) }
//   for (let i = contacts.length - 1; i; i--) {
//     console.log(contacts[i])
//   }
// })



// loadContacts()

// Load all contacts, then associate messages to contacts

// loadContacts()
// loadMessages()
//   .then(() => {
//   let pleaseWork = {}
//   loadMessages(pleaseWork)
//   })
// .catch(console.error)

console.log("RUNING TEST")
