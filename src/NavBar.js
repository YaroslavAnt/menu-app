import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './NavBar.css'
import { changeActiveBtn, inputData } from './index';

class NavBar extends React.Component{
  render() {
    const {changeBtn, deleteEmail} = this.props;
    const btnActive = this.props.store.active.btnActive
    return(
      <div className="NavBar">
        <Link to='/'>
          <Button            
            className="margin"
            variant="contained" 
            size="large" 
            color={btnActive===1?"secondary":"primary"} 
            onClick={() => { changeBtn(1) }}>Home</Button>
        </Link>
        <Link to='/statistics'>
          <Button            
            className="margin"
            variant="contained" 
            size="large" 
            color={btnActive===2?"secondary":"primary"} 
            onClick={() => { changeBtn(2) }}>Statistics</Button>
        </Link>
        <Link to='/administrator'>
          <Button            
            className="margin"
            variant="contained" 
            size="large" 
            color={btnActive===3?"secondary":"primary"} 
            onClick={() => { changeBtn(3) }}>Administrator</Button>
        </Link>
        <Link to='/signup' >
          <Button            
            className="float"
            variant="contained" 
            size="large" 
            onClick={() => { deleteEmail('', '') }} >Signout</Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { store: state } }

const mapDispatchToProps = (dispatch) => {
  return {
    changeBtn: bindActionCreators(changeActiveBtn, dispatch),
    deleteEmail: bindActionCreators(inputData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

