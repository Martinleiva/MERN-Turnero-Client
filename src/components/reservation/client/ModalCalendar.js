import React, { useState, useContext } from 'react';
import Spinner from '../../common/Spinner';
import { Tabs, Tab } from 'react-bootstrap';
import CalendarBody from './CalendarBody';

import EstablishmentContext from '../../../context/establishment/establishmentContext';

import ReservationContext from '../../../context/reservations/reservationContext';

const ModalCalendar = () => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { selected_field, listOfFields } = establishmentContext;

    const reservationContext = useContext(ReservationContext); 
    const { getReservationsByField } = reservationContext;

    const [active, setActive] = useState(selected_field._id);

    const handleActive = (fieldId) => {
        setActive(fieldId);

        getReservationsByField(fieldId);//Filter reservations

    }

    return (
        <>
            {
                listOfFields.length === 0 ?
                    <Spinner />
                :
                <Tabs 
                    activeKey={active} 
                    id="controlled-tab-example"
                    onSelect={(fieldId) => handleActive(fieldId)}
                >
                    {
                        listOfFields.map((field) => (
                            <Tab 
                                eventKey={field._id} 
                                title={field.name}
                                key={field._id}
                            >
                                <CalendarBody />
                            </Tab>
                        ))
                    }
                </Tabs>
            }
        </>
    );
};

export default ModalCalendar;