import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';

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

  let sentOrReceived = function(latestMessage){
    if (latestMessage.isSender===0){
      return "received"
    }else{
      return "sent"
    }
  }
  // console.log('these are the props', props)

  axios.get(`/api/contacts/messages/latest/${props.contacts.currentContact.id}`)
  .then(res => {message = res.data})

if (currentContact && currentContact.latestMessage){
  latestMessage = props.contacts.currentContact.latestMessage;
  console.log('this is the latest message', latestMessage)
  console.log('this is the current contact', currentContact)
  console.log('this is the date of that message', latestMessage.date);
  dateOfMessage = (cleanDate(latestMessage.date));
  dateInt = parseInt(latestMessage.date);
  timePassed = new Date().getTime() - dateInt;
  daysPassed = Math.floor(timePassed/86400000);



  console.log(dateOfMessage);
  console.log('this is the raw current date', new Date().getTime());
  console.log('this is the raw message date', dateInt);
  console.log(sentOrReceived(latestMessage));
  console.log('this is the time passed in milliseconds', timePassed);
  console.log('this is the time passed in days')

}
  return (
  // const contactStats = contacts.map(function(contact){
      <div className="container">
        <div className="col">
          <h1 className="header">You and {currentContact.ZFIRSTNAME}</h1>
          <img className="profile-img" src="http://lorempixel.com/300/300/people/"></img>
        </div>
        <div className="col">
          <h3>It's been <big>{daysPassed}</big> days since you last checked in with {currentContact.ZFIRSTNAME} {currentContact.ZLASTNAME}.</h3>
          <h4>Last message: "{latestMessage && latestMessage.content}", {latestMessage && <p>{sentOrReceived(latestMessage)} {dateOfMessage}</p>}</h4>
        </div>
      </div>
  )};

export default ContactProfile;
