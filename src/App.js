import React from 'react';
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
        <Footer/>
      </header>
    </div>
  );
}

export default App;
