const iMessage = require('imessage');
const AddressBook = require('./AddressBook');

const ab = new AddressBook();
const im = new iMessage();

console.log('AB', ab);
console.log('IM', im);

// im.getMessages(false, true, (error, messages) => {
//   console.log(messages);
// });

ab.getContacts((error, contacts) => {
  console.log(contacts);
})