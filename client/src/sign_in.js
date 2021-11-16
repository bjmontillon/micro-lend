import { makeStyles } from '@mui/styles';
import Controls from './Controls/Controls';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ProtectedRoute from './ProtectedRoute';

import Home from './Components/home';


const useStyles = makeStyles ({ 
    appContainer: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column'
    },
    buttonWrapper: {
      minHeight: '100vh',
      minWidth: '100vw',
      justifyContent: 'space-evenly',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
   
  })  
  
const SignIn = () => {
  
    const classes = useStyles()
    const [isAuth, setIsAuth] = useState (false);
    return (
        <div className={classes.buttonWrapper}>
                  <div className={classes.loginButton}>
                    <Controls.Button
                      variant="outlined"
                      text={"LOG IN"}
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
                      to="/Home"
                      style={{textDecoration: 'none', color: 'black'}}>
                      <Controls.Button
                      text='Proceed'
                      variant="outlined"
                      color="primary"
                      size='small'
                    />
                    </Link>
                    <ProtectedRoute path="/Home" component={Home} isAuth={isAuth} />
                  </div>
                </div>
    )
}
export default SignIn