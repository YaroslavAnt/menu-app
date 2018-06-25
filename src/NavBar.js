import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './NavBar.css'

class NavBar extends React.Component{
  render() {
    return(
      <div className="NavBar">
        <Link to='/'>
          <Button variant="contained" size="large" color="primary" >Home</Button>
        </Link>
        <Link to='/statistics'>
          <Button variant="contained" size="large" color="primary" >Statistics</Button>
        </Link>
        <Link to='/administrator'>
          <Button variant="contained" size="large" color="primary" >Administrator</Button>
        </Link>
        <Link to='/login'>
          <Button variant="contained" size="large" color="primary" >Login</Button>
        </Link>
      </div>
    )
  }
}

export default NavBar

//<Button variant="contained" size="large" color="primary" >Login</Button>