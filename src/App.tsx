import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { Instruments } from './components/Instruments/Instruments';
import { NewInstrument } from './components/NewInstrument/NewInstrument';
import { EditInstrument } from './components/Instruments/Instrument/EditInstrument/EditInstrument';
import { Chart } from './components/Instruments/Instrument/ChartInstrument/Chart';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { Home } from './components/Home/Home';
import { Instrument } from './components/Instruments/Instrument/Instrument';

function App() {
  return (
    <>
      <header className='header' />
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/profile" >Profile</Link>
          </li>
          <li>
            <Link to="/instruments" >Instruments</Link>
          </li>
          <li>
            <Link to="/instruments/new" >New</Link>
          </li>
          <li>
            <Link to="/instruments/1" >Instrument</Link>
          </li>
          <li>
            <Link to="/instruments/1/edit" >Edit</Link>
          </li>
          <li>
            <Link to="/instruments/1/chart" >Chart</Link>
          </li>
        </ul>
      </nav>
      <main className='content'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
