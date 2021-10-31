import * as React from 'react';
import {Grid} from '@mui/material';
import { withRouter } from 'react-router';
import Dashboard from './dashboard';
import Clientstable from './client_listing';
import ClientDetails from './clientDetails';
import {makeStyles} from '@mui/styles';
const useStyles = makeStyles ({
  mainAppContainer: {
    height: '100vh',
    width: '100vw',
  },
    bodyContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: '0',
    },
    previewSection: {},
  });

const Home = () => {
  const classes = useStyles()

  return (
      <div  className={classes.mainAppContainer}>
        <Grid container className={classes.bodyContainer}>
          <Grid item xs={12} className={classes.previewSection}>
            <Dashboard />
          </Grid>
          <Grid item xs={12} className={classes.previewSection}>
            <Clientstable />
          </Grid>
        </Grid>
        <div><ClientDetails /></div>
  </div>
  
  );
}

export default withRouter(Home);

