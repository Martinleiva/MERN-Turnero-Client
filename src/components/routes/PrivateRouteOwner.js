import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';
import Spinner from '../common/Spinner';

const PrivateRouteOwner = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { authenticated, loading, type_usr, setAuthenticatedUser } = authContext;

    useEffect(()=>{        
        setAuthenticatedUser(); 
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
                        type_usr !== 'Dueño' 
                                ?
                                <Redirect to={'/'} />
                                :
                                <Component {...props} />
                        )
                : <Spinner/>        
        }            
        />                
    );
};

export default PrivateRouteOwner;