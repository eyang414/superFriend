const iMessage = require('imessage')
const db = require('APP/db')
const User = require('../db/models/user')
const Message = require('../db/models/message')

const im = new iMessage()

// Need to add this method to iMessage prototype before any future calls on instances
iMessage.prototype.getMessagesFromId = function(id, string, cb) {
  if (typeof string == 'function') {
    cb = string;
    string = false;
  }

  this.db.done(function(db) {
    var where = ""
    // Maybe dangerous, check SQLlite doc
    if (string && string != "") where = " AND text LIKE '%"+string+"%'";
    db.all("SELECT * FROM `message` WHERE handle_id = $id"+where, {$id: id}, function(err, messages) {
      cb(err, messages);
    })
  })
}


//////////////////////
// START DOING THINGS
//////////////////////


let ourUser


const fetchMessages = (stateUser) => {
  return new Promise((resolve, reject) => {
    im.getMessages(false, true, (error, messages) => {
      if (error) { return reject(error) }
      resolve(messages)
    })
  })
}

const loadMessages = (stateUser) => {

  //Look below for a commented-out, non-dev code that will replace everything inside this function
  return User.findOne({
    where: {username: 'ak123'}
  })
  .then((foundUser) => {
    ourUser = foundUser
  })
  .then(() => {

            // THIS IS THE REAL STUFF
            fetchMessages()
              .then(messages => {
                const promises = []
                messages.forEach(message => {
                  Message.create({
                    content: message.text,
                    date: message.date,
                    is_sender: message.is_sender,
                    ZFULLNUMBER: message.id
                  })
                    .then(createdMessage => {
                      stateUser = ourUser
                      // STATE USER IS SENDER
                      if (createdMessage.is_sender) {

                        createdMessage.update({ sender_id: stateUser.id })

                        User.findOne({where: { ZFULLNUMBER: createdMessage.ZFULLNUMBER}})
                          .then(foundUser => {
                            if (foundUser) {
                              createdMessage.update({recipient_id: foundUser.id})
                            }
                        })

                      } else {
                        // STATE USER IS RECIPIENT
                        createdMessage.update({ recipient_id: stateUser.id })

                        User.findOne({ where: { ZFULLNUMBER: createdMessage.ZFULLNUMBER } })
                          .then(foundUser => {
                            if (foundUser) {
                              createdMessage.update({ sender_id: foundUser.id })
                            }
                        })
                      }
                })
              })
            })
  })
}

module.exports = loadMessages
