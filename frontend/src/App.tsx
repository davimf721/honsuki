import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
          
        <MyButton/>

      </header>
      <div className = "About">
        <AboutPage/>
        </div>
    </div>
    
  );
}

function MyButton() {
  return(
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h4>About</h4>
      <p>A social network for those who love read!</p>
    </>
  );
}

export default App;
