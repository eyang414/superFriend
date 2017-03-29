


import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';
import axios from 'axios'
var moment = require('moment');
var duration = require('moment-duration-format');
moment().format();


function cleanDate(d) {
  return new Date(parseInt(d)).toString()
}

let lapsedMs = function(contact) {
  if (contact.latestMessage) {
    return (new Date().getTime() - parseInt(contact.latestMessage.date))
  }
}

let sentOrReceived = function(message){
    if (message.isSender===0){
      return "Received: "
    }else{
      return "Sent: "
    }
}

const ContactTable = (props) => {
  // console.log('THESE ARE JUST THE PROPS', props)
  const contacts = props.contacts.allContacts.filter((contact) => {
    return props.contacts.selectedContacts.includes(contact.id)
  });
  
  const messages = props.messages.messages;


  // console.log('these are the messages props', messages)


  let contactRows = contacts.map(function(contact){
    let overdueClass = "";
    let overdueText = null;

    let thumbImage = "https://placeimg.com/100/100/people" //-->thumbnail placeholder for now

    //social media icons:
    const textIcon = "/images/msg-icon.png"
    const callIcon = "/images/call-icon.png"
    const emailIcon = "/images/email-icon.png"
    const instaIcon = "/images/insta-icon.png"
    const vchatIcon = "/images/vchat-icon.png"
    // console.log('these are the specific contact props', contact);

    if(lapsedMs(contact) >= 604800000) {
        overdueClass = "overdue"
        overdueText = "**Reach out!**"
    }

    if (contact.id !== contact.user_id){
      return (
        <tr key = {contact.id}>
        <td> <Link to={`/contacttable/${contact.id}`} ><img className="thumbnail" src = {thumbImage}></img></Link></td>
        <td><h5 className = {overdueClass}>{contact.ZFIRSTNAME} {contact.ZLASTNAME} <br></br><br></br>{overdueText}</h5></td>
        <td>{contact.latestMessage && moment(contact.latestMessage.date,'x').format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
        <td>{contact.latestMessage && sentOrReceived(contact.latestMessage)} "{contact.latestMessage && contact.latestMessage.content}"</td>
        <td>
          <img className="icon" src={textIcon}></img>
          <img className="icon" src={callIcon}></img>
          <img className="icon" src={emailIcon}></img>
          <img className="icon" src={instaIcon}></img>
          <img className="icon" src={vchatIcon}></img>
        </td>
        </tr>
      )}
    })


return (
  	<div className="container">
    <h1 className="header">Your Contacts</h1>
    <div className="contact-table-buttons">
    <Link to='/editcontacts'><button className="btn btn-primary">Edit Contacts</button></Link>
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
