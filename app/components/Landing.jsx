
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';
import axios from 'axios'

const LandingPage = () => {
  return (
    <div>
      <h1 className="header">WHATSSSSUPPPPP</h1>
    </div>
  )
}

export default LandingPage;
