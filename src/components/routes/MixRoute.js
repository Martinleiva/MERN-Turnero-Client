import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRouteClient = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { authenticated, loading, type_usr, setAuthenticatedUser } = authContext;

    useEffect(()=>{  
        if(localStorage.getItem('token')){
            setAuthenticatedUser();                
        }         
        //eslint-disable-next-line             
    }, []);

    return (                     
        <Route {...props} render={ props =>                
                
                !loading
                ?             
                    !authenticated
                        ? 
                        <Redirect to={'/'} />
                        : 
                        (   
                        type_usr !== 'Cliente' 
                                ?
                                <Redirect to={'/'} />
                                :
                                <Component {...props} />
                        )
                :
                <Component {...props} />                
        }            
        />                
    );
};

export default PrivateRouteClient;