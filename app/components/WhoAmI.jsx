import React from 'react'

export const WhoAmI = ({ user, logout }) => (

  <div className="whoami">
  	<h1 className="header">WHO AM I?</h1>
    <span className="whoami-user-name">You are logged in as {user && user.firstName} {user.lastName} </span>
    <button className="logout btn btn-primary" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
