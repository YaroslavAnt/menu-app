import React, { Component } from 'react';

import Home from './Home';
import { connect } from 'react-redux';
import Login from './Login';
import SignIn from './SignIn';

class App extends Component {
  render() {
    const {email} = this.props;
    console.log()
    return (
      email.email?<Home />:<SignIn />
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    email: state.email
  }
}

export default connect(mapStateToProps)(App);
