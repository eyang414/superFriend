const AddressBook = require('./AddressBook')
const db = require('APP/db')
const User = require('../db/models/user')

const ab = new AddressBook()
let ourUser

//This function is going to be used for the SYNC Contacts button.
//It will create new contacts if they didn't already exist, will also UPDATE them if anything was changed


const loadContacts = (stateClient) => {

//Look below for a commented-out, non-dev code that will replace everything inside this function
  return User.findOne({
    where: {username: 'ak123'}
  })
  .then((foundUser) => {
    ourUser = foundUser

  })
  .then(() => {

    ab.fetchContacts()
    .then((contacts) => {

      contacts.forEach((elem) => {
        if (elem.ZFULLNUMBER) {
          User.findOrCreate(
            {
              defaults: {ZFIRSTNAME: elem.ZFIRSTNAME, ZLASTNAME: elem.ZLASTNAME, ZFULLNUMBER: elem.ZFULLNUMBER},
              where: {ZFULLNUMBER: elem.ZFULLNUMBER.replace(/[^0-9]/g, '').slice(-10)}
            }
          )
          .then((existingContact) => {
            ourUser.addFriend(existingContact[0])
            existingContact[0].update(elem)
          })
          .catch(console.error)
        }
      })
    })
  })

  }
//TODO: inlude emails into the contacts raw sql query from AddressBook.js
//TODO: write some TESTS testestestestestestest

module.exports = loadContacts



//this is the normal code without the crazy findone user thing:
// ab.fetchContacts()
//   .then((contacts) => {
//
//       contacts.forEach((elem) => {
//         console.log(ourUser)
//         if (elem.ZFULLNUMBER) {
//           User.findOrCreate(
//             {
//               defaults: {ZFIRSTNAME: elem.ZFIRSTNAME, ZLASTNAME: elem.ZLASTNAME, ZFULLNUMBER: elem.ZFULLNUMBER},
//               where: {ZFULLNUMBER: elem.ZFULLNUMBER.replace(/[^0-9]/g, '').slice(-10)}
//             }
//           )
//           .then((existingContact) => {
//             ourUser.addFriend(existingContact)
//             existingContact[0].update(elem)
//           })
//           .catch(console.error)
//         }
//       })
//   })
