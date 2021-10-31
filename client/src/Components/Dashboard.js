//import * as React from 'react';
//import Axios from 'axios';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Totalpayment from './total-payment'
import { Card, CardContent, Typography, Paper } from '@mui/material';
import {  } from '@mui/material';
import { getAllClients } from '../Slice/client-slice'
import { useSelector } from 'react-redux'



const useStyles = makeStyles ({
    dashboardContainer: {
        borderRadius: '5px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        fontFamily: 'var(--font-spartan)',
        maxHeight: '40vh',
        display: 'flex',
        justifyContent: 'flex-end'
      },
    clientName: {
        backgroundColor: 'red',
        listStyle: 'none',
    },
    activeClients: {
        padding: '10px'
    }
})

export default function Dashboard() {

    const newData = useSelector(getAllClients)
    console.log(newData)
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

        <Grid container className={classes.dashboardContainer} spacing={2}>
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
