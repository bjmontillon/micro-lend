import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid }  from '@material-ui/core';

const useStyles = makeStyles ({
    headingContainer: {
        height: '20vh',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '6px 4px 39px -14px rgb(0 0 0 / 40%)',
        fontFamily: `'Montserrat', sans-serif`,
    }
})

function Heading () {

    const classes = useStyles()


    return (
        <Grid container className={classes.headingContainer} xs={12}>
        <Grid item xs={4}><h1>Micro-Lending</h1></Grid>
        <Grid item xs={4}>
            
        </Grid>
            
        </Grid>
    )
};

export default Heading;