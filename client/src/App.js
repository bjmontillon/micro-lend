import React from 'react';
import Container from '@mui/material/Container';
import './App.css';
import ResponsiveDrawer from './Components/Drawer';

function App () {
  return (
    <Container maxWidth="xl" className='App'>
      <ResponsiveDrawer />
    </Container>
  );
}

export default App;
