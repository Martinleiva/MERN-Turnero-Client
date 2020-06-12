import React, { useState, useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import reservationContext from '../../../context/reservations/reservationContext';
import establishmentContext from '../../../context/establishment/establishmentContext';
import AuthContext from '../../../context/authentication/authContext';


const localizer = momentLocalizer(moment);

const CalendarBody = () => {

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

        console.log(moment(Date.now()).format('LL'));
        console.log(localizer);

        if (start > moment(Date.now()).toDate()) {
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
        } else {
            window.alert('No se puede reservar antes de la hora actual');
            return;
        }
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        //var backgroundColor = '#' + event.hexColor;

        const style = {
            backgroundColor: '#10850e',
            borderRadius: '2px',
            opacity: 0.9,
            color: 'white',
            border: '1px solid black',
        };
        return {
            style
        };
    }

    return (
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
                onSelectEvent={event => alert("Reservado por: " + event.title)}
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
            />
        </div>
    );
};

export default CalendarBody;