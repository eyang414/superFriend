import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
  	<h1 className="header">Hello, {user && user.username}</h1>
    <br></br>
    <br></br>
    <button className="logout btn btn-primary" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
