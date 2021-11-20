import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography }  from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles ({
    headerContainer: {
        height: '9vh',
        width: '100%',
    },
    navbar: {
        height: '100%',
        backgroundColor: `var(--navbar-background-color)`,
        boxShadow: '6px 4px 39px -14px rgb(0 0 0 / 40%)',
        fontFamily: `var(--font-spartan)`,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'center',
        textAlign: 'center',
        display: 'flex',
        padding: '0 0px 0 0'
    }
})

function Header (props) {
    const classes = useStyles()
    return (
        <div className={classes.headerContainer}  >
            <nav className={classes.navbar} >
                <div><Link path='/home' style={{textDecoration: 'none'}}><Typography color='black' variant='h1'>Micro-Lend</Typography></Link></div>
                <div><Typography color='black' variant='h1'>Beejay P.</Typography></div>
            </nav>
        </div>
    )
};

export default Header;