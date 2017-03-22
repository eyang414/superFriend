import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';

const ContactTable = (props) => {

  const contacts = props.contacts.allContacts;
  console.log('these are the contact props', contacts)
  let contactRows = contacts.map(function(contact){

    const thumbImage = "http://lorempixel.com/80/80/people/" //-->thumbnail placeholder for now

    //social media icons:
    const textIcon = "/images/msg-icon.png"
    const callIcon = "/images/call-icon.png"
    const emailIcon = "/images/email-icon.png"
    const instaIcon = "/images/insta-icon.png"
    const vchatIcon = "/images/vchat-icon.png"

    console.log(contact);
    if (contact.id !== contact.user_id){
      return (
        <tr key = {contact.id}>
        <td> <Link to={`/${contact.id}`} ><img className="thumbnail" src = {thumbImage}></img></Link></td>
        <td><h5>{contact.ZFIRSTNAME} {contact.ZLASTNAME}</h5></td>
        <td></td>
        <td></td>
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
    
  
return (
  // const contactStats = contacts.map(function(contact){
  	<div className="container">
    <h1 className="header">Your Contacts</h1>
    <div className="contact-table-buttons">
    <button className="btn btn-primary">Edit Contacts</button>
    <button className="btn btn-primary">SuperSync</button>
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

