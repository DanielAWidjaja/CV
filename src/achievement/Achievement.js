import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Achievement.css'

export class Achievement extends Component {
  render() {
    return (
      <div>
        <ul class="achievement-ul">
          <li><a>ACM-ICPC Jakarta 2017 - Finalist (Top 12 National Team) <br/>
            An ICPC Programming Style held by ACM in Jakarta competed with 80 teams from Asia Pacific Region
            Team Profile: Kizza Manau - Degoldie Sonny, Daniel Alfred, Steven Kusuman</a><div id="coba"><br/><br/><br/></div>
          </li>
          <li>Senior Competitive Programming Contest Compfest 9 - Honorable Mention <br/>
            Placed 5th in Competitive Programming Competition held by Faculty of Computer Science Universitas Indonesia
            Team Profile: Bersaw - Muhammad Indra Ramadhan, Daniel Alfred, Reynaldo Wijaya Hendry
          </li>
          <li>National Science Olympiad In Informatics 2016 - Gold Medal <br/>
              Placed 2nd in Competitive Programming Competition held by Ministry of Education and Culture of Indonesia
          </li>
          <li>National Science Olympiad In Informatics 2015 - Silver Medal<br/>
              Placed 9th in Competitive Programming Competition held by Ministry of Education and Culture of Indonesia
          </li>
        </ul>
      </div>
    );
  }
}

// const Achievement = AnimatedWrapper(AchievementComponent);

export default Achievement;
