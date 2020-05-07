
import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import reservationContext from '../../../context/reservations/reservationContext';
import establishmentContext from '../../../context/establishment/establishmentContext';
import AuthContext from '../../../context/authentication/authContext';

import { ChevronDoubleUp, Pencil, Plus } from 'react-bootstrap-icons';

import { withStyles } from '@material-ui/core/styles';
import FabGreen from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Add from '@material-ui/icons/Add';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const localizer = momentLocalizer(moment);

const ReservationTableOwner = () => {

    const reservationsContext = useContext(reservationContext);
    const { 
        reservationsfield,
        getReservationsByField,
        addReservation 
    } = reservationsContext;

    const establishmentsContext = useContext(establishmentContext);
    const { selected_field } = establishmentsContext;

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    //state of reservation
    const [reservation, setReservation] = useState({
        title: '',

    });

    const handleSelect = ({ start, end }) => {

        const nombre = window.prompt('Su nombre: ');

        if (nombre) {
            reservation.field_id = selected_field._id;
            setReservation({
                ...reservation,
                start,
                end,
                title: nombre,
                field_id: selected_field._id, // id de la cancha actual
                user_id: user._id //id del usuario actual
            });
            addReservation({
                ...reservation,
                start,
                end,
                title: nombre,
                field_id: selected_field._id, // id de la cancha actual
                user_id: user._id //id del usuario actual
            });
        }

        //Obtain reservations 
        getReservationsByField(selected_field._id);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        //var backgroundColor = '#' + event.hexColor;
        const style = {
            backgroundColor: 'red',
            borderRadius: '2px',
            opacity: 0.9,
            color: 'white',
            border: '1px solid black',
        };
        return {
            style: style
        };
    }

    useEffect(() => {
        getReservationsByField(selected_field._id);
    }, []);

    
    return ( 
        <Fragment>
        <div>
            <Calendar
                className="container"
                localizer={localizer}
                events={reservationsfield}
                selectable={true}
                defaultView={'week'}
                views={{ week: true, day: true }}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 450 }}
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={handleSelect}
                messages={{
                    next: "-->",
                    previous: "<--",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día"
                }}
                eventPropGetter={eventStyleGetter}
            >
            </Calendar>
        </div>
        </Fragment>
     );
}
 
export default ReservationTableOwner;