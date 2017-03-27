const iMessage = require('imessage')
const db = require('APP/db')
const User = require('../db/models/user')
const Message = require('../db/models/message')
const Sequelize = require('sequelize')

const APPLE_DATE_MODIFIER = 978307200
const im = new iMessage()

// Need to add this method to iMessage prototype before any future calls on instances
iMessage.prototype.getMessagesFromId = function(id, latestDate, cb) {
  if (typeof latestDate == 'function') {
    cb = string;
    string = false;
  }

  this.db.done(function(db) {
    var where = ""
    // Maybe dangerous, check SQLlite doc
    if (string && string != "") where = " AND text LIKE '%"+string+"%'";
    db.all("SELECT * FROM `message` WHERE handle_id = $id"+where, {$id: id}, function(err, messages) {
      cb(err, messages)
    })
  })
}

iMessage.prototype.getMessagesSince = function (latestDate, cb) {
  this.db.done(function(db) {
    console.log('here is the latest date', latestDate)
    db.all("SELECT * FROM `message` JOIN `handle` ON `handle`.ROWID = `message`.handle_id WHERE date > "+latestDate,
      // { $latestDate: latestDate },
      function (err, messages) {
        cb(err, messages)
    })
  })
}

const fetchMessages = () => {
  return new Promise((resolve, reject) => {
    Message.findAll()
      .then((allMessages) => {
        const allDates = allMessages.map(elem => elem.date)
        return Math.max.apply(Math,allDates)
      })
      /*
      this one is for Message.findAll then query function
      // attributes: { include: [[Sequelize.fn('MAX', Sequelize.col('date')), 'latestDate']] }

      this one is for Message.findAll, but only would work if dates were integer
      // order: [['date', 'ASC']],
      // limit: 1
      */

      // .then(messageArray => {
      //   console.log("THIS IS THE LATEST MESSAGE", messageArray[0].content)
      //   console.log('here is the latest message date', messageArray[0].date)
      //   return messageArray[0].date
      // })
      .then(latestDate => {
        console.log('========outcome of Message.max: latestDate======', latestDate)
        // console.log(`======= FETCHING MESSAGES FROM ${new Date(parseInt(latestDate))} =======`)
        latestDate = (parseInt(latestDate) / 1000) - APPLE_DATE_MODIFIER
        // console.log(`============== CONVERTED LATEST DATE: ${latestDate} =================`)
        im.getMessagesSince(latestDate, (error, messages) => {
          if (error) { return reject(error) }
          // console.log(`============ FETCHED MESSAGES COMPLETE ================`)
          // console.log("THIS IS HOW MANY MESSAGES", messages.length)
          resolve(messages)
        })
      })
      .catch(console.error)
  })
}

/**
 * Loads the currently logged in user's messages and associates the sender_id and recipient_id
 * @param {Object} stateClient the currently logged in user from state.auth.user
 */
const loadMessages = (stateClient) => {

            return fetchMessages()
              .then(messages => {
                let counter = 0;
                console.log("CREATING " + messages.length + " MESSAGES")
                for (let i=0;i<messages.length;i+=100){
                  let smallerMessages = messages.slice(i, i + 100)
                  let modifiedMessages = smallerMessages.map(message => {
                    return {
                      content: message.text,
                      date: message.date,
                      is_sender: message.is_sent,
                      ZFULLNUMBER: message.id
                    }
                  })
                  Message.bulkCreate(modifiedMessages)
                    .then(() => {
                      console.log(modifiedMessages[12])
                      console.log(`=========== BATCH ${counter} CREATED ================`)
                    counter++
                  })
                    .catch(console.error)
                }
                // return Promise.all(messages.map(message => {

                    // .then(createdMessage => {
                    //
                    //   // STATE USER IS SENDER
                    //   if (createdMessage.is_sender) {
                    //
                    //     createdMessage.update({ sender_id: stateClient.id })
                    //
                    //     User.findOne({ where: { ZFULLNUMBER: createdMessage.ZFULLNUMBER } })
                    //       .then(contact => {
                    //         if (contact) {
                    //           createdMessage.update({ recipient_id: contact.id })
                    //         }
                    //       })
                    //
                    //   } else {
                    //     // STATE USER IS RECIPIENT
                    //     createdMessage.update({ recipient_id: stateClient.id })
                    //
                    //     User.findOne({ where: { ZFULLNUMBER: createdMessage.ZFULLNUMBER } })
                    //       .then(contact => {
                    //         if (contact) {
                    //           createdMessage.update({ sender_id: contact.id })
                    //         }
                    //       })
                    //   }
                    // })


                // }))
              })
}


module.exports = loadMessages
