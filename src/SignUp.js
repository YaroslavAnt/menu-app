import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';

import { inputData } from './index';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      emailValue: '',
      password1Value: '',
      password2Value: '',
    }
  }

  handleChangeEmail(e) {
    this.setState({emailValue: e.target.value})
    console.log(this.state.emailValue)
  }

  handleChangePassword1(e) {
    this.setState({password1Value: e.target.value})
  }

  handleChangePassword2(e) {
    this.setState({password2Value: e.target.value})
  }

  render() {
    const { inputData } = this.props
    return(
      <Dialog
          open={true}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register in 'Lunch Menu' app</DialogTitle>
          <DialogContent>            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              value={this.state.emailValue}
              onChange={this.handleChangeEmail.bind(this)}
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              onChange={this.handleChangePassword1.bind(this)}
            />
            <TextField
              id="password-repeat"
              label="Repeat Password"
              type="password"
              margin="normal"
              fullWidth
              onChange={this.handleChangePassword2.bind(this)}
            />
          </DialogContent>
          <DialogActions>            
            <Link to='/'>
              <Button variant="contained" onClick={ (state) => {
                (this.state.password1Value === this.state.password2Value) && inputData(this.state.emailValue, this.state.password1Value)
              } } color="primary">
                Sign Up
              </Button>
            </Link>
            <p>If you have profil, please <Link to='/'>Sign In</Link></p>
          </DialogActions>
        </Dialog>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputData: bindActionCreators(inputData, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)