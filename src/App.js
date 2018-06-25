import React, { Component } from 'react';

import NavBar from './NavBar';
import List from './components/GridList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />                
        <List />        
      </div>
    );
  }
}

export default App;
