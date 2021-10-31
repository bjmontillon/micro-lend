import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid }  from '@mui/material';

const useStyles = makeStyles ({
    headingContainer: {
        height: '20vh',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '6px 4px 39px -14px rgb(0 0 0 / 40%)',
        fontFamily: `var(--font-spartan)`,
        alignContent: 'center',
        justifyContent: 'flex-end',
        textAlign: 'center',
    }
})

function Header () {

    const classes = useStyles()


    return (
        <Grid container className={classes.headingContainer}>
            <Grid item xs={12}><h2>Micro-Lending</h2></Grid>
        </Grid>
    )
};

export default Header;