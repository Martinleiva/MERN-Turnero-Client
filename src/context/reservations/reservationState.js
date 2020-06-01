import React, { useReducer } from 'react';
import ReservationContext from './reservationContext';
import ReservationReducer from './reservationReducer';
import AxiosClient from '../../config/axios';
import moment from 'moment';
import 'moment/locale/es.js';

import { 
    GET_RESERVATIONS_FIELD, 
    ADD_RESERVATION,
    DELETE_RESERVATION } from '../types';

const ReservationState = props => {
    const initialState = {

        reservationsfield: []
    }

    //Create dispatch and state
    const [ state, dispatch ] = useReducer(ReservationReducer, initialState);

    //Functions 

    //Obtain reservations by field
    const getReservationsByField = async field_id => {

        try {

            const result = await AxiosClient.get('/api/reservation', {
                params: { field_id }
            })

            console.log(result);

            const reservations = [...result.data.reservations];

            reservations.map(reservation => {
                reservation.start = moment(reservation.start).toDate();
                reservation.end = moment(reservation.end).toDate();
                return(reservation);
            }); //Format dates for each reservation to display in calendar
    
            console.log(reservations);

            dispatch({
                type: GET_RESERVATIONS_FIELD,
                payload: reservations
            });
        } catch (error) {
            console.log(error);
        }
        
    }

    //Add reservation in field selected
    const addReservation = async (reservation) => {
        try {

            const result = await AxiosClient.post('/api/reservation', reservation);
            console.log(result);

            dispatch({
                type: ADD_RESERVATION,
                payload: reservation
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Delete a reservation
    const deleteReservation =  async id => {
        try {
            await AxiosClient.delete(`/api/reservation/${id}`);

            dispatch({
                type : DELETE_RESERVATION,
                payload : id 
            })
            
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <ReservationContext.Provider
            value={{
                //reservations: state.reservations,
                reservationsfield: state.reservationsfield,
                getReservationsByField,
                addReservation,
                deleteReservation
            }}
        >
            {props.children}
        </ReservationContext.Provider>
    );
}

export default ReservationState;