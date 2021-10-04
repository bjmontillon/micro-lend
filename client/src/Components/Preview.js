import './components.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import Button from '../../src/Controls/Button';

import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

import Update from './Update';
import Delete from './Delete';

const styles = theme => ({
  previewContainer: {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    
  },
  addButton: {
    right: '10px'
  },
  tableBody: {},
  tableRowBody: {
    
  },
  nameRow: {
    color: 'red',
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: `'Montserrat', sans-serif`,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontFamily: `'Montserrat', sans-serif`,
    color: theme.palette.common.black,
    fontWeight: 400,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


class Preview extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      clients: [],
      clientId: null,
      clientName: null,
      amount: null,
      date: null,
      duration: null,
    };
  }

  componentDidMount () {
    Axios.get ('http://localhost:3001/read')
      .then (res => {
        //console.log(res.data[0].id)
        this.setState ({
          clients: res.data,
          clientId: res.data.id,
          clientName: res.data[0].name,
          amount: res.data[0].amount,
          date: res.data[0].date,
          duration: res.data[0].duration,
        });
      })
      .catch (function (error) {
        console.log (error);
      });
  }

  render () {
    const classes = this.props.classes;
    console.log(this.state.clients)
    return (

    <div className={classes.previewContainer}>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Amount</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Duration(days)</StyledTableCell>
                <StyledTableCell align="center">Update</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.clients.map (clients => (
                <StyledTableRow
                  key={clients._id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <StyledTableCell
                    className={classes.tableBody}
                    component="th"
                    scope="row"
                  >
                    {clients._id.substr(0, 7)}
                  </StyledTableCell>
                  <StyledTableCell align="center">{clients.name}</StyledTableCell>
                  <StyledTableCell align="center">{clients.amount * 0.20 + clients.amount}</StyledTableCell>
                  <StyledTableCell align="center">{clients.date.substr(0, 10)}</StyledTableCell>
                  <StyledTableCell align="center">{clients.duration}</StyledTableCell>
                  <StyledTableCell align="center"><Update /></StyledTableCell>
                  <StyledTableCell align="center"><Delete /></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    );
  }
}

export default withStyles (styles) (Preview);
