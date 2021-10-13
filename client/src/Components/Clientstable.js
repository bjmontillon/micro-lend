import React, { useState, useEffect} from 'react';
import './components.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Addpayment from './Addpayment'
import { makeStyles } from '@material-ui/core/styles';
import Updelete from './Updelete';
import Duedate from '../Components/Duedate'
import Axios from 'axios';
import Totalpayment from './Totalpayment';


const useStyles = makeStyles ({
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
  paymentDetails: {
    display: 'flex',
  }
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

  

const Clientstable = () => {

    
    const [newData, setNewData] = useState([{
      name: '',
      amount: 0,
      date: '',
      duration: 0,
      payment: [{
        paymentAmount: 0,
        paymentDate: ''
      }]
    }])

    useEffect(() => {
      Axios.get ('http://localhost:3001/read')
      .then (res => {
        setNewData(res.data);
      })
     
      
    }, [newData])

    //const clients = props.clientsData
    const classes = useStyles;
    //////////////////////////////////
        //////////////////////////
    
    
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
                <StyledTableCell align="center">Due-Date</StyledTableCell>
                <StyledTableCell align="center">Add Payment</StyledTableCell>
                <StyledTableCell align="center">Update | Delete</StyledTableCell>
                <StyledTableCell align="center">Total Payments</StyledTableCell>
                <StyledTableCell align="center">Payments</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newData.map(clients => (
                <StyledTableRow
                  key={clients._id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <StyledTableCell
                    align="center"
                    className={classes.tableBody}
                    component="th"
                    scope="row"
                  >
                    {clients._id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{clients.name}</StyledTableCell>
                  <StyledTableCell align="center">{clients.amount * 0.20 + clients.amount}</StyledTableCell>
                  <StyledTableCell align="center">{clients.date}</StyledTableCell>
                  <StyledTableCell align="center">{clients.duration}</StyledTableCell>
                  <StyledTableCell align="center"><Duedate clientDate={clients.date} clientDuration={clients.duration}/></StyledTableCell>
                  <StyledTableCell align="center"><Addpayment clientId={clients._id}/></StyledTableCell>
                  <StyledTableCell align="center"><Updelete clientId={clients._id}/></StyledTableCell>
                  <StyledTableCell align="center"><Totalpayment /></StyledTableCell>
                  <StyledTableCell align="center">{clients.payment.map(item => {
                    return(<p>{item.paymentAmount} | {item.paymentDate}</p>)
                  })}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    );
  
}

export default Clientstable;
