import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function app() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
    </div>
  );
}

export default app;
