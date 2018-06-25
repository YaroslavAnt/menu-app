import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './NavBar.css'
import { bindActionCreators } from 'redux';
import { changeActiveBtn } from './index';
import { connect } from 'react-redux';

class NavBar extends React.Component{
  render() {
    //const {changeActiveBtn} = this.props;
    return(
      <div className="NavBar">
        <Link to='/'>
          <Button 
            variant="contained" 
            size="large" 
            color="primary" 
            onClick={() => {
              changeActiveBtn(1)
            }}>Home</Button>
        </Link>
        <Link to='/statistics'>
          <Button 
            variant="contained" 
            size="large" 
            color="primary" 
            onClick={() => {
              changeActiveBtn(2)
              console.log(this.props.store.active.btnActive)
            }}>Statistics</Button>
        </Link>
        <Link to='/administrator'>
          <Button 
            variant="contained" 
            size="large" 
            color="primary" 
            onClick={() => {
              changeActiveBtn(3)
              console.log(this.props.store.active.btnActive)
            }}>Administrator</Button>
        </Link>
        <Link to='/login'>
          <Button variant="contained" size="large" color="primary" >Login</Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { store: state } }

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveBtn: bindActionCreators(changeActiveBtn, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

//<Button variant="contained" size="large" color="primary" >Login</Button>