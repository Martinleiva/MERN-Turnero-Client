import React, { useContext } from 'react';
import SinImagen from '../../../img/sin_imagen.png';
import { backEndURL } from '../../../config/urlBackEnd';

import EstablishmentContext from '../../../context/establishment/establishmentContext';


const FieldCard = ({ establishment }) => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { setSelectedEstablishment, getFieldByStablishment } = establishmentContext;

    const handleGetFields = async () => {

        await getFieldByStablishment(establishment._id);

        const actives = document.getElementsByClassName('field');
        const actives2 = document.getElementsByClassName('contentField');

        for(let i=1; i<actives.length; i++){           
            actives[i].classList.remove("active");
            actives2[i].classList.remove("show", "active");
        }
    }

    //Set establisment to state
    const selectEstablisment =  (establishment) => {

        setSelectedEstablishment(establishment);

        handleGetFields();
    }

    return ( 
        <div className="card-establishment-client">
            <h4>Complejo: <span>{establishment.name}</span></h4>
            
            <img 
                src={
                        establishment.photo_1 !== ''
                        ?
                            `${backEndURL}${establishment.photo_1}`
                        :   SinImagen                    
                    }

                className="card-img-client" 
                alt="Imagen complejo"
            />

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