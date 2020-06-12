import React, { useContext, Fragment, useEffect } from 'react';
import EstablishmentContext from '../../../context/establishment/establishmentContext';
//import EstablishmentTable from '../../establishment/client/EstablishmentTable';
import ReservationTableOwner from './ReservationTableOwner';

import ReservationContext from '../../../context/reservations/reservationContext';

const ContentResOwner = () => {
    const establishmentContext = useContext(EstablishmentContext); 
    const { selected_stablishment, listOfFields, setSelectedField }= establishmentContext;

    const reservationContext = useContext(ReservationContext); 
    const { getReservationsByField } = reservationContext;

    const handleSelectField = (field) => {
        setSelectedField(field); //Select actual field
        
        getReservationsByField(field._id);//Filter reservations 

        console.log('reservas de ',field._id);
    }

    return ( 
        <div className="modal fade" id="modal_new_reservation" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                           {selected_stablishment ? selected_stablishment.name : '' }<br/>
                           <p>Al hacer click y arrastrar podes realizar una reseva, 
                                o al presionar en algunas de ellas tendreas más opciones.
                            </p>
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <ul className="nav nav-tabs">

                            { 
                            listOfFields.length === 0 
                                ? 
                                    <div>No hay Canchas Cargadas!</div>                                                  
                                :
                                    listOfFields.map((field, index) => {
                                        return (
                                            field.establishment === selected_stablishment._id ? 
                                            <Fragment key={field._id}>
                                                <li className="nav-item">
                                                    <a 
                                                        className="nav-link field active" 
                                                        data-toggle="tab" 
                                                        href={`#tab${index}`}
                                                        onClick={() => handleSelectField(field)}
                                                    >
                                                        {field.name}

                                                    </a>
                                                </li>
                                            </Fragment>
                                            : 
                                                null
                                        );
                                        
                                    })
                            }
                        </ul>

                        <div className="tab-content">

                            {
                            listOfFields.length === 0 
                                ? 
                                    <div>No hay Canchas Cargadas!</div>                                                  
                                :
                                    listOfFields.map((field, index) => (
                                        field.establishment === selected_stablishment._id ? 
                                        <Fragment key={field._id}>
                                            <div 
                                                className="tab-pane fade show active contentField" 
                                                id={`tab${index}`}>
                                                    <ReservationTableOwner />
                                            </div>

                                        </Fragment>
                                        : 
                                            null
                                    ))
                            }
                        </div>

                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-success">Confirmar Reserva</button>
                    </div> */}
                </div>
            </div>
        </div>
     );
}
 
export default ContentResOwner;