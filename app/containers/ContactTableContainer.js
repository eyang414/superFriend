import ContactTable from '../components/ContactTable'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    contacts: state.allContacts,
  }
}

const ContactTableContainer = connect(
  mapStateToProps
)(ContactTable)

export default ContactTableContainer


