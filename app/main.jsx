'use strict'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import {render} from 'react-dom'
import {connect, Provider } from 'react-redux'

import store from './store'
import {fetchContacts} from './actions/contacts'
import {fetchContact} from './actions/contacts'
import {fetchMessages} from './actions/messages'


import AppContainer from './containers/AppContainer'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import ContactProfile from './components/ContactProfile'
import ContactTableContainer from './containers/ContactTableContainer'

const onContactTableContainerEnter = function () {
	console.log("FETCHING CONTACTS")
	store.dispatch(fetchContacts())
	store.dispatch(fetchMessages())
}

const onContactProfileEnter = function () {
	console.log("FETCHING THIS CONTACT")
	store.dispatch(fetchContact())
}
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
			<Route path="/contacttable" component={ContactTableContainer} onEnter={onContactTableContainerEnter} />
			<Route path="/contacttable/:id" component={ContactProfile} onEnter={onContactProfileEnter}/>
	      </Route>
	    </Router>
  	</Provider>,
  	document.getElementById('main')
)

