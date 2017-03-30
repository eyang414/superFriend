const exec = require('child_process').exec
const axios = require('axios')

let contactsBuffer = ''
let messagesBuffer = ''

const runSync = () => {
  console.log('you clicked sync contacts')
  const childContacts = exec('node util/syncContacts', { maxBuffer: 1024 * 1000000000 }, (error, stdout, stderr) => {
    if (error) console.error(error)
  })



  childContacts.stdout.on('data', (chunk) => {
    contactsBuffer += chunk
  })

  childContacts.stderr.on('data', (error) => {
    console.error(error)
  })

  childContacts.on('close', () => {
    console.log('childContacts has closed')
    // console.log('here is the contactsBuffer', contactsBuffer)
    let formattedString = contactsBuffer
      .replace(/'/gi, '"')
      .replace(/ZFIRSTNAME/gi, '"ZFIRSTNAME"')
      .replace(/ZLASTNAME/gi, '"ZLASTNAME"')
      .replace(/ZFULLNUMBER/gi, '"ZFULLNUMBER"')
      .replace(/} {/gi, "},{")

    formattedString = formattedString.toString()
    formattedString = "[" + formattedString + "]"
    const formattedBuffer = JSON.parse(formattedString)
    console.log(formattedBuffer)
    window.frames.webapp.postMessage({ type: 'contacts', data: formattedBuffer}, '*')

    // const childMessages = exec('node util/syncMessages', { maxBuffer: 1024 * 1000000000 }, (error, stdout, stderr) => {
    //   if (error) console.error(error)
    // })

    // childMessages.stdout.on('data', (chunk) => {
    //   messagesBuffer += chunk
    // })

    // childMessages.on('close', () => {
    //   window.postMessage({ type: 'messages', data: messagesBuffer }, '*')
    // })

    // childMessages.stderr.on('data', (error) => {
    //   console.error(error)
    // })
  })
}

const axiosPostContacts = (data) => {
  axios.post('/api/contacts', data)
}
