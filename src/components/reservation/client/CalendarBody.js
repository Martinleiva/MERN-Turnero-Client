import React, { useState, useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import * as dates from 'date-arithmetic';
import Swal from 'sweetalert2';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import reservationContext from '../../../context/reservations/reservationContext';
import establishmentContext from '../../../context/establishment/establishmentContext';
import AuthContext from '../../../context/authentication/authContext';

import MyWeek from './MyWeek';

const localizer = momentLocalizer(moment);

const CalendarBody = () => {

    const reservationsContext = useContext(reservationContext);
    const { 
        reservationsfield,
        getReservationsByField,
        addReservation 
    } = reservationsContext;

    const establishmentsContext = useContext(establishmentContext);
    const { selected_field, selected_stablishment } = establishmentsContext;

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    //state of reservation
    const [reservation, setReservation] = useState({
        title: '',
    });

    const handleSelect = ({ start, end }) => {

        if (start > moment(Date.now()).toDate()) {

            let hourCount = dates.diff(start, end, "hours", true);

            Swal.fire({
                title: '¿Confirmar reserva?',
                html: `
                    <div class="text-left pl-5 pt-4" style="border: 1px solid #3085d6">
                        <p>
                            <b>Fecha:</b> ${moment(start).format('LL')}    
                        </p>
                        <p>
                            <b>Horario del turno:</b> De ${moment(start).format('LT')} a ${moment(end).format('LT')} <b style="color: #10850e">(${hourCount} hs)</b>
                        </p>
                        <p>
                            <b>A nombre de:</b> 
                            <span style="color: #3085d6">
                                <b>${user.names}</b>
                            <span>
                        </p>
                        <p>
                            <b>Complejo:</b> 
                            <span style="color: #10850e">
                                <b>${selected_stablishment.name}</b>
                            <span>
                        </p>
                        <p>
                            <b>Cancha:</b>
                            <span style="color: #10850e">
                                <b>${selected_field.name}</b>
                            <span>
                        </p>
                    </div>
                `,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, confirmar!',
                cancelButtonText: "Cancelar"
            }).then((result) => {


                if (result.value) {
                    Swal.fire(
                        'Reservado!',
                        'Tu reserva fué registrada en estado PENDIENTE!',
                        'success'
                    )

                    reservation.field_id = selected_field._id;

                    setReservation({
                        ...reservation,
                        start,
                        end,
                        title: user.names,
                        field_id: selected_field._id, // id de la cancha actual
                        user_id: user._id //id del usuario actual
                    });

                    addReservation({
                        ...reservation,
                        start,
                        end,
                        title: user.names,
                        field_id: selected_field._id, // id de la cancha actual
                        user_id: user._id //id del usuario actual
                    });

                    //Obtain reservations 
                    getReservationsByField(selected_field._id);
                } else {
                    return;
                }
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes reservar antes de la hora actual!',
            })

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
                views={{ week: MyWeek, day: true }}
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
            />
        </div>
    );
};

export default CalendarBody;