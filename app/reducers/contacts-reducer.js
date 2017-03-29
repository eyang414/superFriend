import { GET_CONTACTS, GET_CONTACT, SELECT_CONTACTS} from '../actions/contacts'

let initialState = {
  allContacts: [],
  currentContact: {},
  selectedContacts: []
}
const contactsReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_CONTACTS:
      newState.allContacts =  action.receivedContacts
      break

    case GET_CONTACT:
      newState.currentContact = action.receivedContact
      break

    case SELECT_CONTACTS:
    console.log("We made it here")
      newState.selectedContacts = action.selectedContacts
      break

    default:
      return state
  }
  return newState;
}

export default contactsReducer;

