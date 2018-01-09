import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import SimpleMaps from './component/SimpleMaps'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="simpleMaps">
        <SimpleMaps/>
        </div>
      </div>
    );
  }
}

export default App;
