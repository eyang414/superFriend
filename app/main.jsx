'use strict'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import {render} from 'react-dom'
import {connect, Provider } from 'react-redux'

import store from './store'
import {fetchContacts} from './actions/contacts'

import AppContainer from './containers/AppContainer'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import ContactTableContainer from './containers/ContactTableContainer'

const onAppEnter = function(){
	fetchContacts()(store.dispatch)
};

//or do we do:
//const onUserAccountEnter = function(nextRouterState){
// 	fetchContacts(nextRouterState.params.userId)(store.dispatch)
// }

render(
	<Provider store={store}>
	    <Router history={browserHistory}>
	      <Route path="/" component={AppContainer}>
	        <Route path="/login" component={LoginPage} />
	        <Route path="/signup" component={SignupPage} />
	        <Route path="/contacttable" component={ContactTableContainer} />
	      </Route>
	    </Router>
  	</Provider>,
  	document.getElementById('main')
)

