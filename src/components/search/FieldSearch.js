import React from 'react';
import {backEndURL} from '../../config/urlBackEnd';
import Spinner from '../common/Spinner';
import SinImagen from '../../img/sin_imagen.png';

const FieldSearch = (field) => {
    
    return (        
        <div className="card card-field-search"> 
            
            {
                field ?  <img className="card-img-top" src={field.photo_1 !== '' ?  `${backEndURL}${field.photo_1}` : SinImagen} alt="Card image"/>
                      : <Spinner/>
            }            

            <div className="card-body">
                <h5 className="card-title font-weight-bold">{field ? field.sport_type.description : ''}</h5>
                <h5 className="card-title">{field ? field.establishment.name : ''}</h5>
                <div className="card-field-search-footer">
                    <div className="bui-review-score__badge" aria-label="Puntuación:  9,1 ">  9,1 </div>
                    <div className="btn-see-disponibility">Reservar</div>                
                </div>                
            </div>                     
        </div>
    );
}
 
export default FieldSearch;