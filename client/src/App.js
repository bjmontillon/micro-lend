import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProtectedRoute  from './ProtectedRoute';
import Auth from './Auth';
import Controls from './Controls/Controls';
import Typography from '@material-ui/core/Typography'




function App() {

    const [isAuth, setIsAuth] = useState(false)
    return (
      <BrowserRouter>
        <Route path='/micro-lend' exact>
          <Link to='/auth'>
            <Typography type='h1'>
              Proceed
            </Typography>
          </Link>
          <Controls.Button text='Log In' onClick={() => {setIsAuth(true)}}></Controls.Button>
          <Controls.Button text='Log Out' onClick={() => {setIsAuth(false)}}></Controls.Button>
        </Route>
        
        <ProtectedRoute path="/auth" component={Auth} isAuth={isAuth}/>
</BrowserRouter>
    );
  
}

export default App;
