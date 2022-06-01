import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { Instruments } from './components/Instruments/Instruments';
import { NewInstrument } from './components/NewInstrument/NewInstrument';
import { EditInstrument } from './components/Instruments/Instrument/EditInstrument/EditInstrument';
import { Chart } from './components/Instruments/Instrument/ChartInstrument/Chart';
import { Instrument } from './components/Instruments/Instrument/Instrument';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='login' element={<Login />} />
          <Route element={<App/>} >
            <Route path='/' element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='instruments' element={<Instruments />} />
            <Route path='instruments/new' element={<NewInstrument />} />
            <Route path='instruments/:id' element={<Instrument />} />
            <Route path='instruments/:id/edit' element={<EditInstrument />} />
            <Route path='instruments/:id/chart' element={<Chart />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
