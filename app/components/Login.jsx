import React from 'react'
import { connect } from 'react-redux';
import { login } from '../reducers/auth'
import { Link } from 'react-router';

export const Login = (props) => (

  <div>
  <h1 className="header">LOGIN</h1>
  <form id="loginform" onSubmit={evt => {
    evt.preventDefault()
    props.login(evt.target.username.value, evt.target.password.value)
  } }>

    <input id="username" className="form-control mr-sm-1" placeholder="Username" name="username" value="ak123@ak123.com"/>
    <input id="password" className="form-control mr-sm-1" placeholder="Password" name="password" type="password" value="1234"/>
    <input
      id="loginbtn"
      className="btn btn-primary"
      type="submit"
      value="Login"
    />
  </form>

  <button className="btn btn-danger">
      <a target="_self" href="/api/auth/login/google">
        Login with Google
      </a>
  </button>

  <p>Not a user? <Link to='/signup'>Create a new account</Link> </p>


  </div>
)


export default connect(state => ({}), {login})(Login)
