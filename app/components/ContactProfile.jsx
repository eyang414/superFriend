import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';
var moment = require('moment');
var duration = require('moment-duration-format');
moment().format();

const ContactProfile = (props) => {

  const messages = props.messages.messages;
  const currentContact = props.contacts.currentContact;

  function cleanDate(d) {
    return new Date(parseInt(d)).toString()
  }

  let latestMessage = null;
  let dateOfMessage = null;
  let dateInt = null;
  let timePassed = null;
  let daysPassed = null;
  let weeksPassed = null;
  let messageMoment = null;
  let currentMoment = moment();

  let sentOrReceived = function(latestMessage){
    if (latestMessage.isSender===0){
      return "Received: "
    }else{
      return "Sent: "
    }
  }
  // console.log('these are the props', props)

  axios.get(`/api/contacts/messages/latest/${props.contacts.currentContact.id}`)
  .then(res => {message = res.data})

if (currentContact && currentContact.latestMessage){
  latestMessage = props.contacts.currentContact.latestMessage;
  dateOfMessage = (cleanDate(latestMessage.date));
  messageMoment = moment(latestMessage.date,'x').format("dddd, MMMM Do YYYY, h:mm:ss a");
  dateInt = parseInt(latestMessage.date);
  timePassed = new Date().getTime() - dateInt;


  // console.log('the message moment was', messageMoment);
}
  return (
  // const contactStats = contacts.map(function(contact){
      <div className="container">
        <div className="col">
          <h1 className="header">You and {currentContact.ZFIRSTNAME}</h1>
          <img className="profile-img" src="http://lorempixel.com/300/300/people/"></img>
        </div>
        <div className="col">
          <h3>It's been <big>{moment.duration(timePassed,'milliseconds').format("y [years]:m [months]:w [weeks]:dd [days]:hh [hours]")}</big> since you last checked in with {currentContact.ZFIRSTNAME} {currentContact.ZLASTNAME}.</h3>
          <h4>Last message: "{latestMessage && latestMessage.content}"</h4>
          <h4>{latestMessage && <p>{sentOrReceived(latestMessage)} {messageMoment}</p>}</h4>
        </div>
      </div>
  )};

export default ContactProfile;
