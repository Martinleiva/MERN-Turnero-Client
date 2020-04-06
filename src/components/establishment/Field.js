import React from 'react';
import imagenTemp1 from '../../img/cancha_temp_1.jpg';
import imagenTemp2 from '../../img/cancha_temp_2.jpg';
import imagenTemp3 from '../../img/cancha_temp_3.jpg';

const Field = ({field}) => {

    return (
        <div className="card card-field">
            <img className="card-img-top" src={imagenTemp1} alt="Card image"/>
            <div className="card-body">
                <p className="card-title">{field.name} - {field.sport_type.description}</p>
                <a href=""><p>Ver detalle</p></a>
            </div>
        </div>
    );
}
 
export default Field;