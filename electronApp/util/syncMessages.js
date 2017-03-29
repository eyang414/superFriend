const iMessage = require('imessage')
const im = new iMessage()
const APPLE_DATE_MODIFIER = 978307200

iMessage.prototype.getMessagesSince = function (latestDate, cb) {
  this.db.done(function(db) {
    db.all("SELECT * FROM `message` JOIN `handle` ON `handle`.ROWID = `message`.handle_id WHERE date > "+latestDate,
      // { $latestDate: latestDate },
      function (err, messages) {
        cb(err, messages)
    })
  })
}

const fetchMessages = (latestDate) => {
  return new Promise((resolve, reject) => {
    im.getMessagesSince(latestDate, (error, messages) => {
      if (error) { return reject(error) }
      resolve(messages)
    })
  })
}

const syncMessages = () => {
  return fetchMessages(0)
    .then((messages) => {
      console.log(...messages)
  })
}

syncMessages()
module.exports = syncMessages


