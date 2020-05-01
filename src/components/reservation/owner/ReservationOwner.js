import React, {useContext, useEffect, Fragment} from 'react';
import Header from '../../common/Header';
import Footer from '../../inicio/Footer';
import MyReservationOwner from './MyReservationOwner';

const ReservationOwner = () => {


    return ( 
        <Fragment>
            <Header />
            <h1>Reservas Dueño</h1>

            <MyReservationOwner />

            <Footer />
        </Fragment>
     );
}
 
export default ReservationOwner;