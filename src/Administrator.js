import React from 'react';
import NavBar from './NavBar';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import connect from 'react-redux/lib/connect/connect';

class Administrator extends React.Component{
  render() {
    const {classes, items}=this.props
    console.log(this.props)
    return(
      <div >
        <NavBar/>
        <Paper className='{classes.root}'>
          <Table className='{classes.table}'>
            <TableHead>
              <TableRow>
                <TableCell>Дата</TableCell>
                <TableCell numeric>Номер обеда</TableCell>
                <TableCell numeric>Количество заказов</TableCell>
                <TableCell numeric>Описание обеда</TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((n, index) => {
                return (
                  <TableRow className='{classes.row}' key={index}>
                    <TableCell component="th" scope="row">n.name}</TableCell>
                    <TableCell numeric>n.calorie</TableCell>
                    <TableCell numeric>n.fat}</TableCell>
                    <TableCell numeric>n.carbs}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>      
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.main }
}

export default connect(mapStateToProps)(Administrator)