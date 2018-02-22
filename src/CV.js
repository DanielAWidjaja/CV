import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";

import PageShell from './PageShell';
import Home from './home/Home';
import Achievement from './achievement/Achievement';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import './index.css';
import './CV.css';

export class CV extends Component{
	render() {
		return (
			<Router>
		    <div className="CV" id="cloud-container">
		      <header className="CV-header">
		        <h1 className="CV-title">Daniel Alfred Widjaja</h1>
		        <h4 className="CV-subtitle">Curriculum Vitae</h4>
		      	<ul className="CV-ul">
				      <li className="CV-li"><Link to={'/'}>Home</Link></li>
              <li className="CV-li"><Link to={'/achievement'}>Achievement</Link></li>
              <li className="CV-li"><Link to={'/experience'}>Timeline</Link></li>
		        </ul>
		      </header>

		      <div className="CV-body">
				    <Switch>
				      <Route exact path='/' component={PageShell(Home)} />
              <Route exact path='/achievement' component={PageShell(Achievement)} />
              <Route exact path='/experience' component={PageShell(Experience)} />
				    </Switch>
				  </div>
				</div>
		  </Router>
		)
	}
}

export default CV;
