import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
    return ( 
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) {
                    return <App />
                } else {
                    return(
                        <Redirect to={{ patname: '/', state: { from: props.location } }} />
                    )
                }
            }}
       />
     );
}

export default ProtectedRoute;