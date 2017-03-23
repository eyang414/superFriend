const Promise = require('bluebird')
const expect = require('chai').expect
const User = require('../db/models/user')
const Message = require('../db/models/message')
const db = require('APP/db')


describe('The `User` model', function () {
  before(() => db.sync({force:true}))

  //fake user
  let fakeUser1;

  let fakeAdmin1 = {
    email: "eyang@eyang.com",
    ZFIRSTNAME: 'eric',
    ZLASTNAME: 'yang',
    password: '1234',
    isAdmin: true,
    imageUrl: 'http://respect-mag.com/wp-content/uploads/2016/07/011716-NBA-Thunder-Russell-Westbrook-PI-CH.vresize.1200.675.high_.84.jpg'
  }

  beforeEach(function(){
    fakeUser1 = User.build({
      email: "bambam@hello.com",
      ZFIRSTNAME: 'bambam',
      ZLASTNAME: 'sampath',
      password: 'bambam'
    })
  })

  afterEach(function () {
    return Promise.all([
      Article.truncate({ cascade: true }),
      User.truncate({ cascade: true })
    ])
  })

  describe('attributes definition', function(){

    it('makes sure isAdmin is default false', function(){
      return fakeUser1.save()
      .then(function (savedFakeUser){
        expect(savedFakeUser.isAdmin === false)
      })
    })

    it('makes sure we dont have duplicate emails for users', function(){
      return fakeUser1.save()
      .then(function(){
        User.create({})
      })
    })
  })
})

describe('The `iMessageContacts` model', function(){
  before(() => db.sync({force:true}))



})

/*
- Make sure phone number format is good
DONE- isAdmin is default false
- Makes sure we dont have duplicate emails for users
- What needs to be NOT null
- state.auth.user or whatever is passed in and works.
*/
