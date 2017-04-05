'use strict'; // eslint-disable-line semi

const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('../models/user')
const Message = require('../models/message')
const app = require('../../server/start')
const dummyUsers = require('../../demoData').dummyUser
const dummyMessages = require('../../demoData').dummyMessages

describe('User Model tests', () => {

  before('Sync and seed the database', () => {

    return User.bulkCreate(
      [
        {ZFIRSTNAME: 'dan', ZLASTNAME: 'lowe', ZFULLNUMBER: '+86-(123)-123-1234'},
        {ZFIRSTNAME: 'eric', ZLASTNAME: 'yang', ZFULLNUMBER: '(321)-321-4321', guid: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', isUser: true},
        {ZFIRSTNAME: 'bambam', ZLASTNAME: 'bambam', ZFULLNUMBER: '111-222-3333'},
        {ZFIRSTNAME: 'menaka', ZLASTNAME: 'sampath', ZFULLNUMBER: '1-222-3334444'},
        {ZFIRSTNAME: 'alex', ZLASTNAME: 'k', ZFULLNUMBER: '+13334445555'},
        {ZFIRSTNAME: 'ally', ZLASTNAME: 'cody', ZFULLNUMBER: '4445556666'},
        {ZFIRSTNAME: 'd', ZLASTNAME: 'l', ZFULLNUMBER: '(999)8887777'},
        {ZFIRSTNAME: 'b', ZLASTNAME: 'b', ZFULLNUMBER: '123-000-999-8888', guid: 'thiscanbeanything', isUser: true},
        {ZFIRSTNAME: 'e', ZLASTNAME: 'y', ZFULLNUMBER: '57-684(765)74'},
        {ZFIRSTNAME: 'm', ZLASTNAME: 's', ZFULLNUMBER: '++2344324324'},
        {ZFIRSTNAME: 'a', ZLASTNAME: 'k', ZFULLNUMBER: '+(333)7746584'},
        { ZFIRSTNAME: 'a', ZLASTNAME: 'c', ZFULLNUMBER: '3845747293' }
      ]
    )
    .then(() => {

      return Message.bulkCreate(
        [
          {content: 'hi my name is dan', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481078441000'},
          {content: 'LATEST MESSAGE dans latest message', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: 'i am creating superfraanszzsdsz', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481078451000'},
          {content: 'this is going to be the third messgae', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481878441000'},
          {content: 'radioheaad', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1581078441000'},
          {content: 'uuuummm', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481073441000'},
          {content: 'i eat pastrami from open market', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '900000'},
          {content: 'barkbark', ZFULLNUMBER: '1112223333', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1681078441000'},
          {content: 'LATEST MESSAGE*looks at your food with ridic sad puppy eyes and furrowed eyebrows(latest message)', ZFULLNUMBER: '1112223333', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: '*sigh/*gaveuponfunfortheday', ZFULLNUMBER: '1112223333', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481073441000'},
          {content: 'you want some coffee?', ZFULLNUMBER: '2223334444', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '78441000'},
          {content: 'bambam come here!', ZFULLNUMBER: '2223334444', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481073441000'},
          {content: 'LATEST MESSAGE-menaka: snacks for everyone!', ZFULLNUMBER: '2223334444', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: 'i am a DJ', ZFULLNUMBER: '3334445555', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '394857093487'},
          {content: 'LATEST MESSAGE-alex: for some reason eric says i remind him of ben wyatt', ZFULLNUMBER: '3334445555', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: 'LATEST MESSAGE-ally: i cant think of something for her to say', ZFULLNUMBER: '3845747293', uploader_id: 'thiscanbeanything', date: '1490713572000'},
          { content: 'hi guys what things do i normally say... hahahaaa', ZFULLNUMBER: '3845747293', uploader_id: 'thiscanbeanything', date: '1490713234000' }
        ]
      )
    })
  })

  it('Should be able to find a user from the seed data', () => {
    return User.findOne({
      where: { ZFIRSTNAME: 'dan'}
    })
    .then(user => {
        expect(user.ZFIRSTNAME).to.equal('dan')
    })
  })

  it('Should create 10-digit, numeric phone numbers, regardless of initial input', () => {
    return User.findOne({
      where: { ZFIRSTNAME: 'dan'}
    })
    .then(user => {
        expect(user.ZFULLNUMBER).to.equal('1231231234')
    })
  })

  it('Should be able to associate Users to other Users as contacts', () => {

    let userRef = null
    return User.findOne({
      where: { ZFIRSTNAME: 'dan'}
    })
      .then(user => {
        userRef = user
        return User.findAll({ where: { id: { $ne: userRef.id } }})
      })
      .then(otherUsers => {
        return Promise.all(otherUsers.map(user => {
          return user.update({ user_id: userRef.id })
        }))
      })
      .then(() => {
        return User.findAll({ where: { id: { $ne: userRef.id } }})
      })
      .then(otherUsers => {
        expect(userRef.user_id).to.equal(null)
        otherUsers.forEach(user => {
          expect(user.user_id).to.equal(userRef.id)
        })
    })
  })
})
