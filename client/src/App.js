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
    flexDirection: 'column'
  },
  buttonWrapper: {
    minHeight: '27vh',
    display: 'flex',
    alignContent: 'space-around',
    textAlign: 'center',
    justifyContent: 'center',
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
            <Grid container className={classes.buttonWrapper}>
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

              <div className={classes.logoutButton}>
                <Controls.Button
                  text="LOG OUT"
                  onClick={() => {
                    setIsAuth (false);
                  }}
                  variant="outlined"
                  color="primary"
                />
              </div>
              <div className={classes.proceedLink}>
                <Link
                  to="/auth"
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <Typography variant="overline" component="h2" color="inherit">
                    Proceed
                  </Typography>
                </Link>
              </div>
            </Grid>
          </Route>

          <ProtectedRoute path="/auth" component={Auth} isAuth={isAuth} />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
