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
                <p className="card-title">{field ? field.sport_type.description : ''}</p>                
            </div>                     
        </div>
    );
}
 
export default FieldSearch;