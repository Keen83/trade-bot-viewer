import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useStore } from 'react-redux';

function App() {
  let navigate = useNavigate()
  let store = useStore()
  let state: any = store.getState()
  useEffect(()=>{
      if(!state.auth.isAuthenticated) {
          navigate("/login")
      }
  },[state.auth.isAuthenticated,navigate])
  return (
    < >
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
