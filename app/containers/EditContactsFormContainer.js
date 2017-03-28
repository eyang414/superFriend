import EditContactsForm from '../components/EditContactsForm'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	console.log(state)
  return {
    contacts: state.contacts,
  }
}

const EditContactsFormContainer = connect(
  mapStateToProps
)(EditContactsForm)

export default EditContactsFormContainer


