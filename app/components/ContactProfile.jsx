import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';

const ContactProfile = (props) => {
  const contacts = props.contacts.allContacts;
  const messages = props.messages.messages;
  // function cleanDate(d) {return new Date(+d.replace(/\/Date\((\d+)\)\//, '$1'))}
  let currentContact = props.contacts.currentContact;
  let latestMessage = props.contacts.currentContact.latestMessage;
  // let latestMessageDate = new Date(parseInt(latestMessage.date));
  // let date = cleanDate(props.contacts.currentContact.date);
  function sentOrReceived(latestMessage){
    if (latestMessage.isSender===0){
      return "received"
    }else{
      return "sent"
    }
  }

  // console.log('this was when it was send', latestMessageDate)

  axios.get(`/api/contacts/messages/latest/${props.contacts.currentContact.id}`)
  .then(res => {message = res.data})

  console.log('these are the props', props)
  console.log('this is the currentContact', currentContact)
  console.log('this is the latest message', latestMessage)
  // console.log('this is the  date', props.contacts.currentContact.latestMessage.date)

  return (
      <div className="container">
        <div className="col">
          <h1 className="header">You and {currentContact.ZFIRSTNAME} {currentContact.ZLASTNAME}</h1>
          <img className="profile-img" src="http://lorempixel.com/300/300/people/"></img>
        </div>
        <div className="col">
          <h3>It's been X days/weeks since you last checked in with {currentContact.ZFIRSTNAME}.</h3>
          <h4>Last message: "{latestMessage && latestMessage.content}"</h4>
        </div>
      </div>
  )};

export default ContactProfile;



