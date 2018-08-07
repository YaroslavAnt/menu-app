import React, { Component } from 'react';

import NavBar from './NavBar';
import SetList from './components/SetGridList'

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />                
        <SetList />        
      </div>
    );
  }
}

export default Home;
