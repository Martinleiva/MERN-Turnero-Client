import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext';

const Dash = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user, setAuthenticatedUser, logOut } = authContext;

    useEffect(() => {
        setAuthenticatedUser();
    }, []);

    return (
        <h1>
            Página Luquitas
            {user ? <div>{user.names}  <p>{user.email}</p></div> : null}
            <button onClick={() => logOut()}>Cerrar Sesion</button>
        </h1>
    );
};

export default Dash;