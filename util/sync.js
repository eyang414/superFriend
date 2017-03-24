const loadContacts = require('./loadContacts')
const loadMessages = require('./loadMessages')

console.log('you are in the sync file')
loadContacts()
.then(() => {
  loadMessages()
})
