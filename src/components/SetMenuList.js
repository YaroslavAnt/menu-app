import React from 'react';
import { Grid, 
        Typography, 
        List, 
        ListItem, 
        Avatar, 
        ListItemAvatar, 
        ListItemText,
        FormControl,
        InputLabel,
        Select,
        MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './SetMenuList.css';
//import './MenuList.css';
import { bindActionCreators } from 'redux';


class SetMenuList extends React.Component {
  state = {
    name: [],
  };

  render(){
    const {changeActiveMenu, number, classes }=this.props;
    console.log(classes)
    const arr = []
    for(let i = 0; i<2; i++){arr.push(0)}
    return (
      <Grid item  
            className={classNames('grid', 'active')}  
            >
        <Typography variant="title" >
          Menu {this.props.number+1}
        </Typography>
        <div >
          <List >
            {arr.map((item, index) => {
              return(
                <ListItem key={index}>                  
                  <ListItemText  primary={index} />
                  <FormControl className='formControl'>
                  <InputLabel htmlFor="age-simple">Choose dish</InputLabel>
                  <Select value={this.state.name} >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                </ListItem>
              )
            })}
          </List>
        </div>
      </Grid>
    );
  }
  
}

const mapStateToProps = (state) => {return {store: state}}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setDish: bindActionCreators(changeActiveMenu, dispatch)
//   }
// }, mapDispatchToProps

export default connect(mapStateToProps)(SetMenuList)