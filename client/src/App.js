import React, {useState} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Auth from './Auth';
import Controls from './Controls/Controls';
import Typography from '@material-ui/core/Typography';

import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';

import theme from './Theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

const useStyles = makeStyles ({
  authContainer: {
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  appLink: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonWrapper: {
    minHeight: '40vh',
    width: '15vw',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    textAlign: 'center',
    border: '1px solid black',
    borderRadius: '3px',
  },
});

function App () {
  const classes = useStyles ();
  const [isAuth, setIsAuth] = useState (false);

  //<Grid item xs={12} className={classes.appLink}>
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Grid container className={classes.authContainer}>
          <Route path="/micro-lend" exact>
            
              <div className={classes.loginButton}>
                <Controls.Button
                  variant="contained"
                  text="LOG IN"
                  onClick={() => {
                    setIsAuth (true);
                  }}
                  color="primary"
                />
                </div>
              
       
                <Controls.Button
                  text="LOG OUT"
                  onClick={() => {
                    setIsAuth (false);
                  }}
                  variant="outlined"
                  color="primary"
                />
           
          
                <Link
                  to="/auth"
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <Typography variant="overline" component="h2" color="inherit">
                    Proceed
                  </Typography>
                </Link>
          

          </Route>

          <ProtectedRoute path="/auth" component={Auth} isAuth={isAuth} />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
