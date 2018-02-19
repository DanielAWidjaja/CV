import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './home.css';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="home-body">
          <p>
            A future computer scientist. Keen and hard-worker person with high curiosity. High resilience especially when faced with hard challenge. 
          </p>
        </div>
        <div class="home-bio"> 
          <h2>
            Biodata
          </h2>
          <ul class="home-ul">
            <li>Full Name: Daniel Alfred Widjaja</li>
            <li>Birth Date: 11 February 2000</li>
            <li>Birth Place: Jakarta</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
