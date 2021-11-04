import React from 'react';
import Clientdetails from './Components/client_profile';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/home'
import { makeStyles } from '@mui/styles';
import SignIn from './sign_in'
import ProtectedRoute from './ProtectedRoute';


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
  const isAuth = true
    
  return (  
      
        
          <BrowserRouter>
             
              
              <div className={classes.appContainer}>
              <div className={classes.container}>
              <Switch>
                <Route path="/micro-lend" exact component={SignIn}/>
                <Route path='/clientDetails/:id' component={Clientdetails} />
                <ProtectedRoute path="/Home" component={Home} isAuth={isAuth} />
              </Switch>
              
            </div>
            </div>
          </BrowserRouter>
          
       
        
     );
}

export default App;