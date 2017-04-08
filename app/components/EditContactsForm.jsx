
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { selectContacts } from '../actions/contacts';
import axios from 'axios'
import ContactTable from '../components/ContactTable'
import store from '../store'
const Loading = require('react-loading')


class EditContactsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: [],
      inputValue: '',

    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //LIFECYCLE COMPONENTS
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({selected: store.getState().contacts.selectedContacts})
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

//EVENT HANDLERS:


  //TOGGLES A CHECKBOX, SELECTS OR DESELECTS AN INDIVIDUAL CONTACT:
  handleSelect(contact) {
    const selected = Array.from(this.state.selected)
    const contactIndex = selected.indexOf(contact)
    if (contactIndex === -1){
      if (selected.length<20){
        selected.push(contact)
        console.log('this is the this', this)
      }else{
        window.alert("We're sorry! At this time, you can only select 20 contacts to track.");
        console.log('this is the this', this)
      }
    }else{
      selected.splice(contactIndex, 1)
    }
    this.setState({
      selected: selected
    })
    console.log(selected)
  }




  handleChange(evt) {
    console.log(evt.target.value)
    this.setState({
      inputValue: evt.target.value
    })
  }

  //SUBMIT WHICH CONTACTS ARE SELECTED:
  handleSubmit(){
    console.log(selectContacts)
    store.dispatch(selectContacts(this.state.selected))
    axios.post('/api/contacts/track/all', this.state.selected)
    browserHistory.push('/contacttable') //redirects to contact table
  }




  render() {

    let filteredContacts = []
    const inputValue = this.state.inputValue

    // if(this.props.contacts) {
      filteredContacts = this.props.contacts.allContacts.filter(contact => (contact.ZLASTNAME && contact.ZLASTNAME.match(inputValue)) || (contact.ZFIRSTNAME && contact.ZFIRSTNAME.match(inputValue)))
    // }

    var self = this;
    const contacts = filteredContacts;

    //THIS IS THE MAP FUNCTION THAT GIVES US EACH CONTACT'S INFO IN JSX
    let contactRows = contacts.map(function(contact){
      let isChecked = false;
      if(self && self.state.selected.includes(contact.id)) {
        isChecked = true
      }

      if (contact.id !== contact.user_id){
        return (
          <tr key = {contact.id} >
            <td>
            <input
              type="checkbox"
              checked={isChecked}
              onClick={() => self.handleSelect(contact.id)}
            />
            </td>
            <td>{contact.ZFIRSTNAME} {contact.ZLASTNAME}</td>
            <td>{contact.ZFULLNUMBER}</td>
          </tr>
        )
      }
    })


  return (
    <div className="container">
    <h1 className="header">Your Address Book</h1>

    <form className='form-group' style={{marginTop: '20px'}}>
      <input
        onChange={this.handleChange}
        value={this.state.inputValue}
        className='form-control'
        placeholder="Enter Friend's Name"
      />
    </form>

    <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Add to Tracked</button>
      {/*<Loading type='spin' color='grey'></Loading>*/}
      <table className="table">
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
    )
  }
}

export default EditContactsForm
