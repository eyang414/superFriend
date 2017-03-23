const loadContacts = require('./loadContacts')
const loadMessages = require('./loadMessages')


loadContacts()
  .then(() => loadMessages())
