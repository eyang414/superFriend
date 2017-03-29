const exec = require('child_process').exec

let contactsBuffer = ''
let messagesBuffer = ''

const childContacts = exec('node util/syncContacts', (error, stdout, stderr) => {
  if (error) console.error(error)
})



childContacts.stdout.on('data', (chunk) => {
  contactsBuffer += chunk
})

childContacts.stderr.on('data', (error) => {
  console.error(error)
})

childContacts.on('close', () => {
  window.postMessage({ type: 'contacts', data: contactsBuffer }, '*')

  const childMessages = exec('node util/syncMessages', { maxBuffer: 1024 * 1000000000 }, (error, stdout, stderr) => {
    if (error) console.error(error)
  })

  childMessages.stdout.on('data', (chunk) => {
    messagesBuffer += chunk
  })

  childMessages.on('close', () => {
    window.postMessage({ type: 'messages', data: messagesBuffer }, '*')
  })

  childMessages.stderr.on('data', (error) => {
    console.error(error)
  })
})

