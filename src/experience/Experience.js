import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import sirclo_logo from './sirclo_logo.jpeg'

export class Experience extends Component {
  render() {
    return (
      <div>
      <Timeline>
        <TimelineEvent title="Sirclo"
          createdAt="January 2018 - February 2018">
          Working on MetaConnexi which is a front-end project that use ReactJS and 
          also implementing Minimum Cost Maximum Flow algorithm for scheduling task with certain constraint. 
        </TimelineEvent>
        <TimelineEvent
          title="Kiloin.id"
          createdAt="February 2018 - Now">
          A digitalize junk bank project that made with a team consist of 
          12 members including 4 software engineer using Django and ReactJS.
        </TimelineEvent>
        <TimelineEvent
          title="University of Indonesia"
          createdAt="May 2017 - Now">
          I was invited to Faculty of Computer Science for my achievement in the National Science Olympiad.
        </TimelineEvent>
        <TimelineEvent
          title="Brillian Class SMAK Penabur Gading Serpong"
          createdAt="July 2014 - May 2017">
          Brilliant Class is established by BPK Penabur for those who is excel in various subjects and train them in order to reach their potential.
        </TimelineEvent>
   	  </Timeline>
      </div>
    );
  }
}

export default Experience;
