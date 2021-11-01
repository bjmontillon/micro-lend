//import * as React from 'react';
//import Axios from 'axios';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Totalpayment from './total_payment'
import { Typography, Paper } from '@mui/material';
import {  } from '@mui/material';
import { getAllClients } from '../Slice/client-slice'
import { useSelector } from 'react-redux'



const useStyles = makeStyles ({
    dashboardContainer: {
        fontFamily: 'var(--font-spartan)',
        maxHeight: '40vh',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: `var(--dashboard-background-color)`
      },
    activeClients: {
        padding: '10px'
    }
})

export default function Dashboard() {

    const newData = useSelector(getAllClients)
    
    const classes = useStyles();

    function objectLength(obj) {
        var result = 0;
        for(var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            result++;
          }
        }
        return result;
      }

    return (

        <Grid container className={classes.dashboardContainer}>
          <Grid item xs={2}><div className={classes.card2}><Totalpayment /></div></Grid>
          <Grid item xs={2}>
                  <Paper elevation={2} className={classes.activeClients}>
                          <Typography variant='h6'>Active Clients</Typography>
                          <br />
                          <Typography variant="body2">
                                  {objectLength(newData)}
                          </Typography>
                  </Paper>
            
        </Grid>
            
      
        </Grid>
       ) 
   
    
};
