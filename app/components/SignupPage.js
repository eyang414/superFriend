import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signup, login} from '../reducers/auth'
import { browserHistory } from 'react-router'

class SignupPage extends Component {

	constructor (props) {
	  super(props);
	  this.state = this.initialState();
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	initialState() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
	}

	reset() {
		this.setState(this.initialState)

	}

	handleChange (evt) {
	  this.setState({
	    [evt.target.name]: evt.target.value
	  });
	}

  	render() {

  	  return (
		<div className="container">

		  <h2 className="header">SIGNUP</h2>

  		  <button className="btn btn-danger">
  			<a target="_self" href="http://www.google.com">
                Login with Google
              </a>
          </button> 
		  
		  <form id="loginform" onSubmit={ this.handleSubmit } >

		    <input 
		    	name="firstName" 
		    	type="text"
		    	className="form-control"
		    	placeholder="First Name" 
		    	value={ this.state.firstName } 
		    	onChange={ this.handleChange }
		    />

		    <input 
		    	name="lastName" 
		    	type="text"
		    	className="form-control"
		    	placeholder="Last Name" 
		    	value={ this.state.lastName } 
		    	onChange={ this.handleChange }
		    />

		    <input 
		    	name="email" 
		    	type="text"
		    	className="form-control"
		    	placeholder="Email" 
		    	value={ this.state.email } 
		    	onChange={ this.handleChange }
		    />

		    <input
		    	name="password" 
		    	type="password"
		    	className="form-control"
		    	placeholder="Password" 
		    	value={ this.state.password }
		    	onChange={ this.handleChange }
		    />
		  
		    <input
		      className="btn btn-primary"
		      type="submit"
		      value="Submit"
		    />
		  </form>
		</div>
		)
	}

	handleSubmit(event) {

	    event.preventDefault();
	    const user = {
	      firstName: event.target.firstName.value,
	      lastName: event.target.lastName.value,
	      email: event.target.email.value,
	      password: event.target.password.value
	    }
	    // user being passed here to signup...

	    // console.log(user)
	    this.props.signup(user)
	    // this.props.login(user && user.email, user.password)
	    browserHistory.push(`/login`)

	  }
}


const mapDispatchToProps = { signup, login };

export default connect(null, mapDispatchToProps)(SignupPage);

