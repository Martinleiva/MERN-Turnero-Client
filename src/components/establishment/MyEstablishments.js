import React, { Fragment, useContext, useEffect, useState } from 'react';
import Header from '../common/Header';
import Establishment from './Establishment';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AuthContext from '../../context/authentication/authContext';
import ModalNewField from './ModalNewField';
import ModalDetailOfField from './ModalDetailOfField';
import ModalNewEstablishment from './ModalNewEstablishment';
import EstablishmentEmpty from './EstablishmentEmpty';
import Spinner from '../common/Spinner';

const MyEstablishments = () => {

    const establishmentContext = useContext(EstablishmentContext);
    const authContext = useContext(AuthContext);

    const [loading, setLoading] = useState(true); 

    const { user } = authContext;
    const { listOfStablishments, amount_of_establishment, 
            getStablishmentByOwner, getTypesOfSports, 
            getTypesOfGrounds, getCategories, getServices } = establishmentContext;    

    useEffect( ()=> {                 
        getStablishmentByOwner();
        getTypesOfSports();
        getTypesOfGrounds();
        getCategories();
        getServices();        
    }, [])
    
    useEffect( ()=> {
        console.log('amount_of_establishment:', amount_of_establishment);
        if(amount_of_establishment !== null){
            setLoading(false);        
        }                    
    }, [amount_of_establishment])

    return ( 
        <Fragment>
            <Header />
            <div className="container container-establishments"> 

                <div className="header-my-establishment">
                    <h3>Mis Complejos</h3> 
                {listOfStablishments.length !== 0 
                    ?                                                                        
                        <button type="button" 
                                className="btn btn-success btn-sm"
                                data-toggle="modal"
                                data-target="#modal_new_stablishment"
                                >
                                Agregar Complejo
                        </button>                                             
                    : null
                }
                </div>                

                <div className="establishments">                    
                    {
                       loading 
                            ? 
                            <Spinner/> 
                            :
                            listOfStablishments.length === 0 
                                ? <EstablishmentEmpty/>
                                : listOfStablishments.map(establisment => (
                                    <Establishment 
                                        establishment = {establisment}
                                    />
                                ))                       
                    }     
                                  
                    <ModalNewEstablishment/>                                  
                    <ModalDetailOfField/>
                    <ModalNewField/>                    

                </div>
            </div>            
        </Fragment>
     );
}
 
export default MyEstablishments;