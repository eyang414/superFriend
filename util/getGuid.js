const iMessage = require('imessage')
const db = require('APP/db')
const User = require('../db/models/user')
const Message = require('../db/models/message')
const Sequelize = require('sequelize')

const APPLE_DATE_MODIFIER = 978307200
const im = new iMessage()



const fetchGuid = function() {
  return new Promise((resolve, reject) => {
    getGuid((error, guid) => {
      if(error) return reject(error)
      resolve(guid)
    })
  })
}

const getGuid = function(string, cb) {
  if (typeof string == 'function') {
    cb = string;
    string = false;
  }
  im.db.done(function(db) {
    let where = "";
    // Maybe dangerous, check SQLlite doc
    if (string && string != "") where = " WHERE id LIKE '%"+string+"%'";
    return db.all("SELECT account_guid FROM `message` LIMIT 1", cb)
  });
};

fetchGuid()
.then((value) => {
  console.log(value[0].account_guid)
})
.catch(console.error)

module.exports = {fetchGuid}
