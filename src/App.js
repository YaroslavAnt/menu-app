import React, { Component } from 'react';
import './App.css';
import List from './components/GridList'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button>user</button>
          <button>admin</button>
          <button>login</button>
        </header>
        
        <List />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {return {numbers: state}}


export default connect(mapStateToProps)(App);
