


import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';
import axios from 'axios'

const ContactTable = (props) => {
  console.log('THESE ARE JUST THE PROPS', props)
  const contacts = props.contacts.allContacts;  
  const messages = props.messages.messages;


  console.log('these are the messages props', messages)
  let contactRows = contacts.map(function(contact){

    const thumbImage = "http://lorempixel.com/80/80/people/" //-->thumbnail placeholder for now

    //social media icons:
    const textIcon = "/images/msg-icon.png"
    const callIcon = "/images/call-icon.png"
    const emailIcon = "/images/email-icon.png"
    const instaIcon = "/images/insta-icon.png"
    const vchatIcon = "/images/vchat-icon.png"

    messages.forEach(message => {
      if(message.sender_id === contact.id || message.recipient_id === contact.id) {
        if(!contact.message) {
          contact.message = message.content
        }
      }
    })

    if (contact.id !== contact.user_id){
      return (
        <tr key = {contact.id}>
        <td> <Link to={`/contacttable/${contact.id}`} ><img className="thumbnail" src = {thumbImage}></img></Link></td>
        <td><h5>{contact.ZFIRSTNAME} {contact.ZLASTNAME} {contact.id}</h5></td>
        <td></td>
        <td>{contact.message}</td>
        <td>
          <img className="icon" src={textIcon}></img>
          <img className="icon" src={callIcon}></img>
          <img className="icon" src={emailIcon}></img>
          <img className="icon" src={instaIcon}></img>
          <img className="icon" src={vchatIcon}></img>
        </td>
        </tr>
      )}
    });

    const superSyncClick = () => {
      console.log('SUPER SYYYNC')
      axios.get('/api/contacts/sync')
    }

return (
  // const contactStats = contacts.map(function(contact){
  	<div className="container">
    <h1 className="header">Your Contacts</h1>
    <div className="contact-table-buttons">
    <button className="btn btn-primary">Edit Contacts</button>
    <button onClick={superSyncClick} className="btn btn-primary">SuperSync</button>
    </div>
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
