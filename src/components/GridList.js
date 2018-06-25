import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';
import MenuList from './MenuList';
import './GridList.css'

class List extends React.Component {
 
  render(){
    console.log(this)
    return (

      <div className="root">
        <GridList cellHeight={300} className="gridList" cols={2}>
          {this.props.store.main.map((tile, index) => (
            <GridListTile key={index} cols={1}>
              <MenuList number={index} />
            </GridListTile>
          ))}
        </GridList>
      </div>        
    );
  }
  
}

const mapStateToProps = (state) => {return {store: state}}

export default connect(mapStateToProps)(List);
