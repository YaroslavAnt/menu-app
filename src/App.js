import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {return {numbers: state}}

export default connect(mapStateToProps)(App);
