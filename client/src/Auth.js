import React, {useState} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Controls from './Controls/Controls';


import {makeStyles} from '@mui/styles';
import theme from './Theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import App from './App';

const useStyles = makeStyles ({
  authContainer: {
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  buttonWrapper: {
    minHeight: '27vh',
    minWidth: '24vw',
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
 

});

function Auth () {
  const classes = useStyles ();
  const [isAuth, setIsAuth] = useState (false);

  //<Grid item xs={12} className={classes.appLink}>
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.authContainer}>
          <Route path="/micro-lend" exact>  
            <div className={classes.buttonWrapper}>
              <div className={classes.loginButton}>
                <Controls.Button
                  variant="outlined"
                  text="LOG IN"
                  onClick={() => {
                    setIsAuth (true);
                  }}
                  color="primary"
                  size='small'  
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
                  size='small'
                />
              </div>
              <div className={classes.proceedLink}>
              
              
              <Link
                  to="/App"
                  style={{textDecoration: 'none', color: 'black'}}>
                  <Controls.Button
                  text='Proceed'
                  variant="outlined"
                  color="primary"
                  size='small'
              />
                </Link>
              </div>

            </div>
            </Route>
            <ProtectedRoute path="/App" component={App} isAuth={isAuth} />
            </div> 
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Auth ;
