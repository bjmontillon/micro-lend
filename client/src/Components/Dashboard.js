//import * as React from 'react';
//import Axios from 'axios';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    dashboardContainer: {
        padding: '20px',
        height: '100%',
        borderRadius: '5px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        fontFamily: 'var(--font-spartan)',
        
      },
    clientName: {
        backgroundColor: 'red',
        listStyle: 'none',
    },
})

export default function Dashboard() {

    const classes = useStyles();

    return (

        <Grid container className={classes.dashboardContainer}>
            <Grid item xs={3}><div className={classes.card1}><h3>Total Balance</h3></div></Grid>
            <Grid item xs={3}>
            <div className={classes.card2}><h3>hello</h3></div></Grid>
            <Grid item xs={3}>
            <div className={classes.card3}><h3>hello</h3></div></Grid>
            <Grid item xs={3}>
            <div className={classes.card4}><h3>hello</h3></div></Grid>
      
        </Grid>
       ) 
   
    
};
