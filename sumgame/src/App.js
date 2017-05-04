import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>SumGame</h3>
        </div>
        <p>By Marco Sebello</p>
        <Quiz/>
      </div>
    );
  }
}

export default App;
