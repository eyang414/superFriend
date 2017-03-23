const Sequelize = require('sequelize')
const db = require('APP/db')

const gmailContacts = db.define('gmailContacts', {

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  }

})

module.exports = gmailContacts
