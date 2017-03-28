
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';
import axios from 'axios'


const LandingPage = () => {
  return (
    <div className="landing">
      <h1 className="header">Say goodbye to "falling out of touch."</h1>
      <br />
      <p>SuperFriend is a contact management application that allows you to keep track your interactions with selected contacts and receive gentle, friendly reminders when it's time to reach out again.</p>
    </div>
  )
}

export default LandingPage;
