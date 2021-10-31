import React, { useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux'
import { getAllClients, fetchAsyncClients } from '../Slice/client-slice'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';
 



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



const ClientListing = () => {
  const newData = useSelector(getAllClients)
  const dispatch = useDispatch()
  
    useEffect (() => {
      dispatch(fetchAsyncClients())
    }, [dispatch]);


  const classes = useStyles();

  let clientListing = "";

  clientListing = newData.map((clients, index) => (
    <div key={index}><Link to={`/clientDetails/${clients._id}`}><p>{clients.name}</p></Link></div>
  ))
    

  return (
    <>
    <div className={classes.previewContainer}>
      <div className={classes.tableHeader}>
        <Typography variant='h5'>Clients
        </Typography>
      </div>   
      <div>{clientListing}</div>
    
    </div>
    </>
  );
};

export default ClientListing;
