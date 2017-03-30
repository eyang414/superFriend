const exec = require('child_process').exec
const axios = require('axios')

let contactsBuffer = ''
let messagesBuffer = ''

const runSyncContacts = () => {
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
    for (let i=0;i<formattedBuffer.length;i+=100){
      let smallerContacts = formattedBuffer.slice(i, i + 100)
    window.frames.webapp.postMessage({ type: 'contacts', data: smallerContacts}, '*')
    }
  })
}

const runSyncMessages = () => {
  const childMessages = exec('node util/syncMessages', { maxBuffer: 1024 * 1000000000 }, (error, stdout, stderr) => {
    if (error) console.error(error)
  })

  childMessages.stdout.on('data', (chunk) => {
    messagesBuffer += chunk
  })

  childMessages.on('close', () => {
    console.log('childMessages is closed, here is the messagesBuffer', messagesBuffer)

    let formattedString = messagesBuffer
      .replace(/'/gi, '"')
      .replace(/account_guid/gi, '"accountGU"')
      .replace(/ZTEXT/gi, '"ZTEXT"')
      .replace(/ZFULLNUMBER/gi, '"ZFULLNUMBER"')
      .replace(/is_sent/gi, '"is_sent"')
      .replace(/ZDATE/gi, '"ZDATE"')
      .replace(/} {/gi, "},{")

    formattedString = formattedString.toString()
    formattedString = "[" + formattedString + "]"
    const formattedBuffer = JSON.parse(formattedString)
    console.log(formattedBuffer)
    for (let i=0;i<formattedBuffer.length;i+=100){
  		let smallerMessages = formattedBuffer.slice(i, i + 100)
    window.frames.webapp.postMessage({ type: 'messages', data: smallerMessages }, '*')
    }

  childMessages.stderr.on('data', (error) => {
    console.error(error)
  })
})
}

const checkingStuff = () => {
  console.log('this is the state', state)
}
