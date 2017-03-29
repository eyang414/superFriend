const axios = require('axios')

window.addEventListener('message', (event) => {
  console.log("RECEIVED POSTED DATA FROM ELECTRON")
  const type = event.data.type

  if (type === 'contacts') {
    axios.post('/api/contacts', event.data.data)
  }

  if (type === 'messages') {
    axios.post('api/messages', data)
  }
})