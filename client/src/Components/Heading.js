import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid }  from '@material-ui/core';

const useStyles = makeStyles ({
    headingContainer: {
        height: '20vh',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: '20px',
        borderRadius: '5px',
         //boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        //boxShadow: '6px 4px 39px -5px rgba(0,0,0,0.59)',
    }
})

function Heading () {

    const classes = useStyles()


    return (
        <Grid container className={classes.headingContainer} xs={12}>
            <h1>Micro-Lending</h1   >
        </Grid>
    )
};

export default Heading;