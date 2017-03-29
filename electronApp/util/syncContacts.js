const util = require('util')
const AddressBook = require('./AddressBook')
const ab = new AddressBook()
const APPLE_DATE_MODIFIER = 978307200

const syncContacts = () => {
  return ab.fetchContacts()
    .then(contacts => {
      console.log(...contacts)
  })
  .catch(console.error)
}

syncContacts()
module.exports = syncContacts


