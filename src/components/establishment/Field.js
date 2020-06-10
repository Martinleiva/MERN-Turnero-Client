import React, {useContext, useEffect } from 'react';
import imagenFutbol from '../../img/foto-futbol.jpg';
import imagenBasquet from '../../img/foto-basquet.jpg';
import imagenPaddle from '../../img/foto_paddle.jpg';
import SinImagen from '../../img/sin_imagen.png';
import { Trash, Pencil } from 'react-bootstrap-icons';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import Swal from 'sweetalert2';
import {backEndURL} from '../../config/urlBackEnd';

const Field = ({field}) => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { setSelectedField, removeAlertMessage, deleteField, alert_message } = establishmentContext;

    //eslint-disable-next-line
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
        default:
            
    }
    
    const handleSetSelectedField = e => {
        setSelectedField(field);
    }
   
    const handleDeleteField = field => {        
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
                deleteField(field);                               
                Swal.fire({
                title: 'Eliminando cancha...',
                html: 'aguarde por favor...',
                timer: 3000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading()                   
                },
                onClose: () => {                    
                }
                }).then((result) => {                
                    if (result.dismiss === Swal.DismissReason.timer) {
                        Swal.fire(
                            'Cancha eliminada con exito!',
                            'Los datos de la cancha han sido barrados!',
                            'success'
                        )                        
                    }
                })             
            }
        })        
    }

    useEffect(()=> {
        if(alert_message && alert_message.category === 'alert-danger' 
            && alert_message.error_type === 'ERROR_DELETING_FIELD') {
            Swal.fire({
                icon: 'error',
                title: 'Error al eliminar',
                text: alert_message.msg                                
              })
            removeAlertMessage();      
        }
        //eslint-disable-next-line
    }, [alert_message])

    return (
        <div className="card card-field polaroid"> 
            <img className="card-img-top" src={`${backEndURL}${field.photo_1}`} alt="Field"/>       
            <div className="card-body">
                <p className="card-title">{field.name} - {field.sport_type.description}</p>
                <a href="!#"
                   data-toggle="modal"
                   data-target="#modal_detail_of_field"
                   onClick={handleSetSelectedField}
                ><p>Ver detalle</p></a>
            </div>
            <div className="btn-group-fab-edit-field">                 
                <Pencil color="black" className="btn-edit-field" 
                        size={15} 
                        data-toggle="modal"
                        data-target="#modal_new_field" 
                        onClick={handleSetSelectedField}                                                   
                />                
            </div>
            <div className="btn-group-fab-remove-field">                 
                <Trash color="black" className="btn-remove-field" 
                        size={15}                            
                        onClick={ () => handleDeleteField(field)}/>                
            </div>           
        </div>
    );
}
 
export default Field;