import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';

import SetMenuList from './SetMenuList';
import './GridList.css'

class SetList extends React.Component {
 
  render(){
    return (
      <div className="root">
        <GridList cellHeight={300} className="gridList" cols={2}>
          {this.props.store.main.map((tile, index) => (
            <GridListTile key={index} cols={1}>
              <SetMenuList number={index} />
            </GridListTile>
          ))}
        </GridList>
      </div>        
    );
  }
  
}

const mapStateToProps = (state) => {return {store: state}}

export default connect(mapStateToProps)(SetList);
