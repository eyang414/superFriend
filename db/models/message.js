'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = Message
