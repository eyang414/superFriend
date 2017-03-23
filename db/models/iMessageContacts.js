const Sequelize = require('sequelize')
const db = require('APP/db')

const iMessageContacts = db.define('iMessageContacts', {

  ZFIRSTNAME: {
    type: Sequelize.STRING
  },

  ZLASTNAME: {
    type: Sequelize.STRING
  },

  ZFULLNUMBER: {
    type: Sequelize.STRING,
    set: function(number) {
      this.setDataValue('ZFULLNUMBER', number.replace(/[^0-9]/g, '').slice(-10))
      }
  }

})

module.exports = iMessageContacts
