import React from 'react'
import store from '../store'
import EditContactsForm from '../components/EditContactsForm'
import FilterInput from '../components/FilterInput';

class FilterableContactsContainer extends React.Component {

  constructor() {

    super()

    this.state = Object.assign({
      inputValue: ''
    }, store.getState().contacts.allContacts);

    // console.log('STORE ALL CONTACTS', store.getState().contacts.allContacts)

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().contacts.allContacts)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleChange(evt) {
    console.log(evt.target.value)

    this.setState({
      inputValue: evt.target.value
    })
  }

  render() {

    console.log('STATELY', this.state)

    const inputValue = this.state.inputValue
    const filteredContacts = this.state.list.filter(contacts => contacts.name.match(inputValue))

    //this.state.list.filter(contact => contact.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <EditContactsForm contacts={filteredContacts}/>
      </div>
    )
  }
}


export default FilterableContactsContainer
