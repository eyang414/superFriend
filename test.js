const iMessage = require('imessage')
const AddressBook = require('./util/AddressBook')

const ab = new AddressBook()
const im = new iMessage()

const db = require('APP/db')
const User = require('./db/models/user')

const loadContacts = require('./util/loadContacts')

// console.log("MESSAGES")
//
im.getMessages(false, true, (error, messages) => {
  if (error) { console.error(error) }
  console.log(messages);
})
//
// console.log("CONTACTS")
//
// ab.getContacts((error, contacts) => {
//   if (error) { console.error(error) }
//   console.log(contacts);
// })


// loadContacts()
