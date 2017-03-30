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


// const loadContacts = require('../util/loadContacts')
// const loadMessages = require('../util/loadMessages')


// iMESSAGE DB / get all contacts

router.post('/', (req, res, next) => {
	const contacts = req.body
	const ourUser = req.user

	return Promise.all(contacts.map(elem => {

		if (elem.ZFULLNUMBER) {
			return User.findOrCreate(
				{
					defaults: { ZFIRSTNAME: elem.ZFIRSTNAME, ZLASTNAME: elem.ZLASTNAME, ZFULLNUMBER: elem.ZFULLNUMBER },
					where: {
						ZFULLNUMBER: elem.ZFULLNUMBER.replace(/[^0-9]/g, '').slice(-10),
						ZFIRSTNAME: elem.ZFIRSTNAME,
						ZLASTNAME: elem.ZLASTNAME
					}
				}
			)
			.then((createdContact) => {
				ourUser.addFriend(createdContact[0])
				console.log('=====Finished Syncing Contacts====')
			})
		}
	})) //closes the Promise.all
	.then(() => {
		res.sendStatus(201)
	})
	.catch(next)
})

router.get('/', function (req, res, next){

let newContacts

	User.findAll({
		where: {
			user_id: req.user && req.user.id
		}
	})
	.then(contacts => {
		newContacts = contacts.map( contact => {

			return Message.findAll({
        		where: { 
			    	$or: 
			    	[
			    		{$and: {sender_id: req.user.id, recipient_id: contact.id}},
			    		{$and: {sender_id: contact.id, recipient_id: req.user.id}}
			    	] 
        		},
        		order: 'date DESC'
			})
			.then(messageArray => {
				if (messageArray){
					contact.dataValues.allMessages = messageArray
					contact.dataValues.latestMessage = messageArray[0]
				}

					return contact
			})
		})
		Promise.all(newContacts)
		.then((modifiedContacts) => {
			console.log(modifiedContacts)
			res.json(modifiedContacts)
		})

	})
	.catch(console.error)
})

router.get('/:id', (req, res, next) => {
	let contact = null

	return User.findById(req.params.id)
		.then(foundContact => {
			contact = foundContact
			return contact.getMessages(req.user.id)
		})
		.then(contactMessages => {
			contact.dataValues.allMessages = contactMessages
			contact.dataValues.latestMessage = contactMessages[0]
			res.json(contact)
		})
	.catch(console.error)
})


router.get('/sync', (req, res, next) => {


	const child = exec('node util/sync.js', {maxBuffer: 1024 * 100000000000000000}, (error, stdout, stderr) => {

		if (error) console.error(error)

	})

	child.stdout.on('data', (chunk) => {
		console.log(chunk.toString())
	})

	child.stderr.on('data', (chunk) => {
		console.error(chunk.toString())
	})


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
			console.log('you are in the Message.findAll part')
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

	User.findById(req.session.passport.user)
	.then(user => {
		return user.getMessages(req.user.id)
	})
	.then(userMessages => {
		console.log("USER MESSAGES", userMessages)
		res.json(userMessages)
	})

})

router.get('/messages/latest/:contactId', function (req, res, next) {

	User.findById(req.params.contactId)
	.then(contact => {
		return contact.getMessages(req.user.id)
	})
	.then(contactMessageswithUser => {
		console.log("CONTACT MESSAGES", contactMessageswithUser[0])
		res.json(contactMessageswithUser[0].content)
	})
})


router.post('/track/all', (req, res, next) => {
	console.log(req.body)

	return User.findAll({
		where: { id: { $in: req.body } }
	})
	.then(contacts => {
		console.log(contacts)
		return Promise.all(contacts.map(contact => {
			return contact.update({ isTracked: 1 })
		}))
	})
	.then(() => res.sendStatus(201))
	.catch(console.error)
})

module.exports = router
