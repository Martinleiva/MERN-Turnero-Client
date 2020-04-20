import React, { useContext } from 'react';
import EstablishmentContext from '../../../context/establishment/establishmentContext';

const ModalNewRes = () => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { selected_stablishment }= establishmentContext;

    return (
        <div className="modal fade" id="modal_new_reservation" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {selected_stablishment ? selected_stablishment.name : '' }
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalNewRes;