 
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import axios from 'axios'


 
class EditContactsForm extends React.Component {
  constructor (props) {
    super (props) 
      this.state = {
        allChecked: false,
        
    }
    this.toggle = this.toggle.bind(this)
  }
  // console.log('these are the messages props', messages)

  // contactRows = contacts.map(function(contact){
  //   if (contact.id !== contact.user_id){
  //     return (
  //       <tr key = {contact.id}>
  //       <td><input type="checkbox" checked={isChecked} name="foo" /></td>
  //       <td>{contact.ZFIRSTNAME} {contact.ZLASTNAME}</td>
  //       <td>{contact.ZFULLNUMBER}</td>
  //       </tr>
  //     )
  //   }
  // });
toggle(){
  this.setState({allChecked: !this.state.allChecked})
}

render () {
  let allChecked = this.state.allChecked;
  return (
    <div className="container">
    <h1 className="header">Your Address Book</h1>

      <table className="table">
        <tbody>
        <tr>
          <th><input type="checkbox" onClick={this.toggle}/></th>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
           {this.props.contacts && this.props.contacts.allContacts.map(function(contact){
          if (contact.id !== contact.user_id){
          return (
            <tr key = {contact.id}>
            <td><input type="checkbox" checked={allChecked} name="foo" /></td>
            <td>{contact.ZFIRSTNAME} {contact.ZLASTNAME}</td>
            <td>{contact.ZFULLNUMBER}</td>
            </tr>
          )
        }
      })}
           
        </tbody>
      </table>
    </div>
  );
}

}



export default EditContactsForm;
