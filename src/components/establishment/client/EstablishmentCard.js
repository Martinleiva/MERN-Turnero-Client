import React, { useContext } from 'react';
import { backEndURL } from '../../../config/urlBackEnd';
import SinImagen from '../../../img/sin_imagen.png';
//field.photo_1

import EstablishmentContext from '../../../context/establishment/establishmentContext';


const FieldCard = ({ establishment }) => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { setSelectedEstablishment }= establishmentContext;

    //Set establisment to state
    const selectEstablisment = establishment => {
        setSelectedEstablishment(establishment);
    }

    return ( 
        <div className="card-establishment-client">
            <h4>Complejo: <span>{establishment.name}</span></h4>
            
            <img src={ SinImagen } className="card-img-client" alt="Imagen complejo"/>

            <h5>Dirección: <span>{establishment.address}</span></h5>
            <h5>Teléfono: <span>{establishment.tel}</span></h5>
            <h5>Servicios:</h5> 
                {establishment.services.map(service => (
                    <span key={service._id} className="badge badge-success mr-2 card-service">
                        {service.description}
                    </span>))
                }
            <button 
                data-toggle="modal" 
                data-target="#modal_new_reservation"
                onClick={() => selectEstablisment(establishment)}
            >Ver disponibilidad</button>

        </div>
    );
}
 
export default FieldCard;