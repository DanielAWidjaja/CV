import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import facebook_icon from '.././assets/facebook_icon.png';
import linkedin_icon from '.././assets/linkedin_icon.png';
import me from '.././assets/me.jpg';

import './home.css';


export class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <div class="home-body">
          <p>
            A future computer scientist. Keen and hard-worker person with high curiosity. High resilience especially when faced with hard challenge. 
          </p>
        </div>
        <div class="home-bio"> 
          <img src={me} id="my-photo" width="225px" height="225px" align="right" hspace="50px"/>
          <h2>
            Biodata
          </h2>
          <ul class="home-ul">
            <li>Full Name: Daniel Alfred Widjaja</li>
            <li>Birth Date: 11 February 2000</li>
            <li>Birth Place: Jakarta</li>
          </ul>
        </div>
        <div class="home-bio">
          <a href="https://www.facebook.com/daniel.widjaja.5"><img class="img" src={facebook_icon} 
          width="50px" height="50px" hspace="20px"/></a>
          <a href="https://www.linkedin.com/in/daniel-alfred-widjaja-73783314b/" ><img class="img" src={linkedin_icon} 
          width="50px" height="50px" hspace="20px"/></a>
        </div>
      </div>
    );
  }
}

export default Home;
