import React, { Component, Fragment, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/collection/Partials/Header';
import Footer from './components/collection/Partials/Footer';
import Main from './components/collection/Main';
import Course from './components/collection/Course';
import Update from './components/collection/Update';

class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
			   <Header/>
			   <Router>
					<Switch>
						<Route exact path="/" component={Main}/>
						<Route exact path="/courses/:id" component={Course}/>
						<Route exact path="/courses/update/:id" component={Update}/>
					</Switch>
			   </Router>
			   <Footer/>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;