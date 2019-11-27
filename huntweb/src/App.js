import React from 'react';
import logo from './logo.svg';
import api from './services/api';
import Routes from "./routes"
//import './App.css';

import "./styles.css";

import Header from './components/Header'
import Main from './pages/main';

const App = () => (
  <div className="App">
     <Header/>
     <Routes/>
  </div>

);

/*function App() {
  return (
    <div className="App">
     <h1>Hello Pessoal</h1>
    </div>
  );
}*/

export default App;
