const iMessage = require('imessage')
const AddressBook = require('./util/AddressBook')

const ab = new AddressBook()
const im = new iMessage()

const db = require('APP/db')
const User = require('./db/models/user')

const loadContacts = require('./util/loadContacts')
const loadMessages = require('./util/loadMessages')

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
//   console.log(contacts);
// })

// Load all contacts, then associate messages to contacts
loadContacts()
  .then(() => {
  let pleaseWork = {}
  loadMessages(pleaseWork)
  })
.catch(console.error)
