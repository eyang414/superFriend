const iMessage = require('imessage');
const im = new iMessage();
im.getMessages("Haha", (error, messages) => {
  console.log(messages);
});