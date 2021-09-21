import React from 'react';
import ClientPreview from './ClientPreview';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles ({
  previewContainer: {
    borderRadius: '5px',
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    //border:'1px solid black',
    height: '50vh',
  },
})


function ResponsiveDrawer() {

  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.previewContainer}>
      <ClientPreview />
    </Grid >
    
    )
  }
export default ResponsiveDrawer;