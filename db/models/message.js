'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT
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
