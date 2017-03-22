'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT
  },
  ZFULLNUMBER: {
    type: Sequelize.STRING,
    set: function(number) {
      this.setDataValue('ZFULLNUMBER', parseInt(number.replace(/[^0-9]/g, ''), 10).toString().slice(-10))
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
