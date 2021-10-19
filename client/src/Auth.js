import React from 'react'
import { withRouter } from 'react-router-dom'

import Container from '@mui/material/Container';
import {Grid} from '@material-ui/core';
import Heading from './Components/Heading';
import Dashboard from './Components/Dashboard';
import AddClient from './Components/AddClient';
import Clientstable from './Components/Clientstable';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles ({
  mainAppContainer: {
    height: '100vh',
    width: '100vh'
  },
    bodyContainer: {
      display: 'flex',
      boxSizing: 'border-box',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: '0',
    },
    previewSection: {},
    addClientSection: {},
  });


function Auth() {

    
    const classes = useStyles()
    return ( 
      
        <Container maxWidth="xl" className={classes.mainAppContainer}>

        <Grid container className="bodyContainer" xs={12} spacing={2}>
          <Grid item xs={12}>
            <Heading />
          </Grid>
          <Grid item xs={12} md={9} className={classes.previewSection}>
            <Dashboard />
          </Grid>
          <Grid item xs={12} md={3} className={classes.addClientSection}>
            <AddClient />
          </Grid>
          <Grid item xs={12} className={classes.previewSection}>
            <Clientstable />
          </Grid>
        </Grid>
      </Container>
      
     );
}

export default withRouter (Auth);