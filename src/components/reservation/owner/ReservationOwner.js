import React, {useContext, useEffect, Fragment} from 'react';
//import HeaderOwner from '../../common/HeaderOwner';
import Header from '../../common/Header';
import Footer from '../../inicio/Footer';
import MyReservationOwner from './MyReservationOwner';

import AuthContext from '../../../context/authentication/authContext';
import EstablishmentContext from '../../../context/establishment/establishmentContext';
//import ModalNewRes from '../../establishment/client/ModalNewRes';

const ReservationOwner = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user } = authContext;        

    const establishmentContext = useContext(EstablishmentContext);
    const { getStablishmentByOwner } = establishmentContext;

    useEffect( ()=> {                 
        getStablishmentByOwner();
                
    }, [])
    

    return ( 
        <Fragment>
            <Header/>
            <h1>Reservas Dueño</h1>

            <MyReservationOwner />

            {/*<ModalNewRes />*/}

            <Footer />
        </Fragment>
     );
};
 
export default ReservationOwner;