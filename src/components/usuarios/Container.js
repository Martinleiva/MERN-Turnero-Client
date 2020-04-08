import React, { useContext, useEffect } from 'react';
import FieldsList from '../establishment/fields/FieldsList';

import AuthContext from '../../context/authentication/authContext';
import FieldContext from '../../context/fields/fieldContext';

const Container = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const fieldContext = useContext(FieldContext);
    const { getFields } = fieldContext;

    useEffect( () => {
        getFields();
    }, []);

    return (
        <div id="contenedorNavbar" className="container col">
            <div className="jumbotron text-center">
                <h3 className="display-4">Bienvenido {user ? user.names : ''}!</h3>
                <p className="lead">En esta sección podra ver sus reservas vigentes, crear nuevas reservaciones y borrar las actuales.</p>

            </div>

            <div className="card-columns">
                <FieldsList />
            </div>
            
        </div> 
     );
}

export default Container;