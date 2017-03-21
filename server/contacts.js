const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('passport')

// iMESSAGE DB:

//get all contacts for a given user
router.get('/', function (req, res, next) {

	// If no user, send empty array
	if (!req.user.id) {
		res.json([])
		return
	}

	User.findAll({
		where: {
			user_id: req.user.id
		},
		include: [{
    	model: User,
    	as: 'Friend'
  		}]
	})
	.then(contacts => {
		res.json(contacts)
	})
	.catch(next)
})

/// GMAIL:


// PASSPORT
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//        User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return done(err, user);
//        });
//   }
// ));

// router.get('/gmail',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/gmail.modify'] }));


// router.get('/gmail', (req, res, next) =>
//   passport.authenticate('google', {
//     scope: ['email', 'https://www.googleapis.com/auth/gmail.modify']
//   })(req, res, next)
// )

// GOOGLE::
// var urlshortener = google.urlshortener('v1');
// const OAuth2 = google.auth.OAuth2;
// const oauth2Client = new OAuth2(
//   YOUR_CLIENT_ID,
//   YOUR_CLIENT_SECRET,
//   YOUR_REDIRECT_URL
// );

// google.options({
//   auth: oauth2Client
// });

// const scopes = [
//   'https://www.googleapis.com/auth/plus.me',
//   'https://www.googleapis.com/auth/calendar'
// ];

// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: 'offline',

//   // If you only need one scope you can pass it as a string
//   scope: scopes,

//   // Optional property that passes state parameters to redirect URI
//   // state: { foo: 'bar' }
// });



module.exports = router