import ContactTable from '../components/ContactTable'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	console.log(state)
  return {
  	errythang: state,
    contacts: state.contacts,
  }
}

const ContactTableContainer = connect(
  mapStateToProps
)(ContactTable)

export default ContactTableContainer


