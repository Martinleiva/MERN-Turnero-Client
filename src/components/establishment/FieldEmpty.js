import React from 'react';
import SinImagen from '../../img/sports2.png';

const FieldEmpty = () => {    
    return (
        <div className="card card-field"> 
            <img className="card-img-top" src={SinImagen} alt="Card image"/>       
            <div className="card-body">
                <p className="card-title">Aún no hay canchas!</p>
                <button className="btn btn-success btn-sm btn-add-field" data-toggle="modal" data-target="#modal_new_field">
                    Agrega una desde aquí
                </button>                
            </div>                     
        </div>
    );
}
 
export default FieldEmpty;