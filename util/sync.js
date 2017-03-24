const loadContacts = require('./loadContacts')
const loadMessages = require('./loadMessages')


loadContacts().then(() => {
  return loadMessages()
})
.catch(console.error)
