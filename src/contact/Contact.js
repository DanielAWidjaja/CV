import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './contact.css';
import Instagram_icon from './Instagram_icon.png';
import facebook_icon from '../assets/facebook_icon.png';
import linkedin_icon from '../assets/linkedin_icon.png';

export class Contact extends Component {
  render() {
    return (
      <div>
      	<ul>
      		<li><a href="https://www.facebook.com/daniel.widjaja.5"><img class="img" src={facebook_icon} width="50px" height="50px"/></a>Facebook</li>
      		<li><a href="https://www.linkedin.com/in/daniel-alfred-widjaja-73783314b/"><img class="img" src={linkedin_icon} width="50px" height="50px"/></a>LinkedIn</li>
      	</ul>
      </div>
    );
  }
}

export default Contact;
