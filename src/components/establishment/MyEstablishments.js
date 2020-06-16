import React, { Fragment, useContext, useEffect, useState } from 'react';
//import HeaderOwner from '../common/HeaderOwner'; mauro
import Header from '../common/Header';
import Establishment from './Establishment';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import ModalNewField from './ModalNewField';
import ModalDetailOfField from './ModalDetailOfField';
import ModalNewEstablishment from './ModalNewEstablishment';
import EstablishmentEmpty from './EstablishmentEmpty';
import Spinner from '../common/Spinner';
import Footer from '../inicio/Footer';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

const MyEstablishments = () => {

    const establishmentContext = useContext(EstablishmentContext);
    //const authContext = useContext(AuthContext);

    const [loading, setLoading] = useState(true); 

    //const { user } = authContext;
    const { listOfStablishments, amount_of_establishment, 
            getStablishmentByOwner, getTypesOfSports,            
            getTypesOfGrounds, getCategories, getServices,
            setSelectedEstablishment } = establishmentContext;    

    useEffect( ()=> {                 
        getStablishmentByOwner();
        getTypesOfSports();
        getTypesOfGrounds();
        getCategories();
        getServices();      
        //eslint-disable-next-line  
    }, [])
    
    useEffect( ()=> {        
        if(amount_of_establishment !== null){
            setLoading(false);        
        }                    
    }, [amount_of_establishment])

    const handleNewEstablishment = () => {
        //Make sure of clean if there is a selected stablishment
        setSelectedEstablishment(null);
    }

    const ButtonAdd = withStyles({
        root: {
          backgroundColor: '#10850e',
          color : 'white'                    
        }        
    })(Button);

    return ( 
        <Fragment>
            {/*<HeaderOwner /> mauro*/} 
            <Header />
            <div className="container container-establishments"> 

                <div className="header-my-establishment">
                    <h3>Mis Complejos</h3> 
                {listOfStablishments.length !== 0 
                    ?                                                                        
                        <ButtonAdd
                            variant="contained"
                            color="default"                            
                            startIcon={<Add />}
                            data-toggle="modal"
                            data-target="#modal_new_stablishment"
                            onClick={handleNewEstablishment}
                        >
                            Agregar Complejo
                        </ButtonAdd>                                             
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
                                :                                 
                                listOfStablishments.map(establisment => (
                                        <Establishment
                                            key={establisment._id}                                         
                                            establishment = {establisment}                                        
                                        />                                                                      
                                ))                                
                    }     
                                  
                    <ModalNewEstablishment/>                                  
                    <ModalDetailOfField/>
                    <ModalNewField/>                    

                </div>
                <Footer/>   
            </div>            
        </Fragment>
     );
}
 
export default MyEstablishments;