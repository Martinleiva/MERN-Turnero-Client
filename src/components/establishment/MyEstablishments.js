import React, { Fragment, useContext, useEffect, useState } from 'react';
import Header from '../common/Header';
import Establishment from './Establishment';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AuthContext from '../../context/authentication/authContext';
import ModalNewField from './ModalNewField';
import ModalDetailOfField from './ModalDetailOfField';
import DialogConfirmDeleteField from './DialogConfirmDeleteField';
import Spinner from '../common/Spinner';

const MyEstablishments = () => {

    const establishmentContext = useContext(EstablishmentContext);
    const authContext = useContext(AuthContext);

    const [loading, setLoading] = useState(false); 

    const { user } = authContext;
    const { listOfStablishments, getStablishmentByOwner, getTypesOfSports, getTypesOfGrounds } = establishmentContext;    

    useEffect( ()=> {
        setLoading(true);
        getStablishmentByOwner();
        getTypesOfSports();
        getTypesOfGrounds();
        setTimeout(() => {                        
            setLoading(false);            
        }, 800);
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
                       loading ? 
                            <Spinner/> 
                            :listOfStablishments.map(establisment => (
                                <Establishment 
                                establishment = {establisment}
                                />
                            ))                       
                    }     
                                  
                    <ModalDetailOfField/>
                    <ModalNewField/>
                    <DialogConfirmDeleteField/>

                </div>
            </div>            
        </Fragment>
     );
}
 
export default MyEstablishments;