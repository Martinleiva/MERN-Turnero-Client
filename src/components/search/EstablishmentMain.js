import React from 'react';
import { backEndURL } from '../../config/urlBackEnd';

const EstablishmentMain = ({establishment}) => {
    

    return ( 
        <div className="card card-establishment-main">
            <div className="card-image">
                <img src={
                            establishment 
                            ?
                            `${backEndURL}${establishment.photo_1}`
                            : null                    
                        } className="card-img-top" alt="..."
                />
                <span className="card-title">{establishment ? establishment.name : ''}</span>
                <span className="card-address" data-toggle="tooltip" title="Ver ubicación en mapa">{establishment ? establishment.address : ''}</span>
                <div className="location-icon" data-toggle="tooltip" title="Ver ubicación en mapa">                                        
                </div>        
            </div>            
        </div>

     );
}
 
export default EstablishmentMain;