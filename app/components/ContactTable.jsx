import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';

const ContactTable = (props) => {

  
  const contacts = props.contacts.allContacts;
  console.log('these are the contact props', contacts)
  let contactRows = contacts.map(function(contact){
    console.log(contact);
    if (contact.id !== contact.user_id){
      return (
        <tr key = {contact.id}>
        <td><img className="thumbnail" src = "http://lorempixel.com/80/80/people/"></img></td>
        <td>{contact.firstName} {contact.lastName}</td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
      )}
    });
    
  
return (
  // const contactStats = contacts.map(function(contact){
  	<div className="container">
    <h1 className="header">Your Contacts</h1>
    <button className="btn btn-primary">SuperSync</button>
  	  <table className="table">
        <tbody>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Last Spoke</th>
          <th>Last Message</th>
          <th>Reach Out</th>
        </tr>
           {contactRows}
        </tbody>
      </table>
    </div>
  );
}



export default ContactTable;

