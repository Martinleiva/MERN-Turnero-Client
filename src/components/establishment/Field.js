import React, {useContext} from 'react';
import imagenFutbol from '../../img/foto-futbol.jpg';
import imagenBasquet from '../../img/foto-basquet.jpg';
import imagenPaddle from '../../img/foto_paddle.jpg';
import SinImagen from '../../img/sin_imagen.png';
import { Trash } from 'react-bootstrap-icons';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import Swal from 'sweetalert2';

const Field = ({field}) => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { setSelectedField, deleteField, selected_field }= establishmentContext;

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
    
    const handleSetSelectedField = e => {
        setSelectedField(field);
    }

    const handleDeleteField = e => {
        setSelectedField(field);
        Swal.fire({
            title: '¿Seguro de eliminar la cancha?',
            text: "Si elimina esta cancha, se eliminará toda la información relacionada a la misma.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI, acepto eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
              deleteField(selected_field);  
              Swal.fire(
                'Cancha eliminada con exito!',
                'Los datos de la cancha han sido barrados!',
                'success'
              )
            }
        })        
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
                    <Trash color="black" className="btn-remove-field" 
                           size={15}                            
                           onClick={handleDeleteField}/>                
            </div>           
        </div>
    );
}
 
export default Field;