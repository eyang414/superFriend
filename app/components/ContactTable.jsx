 


import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import { fetchMessages } from '../reducers/messages-reducer';
import axios from 'axios'


var moment = require('moment');
var duration = require('moment-duration-format');
moment().format();

const superSyncClick = () => {
  console.log('SUPER SYYYNC')
  axios.get('/api/contacts/sync')
}
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
  const contacts = props.contacts.allContacts;
  const messages = props.messages.messages;


  // console.log('these are the messages props', messages)


  let contactRows = contacts.map(function(contact){
    let overdueClass = "";
    let overdueText = null;


    

    //profile thumbnail image
    const thumbImage = "http://lorempixel.com/80/80/people/" //placeholder for now

    //social media icons:
    const textIcon = "/images/msg-icon.png"
    const callIcon = "/images/call-icon.png"
    const emailIcon = "/images/email-icon.png"
    const instaIcon = "/images/insta-icon.png"
    const vchatIcon = "/images/vchat-icon.png"

   

    if(lapsedMs(contact) >= 604800000) {
        overdueClass = "overdue"
        overdueText = "**Reach out!**"
        contact.overdueBy = lapsedMs(contact);
    }

    console.log('contact overdue by', contact.overdueBy);

    if (contact.id !== contact.user_id){
      return (
        <tr key = {contact.id}>
        <td> <Link to={`/contacttable/${contact.id}`} ><img className="img-circle" src = {thumbImage}></img></Link></td>
        <td><h5 className = {overdueClass}>{contact.ZFIRSTNAME} {contact.ZLASTNAME} <br></br><br></br>{overdueText}</h5>
          <Link to="sms:+919999999999"><img className="icon" src={textIcon}></img></Link>
          <img className="icon" src={callIcon}></img>
          <img className="icon" src={emailIcon}></img>
          <img className="icon" src={instaIcon}></img>
          <img className="icon" src={vchatIcon}></img>
        </td>
        <td>{contact.latestMessage && moment(contact.latestMessage.date,'x').format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
        <td>{contact.latestMessage && sentOrReceived(contact.latestMessage)} "{contact.latestMessage && contact.latestMessage.content}"</td>
        </tr>
      )
    }
  });

    
return (
  	<div className="container">
    <h1 className="header">Your Contacts</h1>
    <div className="contact-table-buttons">
    <Link to="/editcontacts"><button className="btn btn-primary">Edit Contacts</button></Link>
    <button onClick={superSyncClick} className="btn btn-primary">SuperSync</button>
    </div>
  	  <table className="table">
        <tbody>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Last Spoke</th>
          <th>Last Message</th>
        </tr>
           {contactRows}
        </tbody>
      </table>
    </div>
  );
}



export default ContactTable;
