const loadContacts = require('./loadContacts')
const loadMessages = require('./loadMessages')


// UPDATE LOAD MESSAGES AND LOAD CONTACTS WITH QUERY TO ONLY PULL MESSAGES AFTER LATEST MESSAGE DATE
console.log('you are in the sync file')
loadContacts()
  .then(() => {
  console.log("========== FINISHED LOADING CONTACTS =============")
  return loadMessages()
  })
  .then(() => {
  console.log("========== FINISHED LOADING MESSAGES =============")
})
