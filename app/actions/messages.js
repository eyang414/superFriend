import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const GET_MESSAGES = 'GET_MESSAGES';


/* ------------   ACTION CREATORS     ------------------ */
const getMessages = (messages) => ({ type: GET_MESSAGES, receivedMessages: messages});


/* ------------       DISPATCHERS     ------------------ */
export const fetchMessages = () => dispatch => {
        axios.get('/api/messages')
        .then(res => dispatch(getMessages(res.data)))
        .catch(err => console.error('Fetching messages unsuccessful', err))
}
