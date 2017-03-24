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
import ContactProfileContainer from './containers/ContactProfileContainer'
import ContactTableContainer from './containers/ContactTableContainer'

const onContactTableContainerEnter = function () {
	console.log("FETCHING CONTACTS")
	store.dispatch(fetchContacts())
	store.dispatch(fetchMessages())
}

const onContactProfileContainerEnter = function (nextRouterState) {
	console.log("FETCHING THIS CONTACT")
	store.dispatch(fetchContact(nextRouterState.params.id))
}

render(
	<Provider store={store}>
	    <Router history={browserHistory}>
	      <Route path="/" component={AppContainer}>
	        <Route path="/login" component={LoginPage} />
	        <Route path="/signup" component={SignupPage} />
			<Route path="/contacttable" component={ContactTableContainer} onEnter={onContactTableContainerEnter} />
			<Route path="/contacttable/:id" component={ContactProfileContainer} onEnter={onContactProfileContainerEnter}/>
	      </Route>
	    </Router>
  	</Provider>,
  	document.getElementById('main')
)

