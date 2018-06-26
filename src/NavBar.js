import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './NavBar.css'
import { bindActionCreators } from 'redux';
import { changeActiveBtn } from './index';
import { connect } from 'react-redux';

class NavBar extends React.Component{
  render() {
    const {changeBtn} = this.props;
    const btnActive = this.props.store.active.btnActive
    return(
      <div className="NavBar">
        <Link to='/'>
          <Button 
            variant="contained" 
            size="large" 
            color={btnActive===1?"secondary":"primary"} 
            onClick={() => {
              changeBtn(1)              
            }}>Home</Button>
        </Link>
        <Link to='/statistics'>
          <Button 
            variant="contained" 
            size="large" 
            color={btnActive===2?"secondary":"primary"} 
            onClick={() => {
              changeBtn(2)
            }}>Statistics</Button>
        </Link>
        <Link to='/administrator'>
          <Button 
            variant="contained" 
            size="large" 
            color={btnActive===3?"secondary":"primary"} 
            onClick={() => {
              changeBtn(3)
            }}>Administrator</Button>
        </Link>
        <Link to='/login'>
          <Button 
            variant="contained" 
            size="large" 
            color="primary" >Login</Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { store: state } }

const mapDispatchToProps = (dispatch) => {
  return {
    changeBtn: bindActionCreators(changeActiveBtn, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

//<Button variant="contained" size="large" color="primary" >Login</Button>