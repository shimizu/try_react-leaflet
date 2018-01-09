import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import SimpleMaps from './component/SimpleMaps'



class App extends Component {
  state = {
    simpleMaps:{
      center:[51.505, -0.09],
      zoom:13
    }
  }
  
  handleZoomBtnClick(){
    let  state = this.state
    state.simpleMaps.zoom = 18
    this.setState(state)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-leaflet</h1>
        </header>
        <div className="MapsArea">
        <SimpleMaps
          center={this.state.simpleMaps.center}
          zoom={this.state.simpleMaps.zoom}
        />
        </div>
        <div className="UIArea">
          <button onClick={this.handleZoomBtnClick.bind(this)}>move</button>
        </div>
      </div>
    );
  }
}

export default App;
