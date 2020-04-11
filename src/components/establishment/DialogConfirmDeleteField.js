import React, { useContext, useState } from 'react';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import Spinner from '../common/Spinner';

const DialogConfirmDeleteField = () => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { deleteField, selected_field }= establishmentContext;

    const [loading, setLoading] = useState(null);
    const [deleted, setDeleted] = useState(false);
    
    const handleDeleteField = e => {
        setLoading(true);        
        deleteField(selected_field);
        setTimeout(() => {                        
            setLoading(false);
            setDeleted(true);            
            
            setTimeout(() => {                        
                setLoading(null);
                setDeleted(false);                            
            }, 5000);

        }, 800);
    }


    return (  
        <div className="modal fade" id="confirm-delete-field-dialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">¿Seguro de eliminar la cancha?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">                    
                    {loading === null 
                          ? 'Si elimina esta cancha, se eliminará toda la información relacionada a la misma.'
                          : loading === true ? <Spinner/> 
                            : 
                            <div className="alert alert-dismissible alert-success">                                
                                <strong>Cancha eliminada con exito!</strong>
                            </div>
                    }                    
                </div>
                <div className="modal-footer">
                    {
                    !deleted ? 
                            <button type="button"
                                id="btn-ok-delete-field" 
                                className="btn btn-secondary btn-sm"    
                                onClick={handleDeleteField} 
                                >SI, acepto eliminar
                            </button> : null
                    }
                    
                    <button type="button" 
                            id="btn-cancel-delete-field"
                            className="btn btn-primary btn-sm" 
                            data-dismiss="modal">Cancelar
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default DialogConfirmDeleteField;