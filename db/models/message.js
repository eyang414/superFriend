'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  recipientId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Message



