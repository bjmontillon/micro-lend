import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import App from './App'

function Auth() {
    return ( 
<BrowserRouter>
        
        <Route path='/' exact>
        <h1>hello</h1>
            <button>Log In</button>
            <button>Log Out</button>
        </Route>
</BrowserRouter>

     );
}

export default Auth;