const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const Oauth = require('../db/models/oauth')
// const passport = require('passport')
const axios = require('axios')
const google = require('googleapis')
const Gmail = require('node-gmail-api')
const Promise = require('bluebird')
const simpleParser = require('mailparser').simpleParser


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

router.get('/messages', function(req, res, next){
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


// router.get('/getusers', function(req, res, next){

// 	Oauth.findOne({
// 		where: {user_id: req.user.id}
// 	})
// 	.then(authUser => {

// 		let gmail = new Gmail(authUser.accessToken)
// 		let messages = gmail.messages('label:inbox', {
// 			max: 3,
// 			fields: ['payload']
// 		})

// 		console.log(messages)

// 		let senderArray = []

// 		messages.on('data', function(response){

// 			// console.log(response.payload.headers)
// 			const headerArray = response.payload.headers

// 			function findSender (array) {
// 				return array.name === "From"
// 			}

// 			let emails = headerArray.find(findSender).value
// 			console.log(emails)

// 			senderArray.push(emails)


// 		})

// 		// if(senderArray.length === )
// 		// return senderArray
// 	})
// 	.then(sender => {
// 		res.json({
// 			"message": "This is the sender array hopefully",
// 			"sender": sender
// 		})
// 	})
// })


module.exports = router

