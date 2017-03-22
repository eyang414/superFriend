const iMessage = require('imessage')
const im = new iMessage()

console.log("MESSAGES")

im.getMessages(false, true, (error, messages) => {
  if (error) { console.error(error) }
  console.log(messages);
})
