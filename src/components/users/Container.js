import React, {useContext, useEffect} from 'react';
import Card from './Card';
import AuthContext from '../../context/authentication/authContext';

const Container = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user, setAuthenticatedUser, logOut } = authContext;

    

    return (
        <div id="contenedorNavbar" className="container col">
            <div className="jumbotron">
                <h3 className="display-4">Bienvenido {user ? user.names : ''}</h3>
                
                <p className="lead">En esta sección podra ver sus reservas vigentes, crear nuevas reservaciones y borrar las actuales.</p>
                <p></p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                
                <button type="button" class="btn btn-success">+ RESERVAR</button>
            </div>

            <div className="row">
                    <div className="col"><Card/></div>
                    <div className="col"><Card/></div>
                    <div className="col"><Card/></div>
            </div>
        </div> 
     );
}

export default Container;