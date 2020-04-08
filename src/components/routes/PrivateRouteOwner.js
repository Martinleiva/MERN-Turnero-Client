import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRouteOwner = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { authenticated, loading, type_usr, setAuthenticatedUser } = authContext;

    useEffect(()=>{
        setAuthenticatedUser();
    }, []);

    return (
        <Route {...props} render={ props => !authenticated && type_usr !== 'Dueño' ? (
            <Redirect to={'/'} />
        ) : (
            <Component {...props} />
        )}
            
        />
    );
};

export default PrivateRouteOwner;