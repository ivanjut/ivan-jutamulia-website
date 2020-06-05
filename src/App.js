import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <div className='main'>
          <Main/>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Footer/>
      </header>
    </div>
  );
}

export default App;
