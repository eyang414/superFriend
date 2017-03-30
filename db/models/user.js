'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const db = require('APP/db')
const Messages = require('./message')

const User = db.define('users', {

  username: {
    type: Sequelize.STRING,
  },

  guid: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },

  ZFULLNUMBER: {
    type: Sequelize.STRING,
    set: function(number) {
      this.setDataValue('ZFULLNUMBER', number.replace(/[^0-9]/g, '').slice(-10))
      }
  },

  isUser: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    isUrl: true,
    defaultValue: "https://placeimg.com/100/100/people"
  },

  ZFIRSTNAME: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true
    }
  },

  ZLASTNAME: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true
    }
  },

  isTracked: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  },

  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
	password: Sequelize.VIRTUAL // Note that this is a virtual, and not actually stored in DB
}, {
	indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    // This method is a Promisified bcrypt.compare
    authenticate (plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest, (err, result) => {
          if (err) reject(err)
          else resolve(result)
        })
      )
    },

    getMessages(stateClientGuid) {
      console.log('you are in the getmessages here is stateClientGuid', stateClientGuid)
      return Messages.findAll({
        where: { uploader_id: stateClientGuid },
        order: 'date DESC'
      })
    },

    getSentMessages() {
      return Messages.findAll({
        where: {
          sender_id: this.id
        },
        order: 'date DESC'
      })
    },

    getReceivedMessages() {
      return Messages.findAll({
        where: {
          recipient_id: this.id
        },
        order: 'date DESC'
      })
    }
  }
})

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  user.set('password_digest', hash)
      resolve(user)
	  })
  )
}

module.exports = User
