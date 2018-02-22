import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Timeline, TimelineEvent} from 'react-event-timeline'

import brilliantcompetition from '../assets/brilliantcompetition.png'
import kiloin from '../assets/kiloin.jpg'
import SIRCLO from '../assets/SIRCLO.png'
import TOKI from '../assets/TOKI.jpg'
import UI from '../assets/UI.png'

import '../css/style.css'
import '../scss/style.scss'

export class Experience extends Component {
  render() {
    return (
      <section id='timeline'>
        <h1>Timeline</h1>
        <div class="demo-card-wrapper">
          <div class="demo-card demo-card--step1">
            <div class="head">
              <div class="number-box">
                <span>01</span>
              </div>
              <h2 class="title"><span>January 2018 - February 2018</span> Sirclo</h2>
            </div>
            <div class="body">
              <h3>Software Engineer Internship</h3>
              <p>Working on MetaConnexi which is a front-end project that use ReactJS and 
                 also implementing Minimum Cost Maximum Flow algorithm for scheduling task with certain constraint. </p>
              <img src={SIRCLO} alt="Graphic"/>
            </div>
          </div>

          <div class="demo-card demo-card--step2">
            <div class="head">
              <div class="number-box">
                <span>02</span>
              </div>
              <h2 class="title"><span>February 2018 - Now</span> Kiloin.id</h2>
            </div>
            <div class="body">
              <p>
                A digitalize junk bank project that made with a team consist of 
                12 members including 4 software engineer using Django and ReactJS.</p>
              <img src={kiloin} width="100%" height="75%" alt="Graphic"/>
            </div>
          </div>

          <div class="demo-card demo-card--step3">
            <div class="head">
              <div class="number-box">
                <span>03</span>
              </div>
              <h2 class="title"><span>Aug 2017 - Now (Expected June 2021)</span>Universitas Indonesia</h2>
            </div>
            <div class="body">
              <p>
                I was invited to Faculty of Computer Science for my achievement in the National Science Olympiad.</p>
              <img src={UI} alt="Graphic"/>
            </div>
          </div>

          <div class="demo-card demo-card--step4">
            <div class="head">
              <div class="number-box">
                <span>04</span>
              </div>
              <h2 class="title"><span>2016 - Now</span> TOKI</h2>
            </div>
            <div class="body">
              <p>Tim Olimpiade Komputer Indonesia atau yang sering disingkat menjadi TOKI adalah sebuah tim yang terdiri dari siswa-siswi 
                 terbaik sekolah menengah atas di Indonesia yang dipersiapkan untuk mewakili Indonesia bertanding dalam "International Olympiad in Informatics" (IOI)</p>
              <img src={TOKI} height="50%" alt="Graphic"/>
            </div>
          </div>

          <div class="demo-card demo-card--step5">
            <div class="head">
              <div class="number-box">
                <span>05</span>
              </div>
              <h2 class="title"><span>July 2014 - May 2017</span>Brilliant Class</h2>
            </div>
            <div class="body">
              <p>Brilliant Class is established by BPK Penabur for those who is excel in various subjects and train them in order to reach their potential.</p>
              <img src={brilliantcompetition} alt="Graphic"/>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

// const Experience = AnimatedWrapper(ExperienceComponent);
export default Experience;
