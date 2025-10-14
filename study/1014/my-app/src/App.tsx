import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProfileCard from './components/ProfileCard';
import ButtonGroup from './components/ButtonGroup';
import CardGrid from './components/CardGrid';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';

function App() {
  return (
    <div className='flex flex-col  items-center min-h-screen'> 
    
      <ProfileCard />
      <ButtonGroup/>
      <CardGrid />
      <NavigationBar />
      <Login />
    </div>

  );
}

export default App;

/* justify-center : 가로방향 가운데 정렬 */