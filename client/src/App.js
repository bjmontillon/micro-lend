import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { Grid }  from '@material-ui/core';
import Heading from './Components/Heading';
import ResponsiveDrawer from './Components/Drawer';
import AddClient from './Components/AddClient';

function App () {
  return (
    <Container maxWidth="xl" className='App' spacing={2} >
      <Grid container>
        <Grid item xs={12}>
          <Heading />
        </Grid>
        <Grid container className='bodyContainer' xs={12} spacing={2}>
          <Grid item xs={10}>
            <ResponsiveDrawer />
          </Grid>
          <Grid item xs={2}>
            <AddClient />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
