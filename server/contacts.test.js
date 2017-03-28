'use strict'; // eslint-disable-line semi

const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const Users = require('../db/models/user')
const Message = require('../db/models/message')
const app = require('./start')

describe('/api/contacts', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () => {

    //need to upload db with some dummy data
    Users.bulkCreate(
      {ZFIRSTNAME: 'dan', ZLASTNAME: 'lowe', ZFULLNUMBER: '1231231234', user_id: 9090909090},
      {ZFIRSTNAME: 'eric', ZLASTNAME: 'yang', ZFULLNUMBER: '3213214321', guid: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', id: 9090909090, isUser: true},
      {ZFIRSTNAME: 'bambam', ZLASTNAME: 'bambam', ZFULLNUMBER: '1112223333',user_id: 9090909090},
      {ZFIRSTNAME: 'menaka', ZLASTNAME: 'sampath', ZFULLNUMBER: '2223334444',user_id: 9090909090},
      {ZFIRSTNAME: 'alex', ZLASTNAME: 'k', ZFULLNUMBER: '3334445555',user_id: 9090909090},
      {ZFIRSTNAME: 'ally', ZLASTNAME: 'cody', ZFULLNUMBER: '4445556666',user_id: 9090909090},
      {ZFIRSTNAME: 'd', ZLASTNAME: 'l', ZFULLNUMBER: '9998887777', user_id: 123123123},
      {ZFIRSTNAME: 'b', ZLASTNAME: 'b', ZFULLNUMBER: '0009998888', guid: 'thiscanbeanything', id: 123123123, isUser: true},
      {ZFIRSTNAME: 'e', ZLASTNAME: 'y', ZFULLNUMBER: '5768476574',user_id: 123123123},
      {ZFIRSTNAME: 'm', ZLASTNAME: 's', ZFULLNUMBER: '2344324324',user_id: 123123123},
      {ZFIRSTNAME: 'a', ZLASTNAME: 'k', ZFULLNUMBER: '3337746584',user_id: 123123123},
      {ZFIRSTNAME: 'a', ZLASTNAME: 'c', ZFULLNUMBER: '3845747293',user_id: 123123123},
    )

    Message.bulkCreate(
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
      {content: 'hi guys what things do i normally say... hahahaaa', ZFULLNUMBER: '3845747293', uploader_id: 'thiscanbeanything', date: '1490713234000'},
    )

      it('needs to return the corresponding contact with latest message', () => {
        request(app)
          .get(`/api/contacts`)
          .expect(401)
      })

  })


})
