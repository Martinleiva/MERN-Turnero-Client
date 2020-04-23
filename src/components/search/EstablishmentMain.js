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
                <span className="card-address">{establishment ? establishment.address : ''}</span>
            </div>            
        </div>

     );
}
 
export default EstablishmentMain;