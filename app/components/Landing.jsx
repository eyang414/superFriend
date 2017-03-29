
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const logo = '/superfriend-logo.PNG';


const LandingPage = () => {
  return (
  	<div className="landing">
    	<div className="container">
	      <br />
	      <Link to="/"><img id="landing-logo" src={logo} /></Link>
	      <br /> <br />
	      <button className="btn btn-primary"><Link to="/login">Login</Link></button>
	      <p id="about">SuperFriend is a contact management application that allows you to keep track your interactions with selected contacts and receive gentle, friendly reminders when it's time to reach out again.</p>
	    </div>
    </div>
  )
}

export default LandingPage;
