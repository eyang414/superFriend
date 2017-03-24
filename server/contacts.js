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
const exec = require('child_process').exec


// const loadContacts = require('../util/loadContacts')
// const loadMessages = require('../util/loadMessages')


// iMESSAGE DB / get all contacts

router.get('/', function (req, res, next){
	console.log('Here in the get contacts route', req.session)

	User.findAll({
		where: {
			user_id: req.session.passport.user
		}
	})
	.then(contacts => {
		res.json(contacts)
	})
	.catch(next)
})


router.get('/sync', (req, res, next) => {


	const child = exec('node util/sync.js', (error, stdout, stderr) => {
		if (error) console.error(error)
	})


	// const child = childProcess.exec('node ./util/sync', {maxBuffer: 1024 * 10000000}, (error, something) => {
	//   if (error) console.error(error)
	// })
	// exec('node ./util/sync', {maxBuffer: 1024 * 10000000}, (error, something) => {
	//   if (error) console.error(error)
	// })

// This child.on function will first run the child function which uploads iMessage contacts and messages to our database
// Afterwards, it will update the database with associations.
	child.on('close', () => {

		User.findAll(
			{
				where: {user_id: null}
			}
		)
		.then((yourContacts) => {

			yourContacts.forEach((elem) => {
				elem.update({user_id: req.user.id})
			})
		})
		.catch(console.error)

		Message.findAll(
			{
				where: {sender_id: null}
			}
		)
		.then((yourMessages) => {
			yourMessages.forEach((elem) => {
				User.findOne({
					where: {ZFULLNUMBER: elem.ZFULLNUMBER}
				})
				.then((foundUser) => {
					if(foundUser){
						if(elem.is_sender){
							elem.update({
								sender_id: req.user.id,
								recipient_id: foundUser.id
							})
						}
						else{
							elem.update({
								sender_id: foundUser.id,
								recipient_id: req.user.id
							})
						}
					}
				})
				.catch(console.error)
			})
			console.log('suuupersyyyyync complete')
		})
		.then(() => {
			res.redirect('/')
		})
		.catch(console.error)
	})

});

router.get('/messages/all', function (req, res, next) {

	console.log('REQ.USER: ', req.user)
	console.log('REQ.SESSIONS.PASSPORT: ', req.session.passport.user)

	User.findById(req.session.passport.user)
	.then(user => {
		return user.getMessages()
	})
	.then(userMessages => {
		console.log("USER MESSAGES", userMessages)
		res.json(userMessages)
	})

})

router.get('/messages/latest/:contactId', function (req, res, next) {

	User.findById(req.params.contactId)
	.then(contact => {
		return contact.getMessages()
	})
	.then(contactMessageswithUser => {
		console.log("CONTACT MESSAGES", contactMessageswithUser[0])
		res.json(contactMessageswithUser[0].content)
	})
})


router.get('/gmail', function(req, res, next){

	// Find User
	Oauth.findOne({
		where: {
			user_id: req.user.id
		}
	})
	.then(authUser => {

		// Get list of new message IDs
		axios.get('https://www.googleapis.com/gmail/v1/users/me/messages', {
			headers: {
				Authorization: 'Bearer ' + authUser.accessToken
			}
		})
		.then(allMails => {
			console.log(allMails)

			const emailPromises = allMails.data.messages.map( message => {
				return axios.get(`https://www.googleapis.com/gmail/v1/users/me/messages/${message.id}/?format=metadata`, {
					headers: {
						Authorization: 'Bearer ' + authUser.accessToken
					}
				})
			})
			return Promise.all(emailPromises)
		})
		.then(emailsArray => {

			function findSender (array) {
				return array.name === "From"
			}

			function findSubject (array) {
				return array.name === "Subject"
			}

			function findDate(array) {
				return array.name === "Date"
			}

			const emailMap = emailsArray.map( email => {
				const snippet  = email.data.snippet.replace(/&#39;/g, '').replace(/&amp;/g, '&').trim()
				const headers = email.data.payload.headers

				const senderEmail = headers.find(findSender).value.trim()
				let emailAddress = senderEmail.slice(senderEmail.indexOf('<') +1, senderEmail.length -1)

				const senderName = headers.find(findSender).value.trim()
				let name = senderName.slice(0, senderEmail.indexOf('<')-1).replace(/"/g, '').trim()

				const subject = headers.find(findSubject).value
				const date = headers.find(findDate).value
				return {
					name,
					emailAddress,
					subject,
					snippet,
					date
				}
			})
			res.json(emailMap)
		})
		.catch(error => {
			console.log(error)
			next(error)
		})
	})
})


router.get('/gmail/:id', function(req, res, next){

	Oauth.findOne({
		where: {user_id: req.user.id}
	})
	.then(authUser => {

		axios.get(`https://www.googleapis.com/gmail/v1/users/me/messages/${req.params.id}`, {
			headers: {
				Authorization: 'Bearer ' + authUser.accessToken
			}
		})
		.then(response => {

			if (response.payload.body.size === 0) {

				let bodyArray = []

				response.payload.parts.forEach( i => {

					let base64 = i.body.data
					let buff = Buffer.from(base64, 'base64')
					bodyArray.push(simpleParser(buff))
				})

				Promise.all(bodyArray)
				.then(bodyarray => {
					res.json(bodyarray)
				})
				.catch(error => {
					console.log(error)
					next(error)
				})

			} else {

				let base64 = response.payload.body.data
				let buff = Buffer.from(base64, 'base64')
				simpleParser(buff)
				.then( results => {
					console.log(results)
					res.json(results)
				})
				.catch(error => {
					console.log(error)
					next(error)
				})
			}
		})
		.catch(error => {
			console.log(error)
			next(error)
		})
	})
})

router.get('/:id', (req, res) => {
	return User.findById(req.params.id)
		.then(user => {
		res.json(user)
		})
	.catch(console.error)
})



module.exports = router
