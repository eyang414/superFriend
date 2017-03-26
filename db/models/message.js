'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const APPLE_DATE_MODIFIER = 978307200

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT
  },
  ZFULLNUMBER: {
    type: Sequelize.STRING,
    set: function(number) {
      this.setDataValue('ZFULLNUMBER', number.replace(/[^0-9]/g, '').slice(-10))
      }
  },
  is_sender: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.STRING,
     set: function (dateValue) {
       //const date = new Date((dateValue + APPLE_DATE_MODIFIER) * 1000).toString()
       const date = ((parseInt(dateValue) + APPLE_DATE_MODIFIER) * 1000).toString()
       this.setDataValue('date', dateValue = date)
    }
  }
}, {
    classMethods: {

      getAllFrom: function (senderId) {
        return Message.findAll({
          where: { senderId: senderId }
        })
      },
      getAllTo: function (recipientId) {
        return Message.findAll({
          where: { recipientId: recipientId }
        })
      }
    }
  }
)

module.exports = Message
