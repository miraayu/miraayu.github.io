import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';

import Desc from './trail';
import Porto from './porto';
import me from './me.svg';
import square from './square.svg';
import pic from './mira1.png';
import Chart from './chart-mira.PNG';

function Welcome(){
  return(
    <>
      <header className='App-header'>
        <a className='text-header'>Mira's Works.</a>
        <a className='text-header1'>Imagination comes to Life.</a>
      </header>
      <div className="App-logos">
        <img src={square} className="App-logo" alt="square" />
        <img src={me} className="App-logo-me" alt="me" />
      </div>
      <body className="App-body">
        <Desc />
      </body>
    </>
  );
}

function CV(){
  return(
    <div className='App-header-cv'>
      <div className='App-cover'>
        <img className='pic' src={pic} alt='mira-photo'/>
        <a className='text-cover'>Get to Know <span className='text-cover1'>ME</span>.</a>
      </div>
      <div className='App-cv'>
        <div className='cv'>
          <div className='cv1'>
            <a className='text-cv'>
              My name is <span className='name'>Miranti Ayudya Kusumawardani</span> and I'm a <span className='name'>Visual Designer</span> with more than <span className='name'>3 years experience</span> in several creative projects.
              <br/>I like to learn new things to improve my skills. That's why I started to learn some basic programming language to understand better how the developer will implement my design.
              <br/>I have several interests that we can talk about, like, design (of course), programming, animations, games, music, and writting.
              <br/><br/>I am very confident in my ability to master some software to make <span className='name'>the imagination comes true</span>.
            </a>
            <br/>
            <img src={Chart} className='chart'/>
          </div>
        </div>
        <a className='link2' href='https://drive.google.com/file/d/1oM6RtFy4yQh7T3zsPDuiwTU6r0SxkUPw/view?usp=share_link' target='_blank'>My UI / UX Portfolio (.pdf)</a>
      </div>
    </div>
  );
}

function Port(){
  return(
    <header className='App-header-cv'>
      <Porto />
    </header>
  );
}

function Contact(){
  return(
    <>
      <header className='App-header-contact'>
        <a className='text'>Let's make something great!</a>
      </header>
      <body className='App-header-contact1'>
        <div className='text1'>
          <a>Hi!</a>
        </div>
        <div className='text2'>
          <a>I'm seeking an opportunities to collaborate with you,<br></br> not just work for you!</a>
          <br></br>
          <a>Let's solve real business-problems in a way that optimizes<br></br>all of our respective experience and knowledge.</a>
          <br></br>
          <br/>
          <a>Reach me!</a><br></br><br></br>
          <a className='link1' href='https://id.linkedin.com/in/miraayukusuma' target='_blank'>LinkedIn</a>
          <a className='link1' href='mailto:mirantiayudyak@gmail.com'>mirantiayudyak@gmail.com</a>
        </div>
      </body>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path='/'>
              <Welcome/>
            </Route>
            <Route exact path='/cv'>
              <CV/>
            </Route>
            <Route exact path='/porto'>
              <Port/>
            </Route>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
        </Switch>

          <body className="App-link">
            <Link to='/' className='link'>
            Welcome
            </Link>
            <Link to='/cv' className='link'>
              About
            </Link>
            <Link to='/porto' className='link'>
              Portofolio
            </Link>
            <Link to='/contact' className='link'>
              Contact
            </Link>
          </body>
          <body className='blank' />

      </div>
    </Router>
  );
}
