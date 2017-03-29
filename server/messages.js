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

router.post('/', (req, res, next) => {
	const messages = req.body

	for (let i=0;i<messages.length;i+=100){
		let smallerMessages = messages.slice(i, i + 100)
		let modifiedMessages = smallerMessages.map(message => {
			return {
				content: message.text,
				date: message.date,
				is_sender: message.is_sent,
				ZFULLNUMBER: message.id,
				uploader_id: message.account_guid
			}
		})
		Message.bulkCreate(modifiedMessages)
			.then(() => {
				console.log(`=========== BATCH ${counter} CREATED ================`)
			counter++
		})
			.catch(console.error)
	}
})




module.exports = router

