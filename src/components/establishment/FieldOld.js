import React from 'react';
import imagenTemp1 from '../../img/cancha_temp_1.jpg';
import imagenTemp2 from '../../img/cancha_temp_2.jpg';
import imagenTemp3 from '../../img/cancha_temp_3.jpg';
import SinImagen from '../../img/sin_imagen.png';

const FieldOld = ({field}) => {

    return (
        <div className="card card-field">
            <img className="card-img-top" src={field.photo_1 !== '' ? `data:image/jpeg;base64,${field.photo_1}` : SinImagen} alt="Card image"/>
            <div className="card-body">
                <p className="card-title">{field.name} - {field.sport_type.description}</p>
                <a href=""><p>Ver detalle</p></a>
            </div>
        </div>
    );
}
 
export default FieldOld;