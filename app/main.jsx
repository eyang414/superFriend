'use strict'
import React from 'react'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import {render} from 'react-dom'
import {connect, Provider } from 'react-redux'

import store from './store'
import {fetchContacts} from './actions/contacts'
import {fetchContact} from './actions/contacts'
import {fetchMessages} from './actions/messages'

import AppContainer from './containers/AppContainer'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import LandingPage from './components/Landing'
import EditContactsFormContainer from './containers/EditContactsFormContainer'
import ContactProfileContainer from './containers/ContactProfileContainer'
import ContactTableContainer from './containers/ContactTableContainer'
import Layout from '../util/layout'

const onAppContainerEnter = function () {
	console.log ("OPENING APP")
	console.log ('this is the edit form container', EditContactsFormContainer)
	setTimeout(Layout.resizeFixedWrappers, 10)
	Layout.addResizeFixedWrappersListener();
}
const onEditContactsFormContainerEnter = function () {
	console.log("FETCHING CONTACTS")
	store.dispatch(fetchContacts())
}

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
	      <Route path="/" component={LandingPage} />
	      <Route path="/home" component={AppContainer} onEnter={onAppContainerEnter}>
					<IndexRedirect to = "/home" />
	        <Route path="/login" component={LoginPage} />
	        <Route path="/editcontacts" component={EditContactsFormContainer} onEnter={onEditContactsFormContainerEnter}/>
	        <Route path="/signup" component={SignupPage} />
			<Route path="/contacttable" component={ContactTableContainer} onEnter={onContactTableContainerEnter} />
			<Route path="/contacttable/:id" component={ContactProfileContainer} onEnter={onContactProfileContainerEnter}/>
	      </Route>
	    </Router>
  	</Provider>,
  	document.getElementById('main')
)
