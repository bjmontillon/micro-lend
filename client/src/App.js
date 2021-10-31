import React, { useState } from 'react';
import Clientdetails from './Components/clientDetails';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Controls from './Controls/Controls';
import ProtectedRoute from './ProtectedRoute';
import Home from './Components/home';
import { makeStyles } from '@mui/styles';
import Header from './Components/header'
import Footer from './Components/Footer/footer'


const useStyles = makeStyles ({ 
  appContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
  buttonWrapper: {
    minHeight: '27vh',
    minWidth: '24vw',
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
 
})  
function App() {
  const classes = useStyles()
  const [isAuth, setIsAuth] = useState (false);
    
  return (
      
        <div className={classes.appContainer}>
          <BrowserRouter>
             
              <Route path="/micro-lend" exact>  
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
                  </div>
                </div>
              </Route>
              <Header />
              <div className={classes.container}>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path='/clientDetails/:_id' component={Clientdetails} />
                <ProtectedRoute path="/Home" component={Home} isAuth={isAuth} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
          
        </div>
        
     );
}

export default App;