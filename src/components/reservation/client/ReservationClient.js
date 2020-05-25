import React, { Fragment } from 'react';
import Header from '../../common/Header';
import Footer from '../../inicio/Footer';

const ReservationClient = () => {
    return (
        <Fragment>
            <Header />

                <section className="section-confirm">
                    <div className="section-confirm__data">
                        <h2 className="section-confirm__heading">Confirmar Reserva</h2>
                    </div>

                    <div className="section-confirm__court">
                        <h2 className="section-confirm__heading">Datos Cancha</h2>
                    </div>
        
                </section>
            
            <Footer />
        </Fragment>
    );
};

export default ReservationClient;