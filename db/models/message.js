'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')
const Contact = require('./contact')

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT,
  }
})

Message.belongsTo(Contact)

module.exports = Message



