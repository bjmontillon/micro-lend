import * as React from 'react';
import { Grid } from '@mui/material';
import { withRouter } from 'react-router';
import Dashboard from './dashboard';
import Clientstable from './client_listing';

import {makeStyles} from '@mui/styles';

import AddClient from './add_client'


const useStyles = makeStyles ({
  mainAppContainer: {
    height: '100vh',
    width: '100vw',
  },
  addClientSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '15vh',
    padding: '0 50px'
  },
    bodyContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    previewSection: {},
  });

const Home = () => {
  const classes = useStyles()

  return (
      <div  className={classes.mainAppContainer}>

          <Grid item xs={12} className={classes.addClientSection}>
            <AddClient />
          </Grid>
          <Grid item xs={12} className={classes.previewSection}>
            <Dashboard />
          </Grid>
          <Grid item xs={12} className={classes.previewSection}>
            <Clientstable />
          </Grid>

  </div>
  
  );
}

export default withRouter(Home);

