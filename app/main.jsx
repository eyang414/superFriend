import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from './containers/AppContainer'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import {render} from 'react-dom'
import {Provider } from 'react-redux';
import store from './store'

render(
	<Provider store={store}>
	    <Router history={browserHistory}>
	      <Route path="/" component={AppContainer}>
	        <Route path="/login" component={LoginPage} />
	        <Route path="/signup" component={SignupPage} />
	      </Route>
	    </Router>
  	</Provider>,
  	document.getElementById('main')
)

