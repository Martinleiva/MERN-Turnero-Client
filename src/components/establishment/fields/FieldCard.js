import React from 'react';
import imagenCancha from '../../../img/cancha4.jpg';
import { Link } from 'react-router-dom';

const FieldCard = ({field}) => {
    return ( 
        <div>
            <div className="card">
                <h1 className="card-header">Complejo: {field.establishment.name}</h1>
                <div className="card-body">
                    <h5 className="card-title">Nombre Cancha: {field.name}</h5>
                    <h5 className="card-title">Tipo: {field.ground_type.description}</h5>
                    <h6 className="card-subtitle text-muted">Precio: ${field.price}</h6>
                </div>
                <img style={{height: 250, width: '100%', display: 'block', margin: '0 auto', borderRadius: '.2rem'}} src={imagenCancha} alt="Cancha de futbol" />

                <div className="card-footer text-center">
                    <Link to={'/res-client'} type="button" className="btn btn-success">Reservar</Link>
                </div>
            </div>
        </div>

     );
}
 
export default FieldCard;