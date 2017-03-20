const iMessage = require('imessage')
const AddressBook = require('./AddressBook')

const ab = new AddressBook()
const im = new iMessage()

console.log("MESSAGES")

im.getMessages(false, true, (error, messages) => {
  if (error) { console.error(error) }
  console.log(messages);
})

console.log("CONTACTS")

ab.getContacts((error, contacts) => {
  if (error) { console.error(error) }
  console.log(contacts);
})