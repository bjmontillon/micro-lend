import React, { useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {makeStyles} from '@material-ui/core/styles';
import Addpayment from './Addpayment';
import Updelete from './Updelete';
import Duedate from '../Components/Duedate';
import Axios from 'axios';
import PaymentsList from './Paymentslist';
import Interest from './Interest';
import Status from './Status';
import { useDispatch, useSelector } from 'react-redux'
import { getAllClients, fetchAsyncClients } from '../Slice/client-slice'
import { Link } from 'react-router-dom'
 



const useStyles = makeStyles ({
  previewContainer: {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  },
  tableBody: {},
  tableRowBody: {},
  nameRow: {
    color: 'red',
  },
  paymentDetails: {
    display: 'flex',
  },
  tableHeader: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  } 

});

const StyledTableCell = styled (TableCell) (({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    //backgroundColor: theme.palette.common.black,
    fontSize: '1.6vmin',
    color: theme.palette.common.black,
    fontFamily: 'var(--font-spartan)',
    fontWeight: 800,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.5vmin',
    fontFamily: 'var(--font-spartan)',
    fontWeight: 600,
  },
}));

const StyledTableRow = styled (TableRow) (({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Clientstable = () => {
  const newData = useSelector(getAllClients)
  console.log(newData)
  const dispatch = useDispatch()
  
    useEffect (() => {
      dispatch(fetchAsyncClients())
    }, [dispatch ]);


  const classes = useStyles();

  let clientListing = "";
  clientListing = newData.map((clients, index) => (
    <div key={index}><Link to={`/clientDetails/${clients._id}`}><p>{clients.name}</p></Link></div>
  ))
    

  return (
    <div className={classes.previewContainer}>
    <div className={classes.tableHeader}><h1 className={classes.tableTitle}>Clients Table</h1></div>   
      <div>
        <div>
          {clientListing}
        </div>
      </div>
  </div>
    
    
  );
};

export default Clientstable;
