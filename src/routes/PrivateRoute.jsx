import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <Spinner animation="border" role="status"></Spinner>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}  replace></Navigate>
};

export default PrivateRoute;

/**
 * ----------
 * 1. Check user logged in or not
 * 2. if user is logged in, then allow then to visit the route
 * 3. Else redirect the user to the login page
 * 4. Setup the private router
 * 5. Handle loading process
 * 
 */