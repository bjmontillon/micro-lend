import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProtectedRoute  from './ProtectedRoute';
import Auth from './Auth';
import Controls from './Controls/Controls';
import Typography from '@material-ui/core/Typography'

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'

import theme from './Theme'
import  ThemeProvider from '@material-ui/styles/ThemeProvider'

  const useStyles = makeStyles ({
      primaryButton: {
        borderRadius: '0'
      },
      authContainer: {
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      },
      appLink: {
        display: 'flex',
        justifyContent: 'center'
      },
      buttonWrapper: {
        minHeight: '40vh',
        width: '15vw',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: "center",
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: '3px'
      }
  })

function App() {


    const classes = useStyles()
    const [isAuth, setIsAuth] = useState(false)

    //<Grid item xs={12} className={classes.appLink}>
    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Grid container className={classes.authContainer}>
        <Route path='/micro-lend' exact>
        <Grid item className={classes.buttonWrapper}>
            <Grid item xs={12}>
              <Controls.Button
                variant='outlined'
                text={<Typography variant='overline' component='h2'>LOG IN</Typography>}
                onClick={() => {setIsAuth(true)}}
                color='primary'
                classes={{ root: classes.primaryButton }}  
              >
              </Controls.Button>
            </Grid>
            <Grid item xs={12}>
              <Controls.Button 
                text={<Typography variant='overline' component='h2'>LOG OUT</Typography>} 
                onClick={() => {setIsAuth(false)}}
                variant='outlined'
                color='primary'
              />
            </Grid>
            <Grid item xs={12}>
              <Link to='/auth' style={{ textDecoration: 'none', color: 'black' }}>
                <Typography variant='overline' component='h2' color='inherit'>
                  Proceed
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Route>
        
        <ProtectedRoute path="/auth" component={Auth} isAuth={isAuth}/>
        </Grid>
        </ThemeProvider>
</BrowserRouter>
    );
  
}

export default App;
