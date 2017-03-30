import React from 'react';
import { Link } from 'react-router';


const logo = '/superfriend-logo.PNG';

const AppContainer = props => (

<div>
  <div className="fixed-wrapper">
    <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
      
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-items">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/"><img id="logo" src= {logo} /></Link>
        </div>
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contacttable">Contacts</Link></li>
          </ul>
        </div>
      </div>
    </div>
  
  <div className="container">
    <div className="content">
      { props.children }
       <hr />
      <div id="footer" className="container text-muted">SuperFriend is a contact management application that allows you to track your interactions with selected contacts and receive gentle, friendly reminders when it's time to reach out again.</div>
    </div>
  </div>
</div>
);

export default AppContainer;
