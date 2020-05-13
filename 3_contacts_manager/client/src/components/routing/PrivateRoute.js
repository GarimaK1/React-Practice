import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // https://dev.to/skylerwebdev/setting-up-a-private-route-in-react-3ph0
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;

    return (
        <Route {...rest} 
            render={props => !isAuthenticated && !loading ? (<Redirect to="/login" />) : (<Component {...props} />)
                              } 
        />
    )
}

export default PrivateRoute;