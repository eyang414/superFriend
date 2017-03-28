'use strict'; // eslint-disable-line semi

const app = require('APP')
const {env} = app
const debug = require('debug')(`${app.name}:auth`)
const passport = require('passport')

const User = require('APP/db/models/user')
const OAuth = require('APP/db/models/oauth')
const auth = require('express').Router()

const LocalStrategy = require('passport-local').Strategy;

/*************************
 * Auth strategies
 *
 * The OAuth model knows how to configure Passport middleware.
 * To enable an auth strategy, ensure that the appropriate
 * environment variables are set.
 *
 * You can do it on the command line:
 *
 *   FACEBOOK_CLIENT_ID=abcd FACEBOOK_CLIENT_SECRET=1234 npm start
 *
 * Or, better, you can create a ~/.$superfriend.env.json file in
 * your home directory, and set them in there:
 *
 * {
 *   FACEBOOK_CLIENT_ID: 'abcd',
 *   FACEBOOK_CLIENT_SECRET: '1234',
 * }
 *
 * Concentrating your secrets this way will make it less likely that you
 * accidentally push them to Github, for example.
 *
 * When you deploy to production, you'll need to set up these environment
 * variables with your hosting provider.
 **/

// Facebook needs the FACEBOOK_CLIENT_ID and FACEBOOK_CLIENT_SECRET
// environment variables.
// OAuth.setupStrategy({
//   provider: 'facebook',
//   strategy: require('passport-facebook').Strategy,
//   config: {
//     clientID: env.FACEBOOK_CLIENT_ID,
//     clientSecret: env.FACEBOOK_CLIENT_SECRET,
//     callbackURL: `${app.baseUrl}/api/auth/login/facebook`,
//   },
//   passport
// })

// Google needs the GOOGLE_CLIENT_SECRET AND GOOGLE_CLIENT_ID
// environment variables.

// console.log(env)

// OAuth.setupStrategy({
//   provider: 'google',
//   strategy: require('passport-google-oauth').OAuth2Strategy,
//   config: {
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: `${app.baseUrl}/api/auth/login/google`,
//   },
//   passport
// })

OAuth.setupStrategy({
  provider: 'google',
  strategy: require('passport-google-oauth').OAuth2Strategy,
  config: {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${app.baseUrl}/api/auth/login/google`,
  },
  passport
})

// Github needs the GITHUB_CLIENT_ID AND GITHUB_CLIENT_SECRET
// environment variables.
// OAuth.setupStrategy({
//   provider: 'github',
//   strategy: require('passport-github2').Strategy,
//   config: {
//     clientID: env.GITHUB_CLIENT_ID,
//     clientSecret: env.GITHUB_CLIENT_SECRET,
//     callbackURL: `${app.baseUrl}/api/auth/login/github`,
//   },
//   passport
// })

// Other passport configuration:
// Passport review in the Week 6 Concept Review:
// https://docs.google.com/document/d/1MHS7DzzXKZvR6MkL8VWdCxohFJHGgdms71XNLIET52Q/edit?usp=sharing
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(
  (id, done) => {
    debug('will deserialize user.id=%d', id)
    User.findById(id)
      .then(user => {
        if (!user) debug('deserialize retrieved null user for id=%d', id)
        else debug('deserialize did ok user.id=%d', id)
        done(null, user)
      })
      .catch(err => {
        debug('deserialize did fail err=%s', err)
        done(err)
      })
  }
)

// require.('passport-local').Strategy => a function we can use as a constructor, that takes in a callback
passport.use(new LocalStrategy(
  (username, password, done) => {
    // debug('will authenticate user(email: "%s")', username)
    User.findOne({where: {
      email: username}})
      .then(user => {
        // console.log(user)
        if (!user) {
          // debug('authenticate user(email: "%s") did fail: no such user', username)
          return done(null, false, { message: 'Login incorrect' })
        }
        return user.authenticate(password)
          .then(ok => {
            if (!ok) {
              // debug('authenticate user(email: "%s") did fail: bad password')
              return done(null, false, { message: 'Login incorrect' })
            }
            // debug('authenticate user(email: "%s") did ok: user.id=%d', username, user.id)
            done(null, user)
          })
      })
      .catch(done)
  }
))

auth.get('/whoami', (req, res) => res.send(req.user))

// SIGNUP
auth.post('/signup', function (req, res, next) {

  console.log('HIT SIGNUP: ', req.body)

  User.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      ZFIRSTNAME: req.body.firstName,
      ZLASTNAME: req.body.lastName,
      password: req.body.password
    }
  })
  .spread((user, created) => {
    if (created) {
      req.login(user, function (err){
        if (err) next(err)
        else res.json(user)
      })
    } else {
      res.sendStatus(401)
    }
  }) // how I get this to log me in automaticall...
})

// POST requests for local login:
auth.post('/login/local', passport.authenticate('local', { successRedirect: '/login' }))

// GET requests for OAuth login:
// Register this route as a callback URL with OAuth provider
auth.get('/login/:strategy', (req, res, next) => {
  console.log('HERE IN GOOGLE ROUTER')
  passport.authenticate(req.params.strategy, {
    scope: ['email', 'profile', 'https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/gmail.compose'],
    successRedirect: '/login',
    // Specify other config here, such as "scope"
  })(req, res, next)
})

auth.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/api/auth/whoami')
})

module.exports = auth

