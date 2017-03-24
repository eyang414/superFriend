  import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACT = 'GET_CONTACT';


/* ------------   ACTION CREATORS     ------------------ */
const getContacts = (contacts) => ({ type: GET_CONTACTS, receivedContacts: contacts});
const getContact = (product) => ({ type: GET_CONTACT, receivedContact: contact});


/* ------------       DISPATCHERS     ------------------ */
export const fetchContacts = () => dispatch => {
        axios.get('/api/contacts')
        .then(res => dispatch(getContacts(res.data)))
        .catch(err => console.error('Fetching contacts unsuccessful', err))
}

export const fetchContact = (id) => dispatch => {
    axios.get(`/api/contacts/${id}`)
        .then(res => dispatch(getProduct(res.data)))
        .catch(err => console.error('Fetching contact unsuccessful', err))
}
