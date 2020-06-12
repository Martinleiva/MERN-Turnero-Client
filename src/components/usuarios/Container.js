import React, { useContext, useEffect } from 'react';
//import EstablishmentList from '../establishment/client/EstablishmentList';

import AuthContext from '../../context/authentication/authContext';
import EstablishmentContext from '../../context/establishment/establishmentContext';

//import ModalNewRes from '../establishment/client/ModalNewRes';
//import ModalReservation from '../establishment/client/ModalReservation';

const Container = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user } = authContext;        

    const establishmentContext = useContext(EstablishmentContext);
    const { getAllEstablishments } = establishmentContext;

    useEffect( () => {
        getAllEstablishments();
    }, []);

    return (
        <div id="contenedorNavbar" className="container col">
            <div className="jumbotron text-center">
                <h3 className="display-4">Bienvenido {user ? user.names : ''}!</h3>
                <p className="lead">En esta sección vas a poder ver todos los complejos registrados y consultar por los horarios disponibles para reservar tu cancha!.</p>

            </div>

            <div className="container-establishments-client">
               {/* <EstablishmentList />*/}
            </div>

            {/*<ModalReservation />*/}
            
        </div> 
     );
}

export default Container;