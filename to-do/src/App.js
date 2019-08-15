import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Making a to-do app.
        </p>
        <div>
          <input placeholder="Add..."></input>
        </div>
      </header>
    </div>
  );
}

export default App;
