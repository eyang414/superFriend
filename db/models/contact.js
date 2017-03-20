const Sequelize = require('sequelize')
const db = require('APP/db')

const Contact = db.define('contacts', {

  nickname: {
    type: Sequelize.STRING,
    allowNull: false //this
  }
})

module.exports = Contact
