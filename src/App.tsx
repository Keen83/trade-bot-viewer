import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Instruments } from './components/Instruments/Instruments';
import { NewInstrument } from './components/Instruments/NewInstrument/NewInstrument';
import { EditInstrument } from './components/Instruments/Instrument/EditInstrument/EditInstrument';
import { Chart } from './components/Instruments/Instrument/ChartInstrument/Chart';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { Home } from './components/Home/Home';
import { Instrument } from './components/Instruments/Instrument/Instrument';

function App() {
  return (
    <BrowserRouter>
      <div className="app">       
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='/' element={<Home />}>
              <Route path='profile' element={<Profile />} />
              <Route path='instruments' element={<Instruments />}>
                <Route path='new' element={<NewInstrument />} />
                <Route path=':id' element={<Instrument />} >
                  <Route path='edit' element={<EditInstrument />} />
                  <Route path='chart' element={<Chart />} />
                </Route>
              </Route>
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
