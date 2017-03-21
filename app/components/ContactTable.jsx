import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';

const ContactTable = (props) => {

  console.log('these are the contact props', props)

  // const contacts = props.contacts;
return (
  // const contactStats = contacts.map(function(contact){
  	<div className="container">
    <h1 className="header">Your Contacts</h1>
    <button className="btn btn-primary">SuperSync</button>
  	  <table className="table table-striped">
        <tbody>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Last Spoke</th>
          <th>Last Message</th>
        </tr>
           {/* add some shit */}
        </tbody>
      </table>
    </div>
  );
}



export default ContactTable;

