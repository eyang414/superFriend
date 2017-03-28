 


import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import axios from 'axios'

function checkAll(bx){
    var form = bx.form; //returns reference to entire form object
    var ischecked = bx.checked;
    for (var i = 0; i < form.length; ++i) {
        if (form[i].type == 'checkbox') {
            form[i].checked = ischecked;
        }
    }
}

var x = document.getElementById("headerCheck").form.id;
console.log(x);

const AddressBookTable = (props) => {
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
          <th><input type="checkbox" id="headerCheck" onclick="checkAll(this)" /></th>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
           {contactRows}
        </tbody>
      </table>
    </div>
  );
}



export default AddressBookTable;
