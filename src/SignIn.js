import React from 'react';
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
              fullWidth
            />
          </DialogContent>
          <DialogActions>            
            <Link to='/'>
              <Button color="primary" variant="contained" >
                Sign In
              </Button>
            </Link>
            <p>You didn't have profil? Please <Link to='/signup'>Sign Up</Link></p>
          </DialogActions>
        </Dialog>
    )
  }
}

export default SignIn