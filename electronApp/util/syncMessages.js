const iMessage = require('imessage')
const im = new iMessage()
const APPLE_DATE_MODIFIER = 978307200

iMessage.prototype.getMessagesSince = function (latestDate, cb) {
  this.db.done(function(db) {
    db.all("SELECT account_guid, text as ZTEXT, id AS ZFULLNUMBER, is_sent, date AS ZDATE FROM `message` JOIN `handle` ON `handle`.ROWID = `message`.handle_id WHERE date > "+latestDate,
      // { $latestDate: latestDate },
      function (err, messages) {
        cb(err, messages)
    })
  })
}

const fetchMessages = (latestDate) => {
  return new Promise((resolve, reject) => {

    //finding all the messages that are YOURS---> has your guid.. how to find guid.. state.user.guid? we cant use req.
    // Message.findAll({
    //   where: {
    //     uploader_id: guid
    //   }
    // })
    //   .then((allMessages) => {
    //     const allDates = allMessages.map(elem => elem.date)
    //     return Math.max.apply(Math,allDates)
    //   })
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
