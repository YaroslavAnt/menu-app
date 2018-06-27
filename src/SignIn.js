import React from 'react';
import NavBar from './NavBar';
import {Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom'

class SignIn extends React.Component{
  render() {
    return(
      <Dialog
          open={true}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign into 'Lunch Menu' app</DialogTitle>
          <DialogContent>            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </DialogContent>
          <DialogActions>            
            <Link to='/'>
              <Button onClick={console.log('+++++')} color="primary">
                Sign In
              </Button>
            </Link>
            <Link to='/statistics'>
              <Button onClick={console.log('+++++')} color="primary">
                Sign Up
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
    )
  }
}

export default SignIn