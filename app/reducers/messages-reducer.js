import { GET_MESSAGES} from '../actions/messages'

let initialState = {
  allMessages: [],
}

const messagesReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_MESSAGES:
      newState.messages =  action.receivedMessages
      break

    default:
      return state
  }
  return newState;
}

export default messagesReducer;

