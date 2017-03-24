import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';


const ContactProfile = (props) => {
  const contacts = props.contacts.allContacts;  
  const messages = props.messages.messages;
  console.log('these are the props', props)

  return (
  // const contactStats = contacts.map(function(contact){

  	
    <div className="container">
      <div className="col">
        <h1 className="header">You and X</h1>
        <img className="profile-img" src="http://lorempixel.com/300/300/people/"></img>
      </div>
      <div className="col">
        <h3>It's been X days/weeks since you last checked in with Person.</h3>
      </div>

    </div>


  );
}

export default ContactProfile;
