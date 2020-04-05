import React, { Fragment } from 'react';
import Header from '../common/Header';
import Establishment from './Establishment';

const MyEstablishments = () => {
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
                    <Establishment/>
                    <Establishment/>
                </div>
            </div>            
        </Fragment>
     );
}
 
export default MyEstablishments;