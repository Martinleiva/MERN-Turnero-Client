import React from 'react';
import SinImagen from '../../img/sports2.png';

const EstablishmentEmpty = () => {    
    return (
        <div className="card card-establishment-empty"> 
            <img className="card-img-top" src={SinImagen} alt="Empty"/>       
            <div className="card-body">
                <p className="card-title">Aún no tienes ningún complejo!</p>
                <button className="btn btn-success btn-sm btn-add-field" data-toggle="modal" data-target="#modal_new_stablishment">
                    Comienza agregando uno
                </button>                
            </div>                     
        </div>
    );
}
 
export default EstablishmentEmpty;