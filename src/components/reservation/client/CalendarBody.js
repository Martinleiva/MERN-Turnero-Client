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
                        fieldName: selected_field.name, 
                        establishment: selected_stablishment.name,
                        user_id: user._id, //id del usuario actual
                        state: 'Pendiente'
                    });

                    addReservation({
                        ...reservation,
                        start,
                        end,
                        title: user.names,
                        field_id: selected_field._id, // id de la cancha actual
                        fieldName: selected_field.name,
                        establishment: selected_stablishment.name,
                        user_id: user._id, //id del usuario actual
                        state: 'Pendiente'
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

        if (event.user_id === user._id && event.state === 'Pendiente') {
            const style = {
                backgroundColor: '#3085d6',
                borderRadius: '2px',
                opacity: 0.9,
                color: 'white',
                border: '1px solid black',
            };
            return {
                style
            };
        } else if (event.user_id === user._id && event.state === 'Aceptado') {
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
        } else {
            const style = {
                backgroundColor: 'red',
                borderRadius: '2px',
                opacity: 0.9,
                color: 'white',
                border: '1px solid black',
            };
            return {
                style
            };
        }
    }

    const handleSelectEvent = event => {

        if(event.user_id === user._id) {
            let hourCount = dates.diff(event.start, event.end, "hours", true);

            Swal.fire({
                title: 'Información de la Reserva',
                html: `
                    <div class="text-left pl-5 pt-4" style="border: 1px solid #3085d6">
                        <p>
                            <b>Fecha:</b> ${moment(event.start).format('LL')}    
                        </p>
                        <p>
                            <b>Horario del turno:</b> De ${moment(event.start).format('LT')} a ${moment(event.end).format('LT')} <b style="color: #10850e">(${hourCount} hs)</b>
                        </p>
                        <p>
                            <b>A nombre de:</b> 
                            <span style="color: #3085d6">
                                <b>${event.title}</b>
                            <span>
                        </p>
                        <p>
                            <b>Complejo:</b> 
                            <span style="color: #10850e">
                                <b>${event.establishment}</b>
                            <span>
                        </p>
                        <p>
                            <b>Cancha:</b>
                            <span style="color: #10850e">
                                <b>${event.fieldName}</b>
                            <span>
                        </p>
                        <p>
                            <b>Estado:</b>
                            <span style="color: #3085d6; font-weight: bold">
                                <b>${event.state}</b>
                            <span>
                        </p>
                    </div>
                `,
                icon: 'info',
                confirmButtonText: 'Ok!',
            })
        } else {
            let hourCount = dates.diff(event.start, event.end, "hours", true);

            Swal.fire({
                title: 'Información de la Reserva',
                html: `
                    <div class="text-left pl-5 pt-4" style="border: 1px solid #3085d6">
                        <p>
                            <b>Fecha:</b> ${moment(event.start).format('LL')}    
                        </p>
                        <p>
                            <b>Horario del turno:</b> De ${moment(event.start).format('LT')} a ${moment(event.end).format('LT')} <b style="color: #10850e">(${hourCount} hs)</b>
                        </p>
                        <p>
                            <b>A nombre de:</b> 
                            <span style="color: #3085d6">
                                <b>${event.title}</b>
                            <span>
                        </p>
                        <p>
                            <b>Complejo:</b> 
                            <span style="color: #10850e">
                                <b>${event.establishment}</b>
                            <span>
                        </p>
                        <p>
                            <b>Cancha:</b>
                            <span style="color: #10850e">
                                <b>${event.fieldName}</b>
                            <span>
                        </p>
                        <p>
                            <b>Estado:</b>
                            <span style="color: #3085d6; font-weight: bold">
                                <b>${event.state}</b>
                            <span>
                        </p>
                    </div>
                `,
                icon: 'info',
                confirmButtonText: 'Ok!',
            })
        }
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
                onSelectEvent={event => handleSelectEvent(event)}
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