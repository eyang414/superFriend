 
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import axios from 'axios'


const EditContactsForm = (props) => {
  // console.log('THESE ARE JUST THE PROPS', props)
  const contacts = props.contacts.allContacts;
  // console.log('these are the messages props', messages)

  let contactRows = contacts.map(function(contact){
    if (contact.id !== contact.user_id){
      return (
        <tr key = {contact.id}>
        <td><input type="checkbox" /></td>
        <td>{contact.ZFIRSTNAME} {contact.ZLASTNAME}</td>
        <td>{contact.ZFULLNUMBER}</td>
        </tr>
      )
    }
  });

    
return (
  	<div className="container">
    <h1 className="header">Your Address Book</h1>

  	  <table className="table" sortable='sortable'>
        <tbody>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
           {contactRows}
        </tbody>
      </table>
    </div>
  );
}



export default EditContactsForm;
