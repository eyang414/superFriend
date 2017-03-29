 
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchContacts } from '../reducers/contacts-reducer';
import axios from 'axios'

// function toggle(source) {
//   let checkboxes = document.getElementsByName('foo');
//   for(var i=0, n=checkboxes.length;i<n;i++) {
//     checkboxes[i].checked = source.checked;
//   }
// }

class EditContactsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: []
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(contact) {
    const selected = Array.from(this.state.selected)
    const contactIndex = selected.indexOf(contact)
    if (contactIndex === -1){
      selected.push(contact)
    }else{
      selected.splice(contactIndex, 1)
    }
    this.setState({
      selected: selected
    })
    console.log(selected);
  }

  // const checkboxes = document.getElementsByName('foo');
  // const checkboxesArr = [].slice.call(checkboxes);
  // console.log('these are the checkboxes', checkboxes);
  // console.log('this is an array of checkboxes', checkboxesArr);
  // let checked = checkboxesArr.filter((el) => (el.checked===true));
  // console.log(checked);
  // console.log(checked);
  render() {
    const contacts = this.props.contacts.allContacts;
    let contactRows = contacts.map(function(contact){
    if (contact.id !== contact.user_id){
      return (
        <tr key = {contact.id} name="bar">
        <td><input type="checkbox" name="foo" onClick={() => handleSelect(contact.id)}/></td>
        <td>{contact.ZFIRSTNAME} {contact.ZLASTNAME}</td>
        <td>{contact.ZFULLNUMBER}</td>
        </tr>
      )
    }
  });
  return (
    <div className="container">
    <h1 className="header">Your Address Book</h1>
    <button className="btn btn-primary">Add to Tracked</button>
      <table className="table">
        <tbody>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
           {contactRows}
        </tbody>
      </table>
    </div>
    )
  }
}

export default EditContactsForm