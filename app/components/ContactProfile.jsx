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
  let latestMessage = props.contacts.currentContact.latestMessage;
  // let date = cleanDate(props.contacts.currentContact.date);
  function sentOrReceived(latestMessage){
    if (latestMessage.isSender===0){
      return "received"
    }else{
      return "sent"
    }
  }
  console.log('these are the props', props)
  console.log('this is the latest message', latestMessage)

  axios.get(`/api/contacts/messages/latest/${props.contacts.currentContact.id}`)
  .then(res => {message = res.data})

  // axios.get(`/api/contacts/messages/latest/${props.contacts.currentContact.id}`)
  // .then(res => {message = res.data})
  // Display all messages from a single user
  // Move this action creator and reducer into a single file...
  

  return (
  // const contactStats = contacts.map(function(contact){
      <div className="container">
        <div className="col">
          <h1 className="header">You and X</h1>
          <img className="profile-img" src="http://lorempixel.com/300/300/people/"></img>
        </div>
        <div className="col">
          <h3>It's been X days/weeks since you last checked in with Person.</h3>
          <h4>Last message: "{latestMessage && latestMessage.content}", {latestMessage && latestMessage.date}</h4>
        </div>
      </div>
  )};

export default ContactProfile;



