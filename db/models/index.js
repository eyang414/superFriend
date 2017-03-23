'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Message = require('./message')

OAuth.belongsTo(User)
User.hasOne(OAuth)

User.hasMany(User, {as: 'Friend'})

Message.belongsTo(User, { as: 'Sender', constraints: false })
Message.belongsTo(User, { as: 'Recipient', constraints: false })

module.exports = { User, Message, OAuth }
