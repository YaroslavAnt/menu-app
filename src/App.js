import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import SignIn from './SignIn';

class App extends Component {
  render() {
    const {email} = this.props;
    console.log(email)
    console.log(this.props)
    return (
      email?<Home />:<SignIn />
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    email: state.data.email
  }
}

export default connect(mapStateToProps)(App);
