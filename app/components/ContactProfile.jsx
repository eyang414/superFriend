import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';

const SingleContactPage = (props) => {
  console.log('these are the props', contact)

  return (
  // const contactStats = contacts.map(function(contact){
  	<div className="container">
    <h1 className="header">LOREM IPSUM</h1>
    <div className="profile-img"><img src="http://lorempixel.com/300/300/people/" /></div>
  	  <table className="table">
        <tbody>
        <tr>
          <th>Last Spoke</th>
          <th>Last Message</th>
          <th>Reach Out</th>
        </tr>
        </tbody>
      </table>
    </div>
  );
}



export default SingleContactPage;
