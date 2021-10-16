import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function ProtectedRoute({ isAuth: isAuthe, component: Component, ...rest }) {
    return ( 
        <Route
            {...rest}
            render={(props) => {
                if (isAuthe) {
                    return <Component />
                } else {
                    return(
                        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                    )
                }
            }}
       />
     );
}

export default ProtectedRoute;