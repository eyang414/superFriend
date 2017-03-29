
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const logo = '/superfriend-logo.PNG';


const LandingPage = () => {
  return (
  	<div className="landing"> 	
	      <div className="frontpage"><Link to="/login"><center><img id="landing-logo" src={logo} /></center></Link></div>     
	</div>
  )
}

export default LandingPage;
