const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const Message = require('../db/models/message')
const Oauth = require('../db/models/oauth')
// const passport = require('passport')
const axios = require('axios')
const google = require('googleapis')
const Gmail = require('node-gmail-api')
const Promise = require('bluebird')
const simpleParser = require('mailparser').simpleParser


router.get('/', function (req, res, next){
	Message.findAll({
		where: {
			recipient_id: req.session.passport.user
		}
	})
	.then(contacts => {
		res.json(contacts)
	})
	.catch(next)
})




module.exports = router

