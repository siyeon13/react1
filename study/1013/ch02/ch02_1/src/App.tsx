import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";
import Demo from "./components/Demo";
import EventListener from './pages/EventListener';
import Greeting from './components/Greeting';
import Home from './pages/Home';


const children = [
  <li>
    <a href='http://www.google.com'>
      <p>go to Google</p>
    </a>
  </li>,
  <li>
    <a href='http://www.facebook.com'>
      <p>go to Facebook</p>
    </a>
  </li>,
  <li>
    <a href='http://www.twitter.com'>
      <p>go to Twitter</p>
    </a>
  </li>,
];

function App() {
  return (
    <ul>
      <li>
        <Home />
      </li>
      <li>
        <Greeting name={'홍길동'} age={20} />
      </li>
      <li>
        <Greeting name="지민" />
      </li>
      <li>
        <EventListener />
      </li>
      <li>
        <Profile />
      </li>
      <li>
        <Demo />
      </li>
      {children}
    </ul>
  );
}

export default App;
