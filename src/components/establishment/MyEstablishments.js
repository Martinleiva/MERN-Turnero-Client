import React, { Fragment, useContext, useEffect } from 'react';
import Header from '../common/Header';
import Establishment from './Establishment';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AuthContext from '../../context/authentication/authContext';

const MyEstablishments = () => {

    const establishmentContext = useContext(EstablishmentContext);
    const authContext = useContext(AuthContext);

    const { user } = authContext;
    const { listOfStablishments, getStablishmentByOwner } = establishmentContext;    

    useEffect( ()=> {
        getStablishmentByOwner();
    }, [])    

    return ( 
        <Fragment>
            <Header />
            <div className="container container-establishments"> 

                <div className="header-my-establishment">
                    <p>&nbsp;</p>
                    <h1 >Mis Complejos</h1>
                    <button type="button" className="btn btn-success btn-sm">Agregar Complejo</button>
                </div>

                <div className="establishments">
                    {
                       listOfStablishments.map(establisment => (
                        <Establishment 
                           establishment = {establisment}
                        />
                       ))
                    }                    
                    
                </div>
            </div>            
        </Fragment>
     );
}
 
export default MyEstablishments;