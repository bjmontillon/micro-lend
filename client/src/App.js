import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { Grid }  from '@material-ui/core';
import Heading from './Components/Heading';
import ClientPreview from './Components/ClientPreview';
import AddClient from './Components/AddClient';
import Preview from './Components/Preview';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles ({
  
  bodyContainer: {
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  previewSection: {
    
  },
  addClientSection: {
  },

});

function App () {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className='App'>
      <Grid item xs={12}>
        <Heading />
      </Grid>

      <Grid container className='bodyContainer' xs={12} spacing={2}>
        <Grid item xs={12} md={10} className={classes.previewSection}>
          <ClientPreview />
        </Grid>
        <Grid item xs={12} md={2} className={classes.addClientSection}>
          <AddClient />
        </Grid>
        <Grid item xs={12} className={classes.previewSection}>
        <Preview />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
