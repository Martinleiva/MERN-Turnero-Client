import React, {useContext} from 'react';
import imagenFutbol from '../../img/foto-futbol.jpg';
import imagenBasquet from '../../img/foto-basquet.jpg';
import imagenPaddle from '../../img/foto_paddle.jpg';
import SinImagen from '../../img/sin_imagen.png';
import { Trash } from 'react-bootstrap-icons';
import EstablishmentContext from '../../context/establishment/establishmentContext';

const Field = ({field}) => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { setSelectedField}= establishmentContext;

    let image = SinImagen;    
    
    switch(field.sport_type._id) {
        case '5e8766f386caa812e42a413e':
            image = imagenFutbol;       
            break;
        case '5e87670186caa812e42a413f':
            image = imagenBasquet;
            break;
        case '5e87672286caa812e42a4140':
            image = imagenPaddle;
            break;
    }

    const handleDeleteField = e => {
        console.log('llamado a eliminar: ', field._id);
    }

    const handleSetSelectedField = e => {
        setSelectedField(field);
    }

    return (
        <div className="card card-field"> 
            <img className="card-img-top" src={image} alt="Card image"/>       
            <div className="card-body">
                <p className="card-title">{field.name} - {field.sport_type.description}</p>
                <a href=""
                   data-toggle="modal"
                   data-target="#modal_detail_of_field"
                   onClick={handleSetSelectedField}
                ><p>Ver detalle</p></a>
            </div>
            <div className="btn-group-fab-remove-field">                 
                    <Trash color="black" className="btn-remove-field" size={15}  onClick={handleDeleteField} />                
            </div> 
        </div>
    );
}
 
export default Field;