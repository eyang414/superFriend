const AddressBook = require('./AddressBook')
const db = require('APP/db')
const User = require('../db/models/user')
const iMessageContacts = require('../db/models/iMessageContacts')

const ab = new AddressBook()

//This function is going to be used for the SYNC Contacts button.
//It will create new contacts if they didn't already exist, will also UPDATE them if anything was changed

/**
 * Loads the currently logged in user's contacts
 * @param {Object} stateClient the currently logged in user from state.auth.user
 */
const loadContacts = (stateClient) => {
  ab.fetchContacts()
  .then((contacts) => {

    contacts.forEach((elem) => {
      if (elem.ZFULLNUMBER) {
        iMessageContacts.findOrCreate(
          {
            defaults: { ZFIRSTNAME: elem.ZFIRSTNAME, ZLASTNAME: elem.ZLASTNAME, ZFULLNUMBER: elem.ZFULLNUMBER },
            where: { ZFULLNUMBER: elem.ZFULLNUMBER.replace(/[^0-9]/g, '').slice(-10) }
          }
        )
          .then((existingContact) => {
            stateClient.addFriend(existingContact[0])
            existingContact[0].update(elem)
          })
          .catch(console.error)
      }
    })
  })
}
//TODO: inlude emails into the contacts raw sql query from AddressBook.js
//TODO: write some TESTS testestestestestestest

module.exports = loadContacts

