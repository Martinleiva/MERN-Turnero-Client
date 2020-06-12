import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ModalCalendar from './ModalCalendar';

import ModalContext from '../../../context/modal/modalContext';
import EstablishmentContext from '../../../context/establishment/establishmentContext';

const ModalReservation = () => {

    const modalContext = useContext(ModalContext);
    const { show, handleShow } = modalContext;

    const establishmentContext = useContext(EstablishmentContext); 
    const { selected_stablishment } = establishmentContext;

    return (
        <>
            <Modal show={show} onHide={handleShow} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {selected_stablishment ? selected_stablishment.name : '' }
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <ModalCalendar />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalReservation;