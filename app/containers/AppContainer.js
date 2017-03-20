import React from 'react';
import { Link } from 'react-router';

const AppContainer = props => (

  <div>
    <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-items">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/email">SuperFriend</Link>
        </div>
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container content">
      { props.children }
    </div>
    <hr />
    <div id="footer" className="container text-muted">
     FOOTER
    </div>
  </div>
);

export default AppContainer;