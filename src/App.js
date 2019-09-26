import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'

class App extends Component {
  // static defaultProps = {
  //   colorPalettes: seedColors
  // }
 

  render(){

    return (
      <div className="App">
        <Routes />
      </div>
    );
  }

}

export default App;
