import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
		    <div className="CV">
		      <header className="CV-header">
		        <h1 className="CV-title">Daniel Alfred Widjaja</h1>
		        <h4 className="CV-subtitle">Curriculum Vitae</h4>
		      </header>

		      <hr />

		      <div className="CV-body">
		      	<ul className="CV-ul">
				      <li className="CV-li"><Link to={'/'}>Home</Link></li>
              <li className="CV-li"><Link to={'/achievement'}>Achievement</Link></li>
              <li className="CV-li"><Link to={'/experience'}>Timeline</Link></li>
				      <li className="CV-li"><Link to={'/contact'}>Contact Me</Link></li>
		        </ul>
		        <hr/>
				    <Switch>
				      <Route exact path='/' component={Home} />
              <Route exact path='/achievement' component={Achievement} />
              <Route exact path='/experience' component={Experience} />
				      <Route exact path='/contact' component={Contact} />
				    </Switch>
				  </div>
				</div>
		  </Router>
		)
	}
}

export default CV;
