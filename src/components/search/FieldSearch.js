import React from 'react';
import {backEndURL} from '../../config/urlBackEnd';
import Spinner from '../common/Spinner';
import SinImagen from '../../img/sin_imagen.png';

//import ReservationContext from '../../context/reservations/reservationContext';
//import EstablishmentContext from '../../context/establishment/establishmentContext';

const FieldSearch = (field) => {

    // const reservationContext = useContext(ReservationContext); 
    // const { getReservationsByField } = reservationContext;
    // const establishmentContext = useContext(EstablishmentContext); 
    // const { setSelectedEstablishment } = establishmentContext;

    //Set establisment to state
    const selectEstablisment =  (establishment) => {

        //setSelectedEstablishment(establishment);
        console.log(establishment);

        return;
        //handleGetFields();
    }

    // const handleGetFields = async () => {

    //     //await getFieldByStablishment(establishment._id);
        
    //     //await getReservationsByField(selected_field);
    //     //console.log(selected_field);
        
    //     const actives = document.getElementsByClassName('field');
    //     const actives2 = document.getElementsByClassName('contentField');

    //     for(let i=1; i<actives.length; i++){           
    //         actives[i].classList.remove("active");
    //         actives2[i].classList.remove("show", "active");
    //     }
    // }
    
    return (        
        <div className="card card-field-search"> 
            
            {
                field ?  <img className="card-img-top" src={field.photo_1 !== '' ?  `${backEndURL}${field.photo_1}` : SinImagen} alt="field"/>
                      : <Spinner/>
            }            

            <div className="card-body">
                <h5 className="card-title font-weight-bold">{field ? field.sport_type.description : ''}</h5>
                <h5 className="card-title">{field ? field.establishment.name : ''}</h5>
                <div className="card-field-search-footer">
                    <div className="bui-review-score__badge" aria-label="Puntuación:  9,1 ">  9,1 </div>
                    <button 
                        data-toggle="modal" 
                        data-target="#modal_new_reservation"
                        className="btn-see-disponibility"
                        onClick={() => selectEstablisment(field.establishment)}
                    >
                        Reservar
                    </button>                
                </div>                
            </div>                     
        </div>
    );
}
 
export default FieldSearch;