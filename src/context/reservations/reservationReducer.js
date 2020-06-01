import { 
    GET_RESERVATIONS_FIELD, 
    ADD_RESERVATION,
    DELETE_RESERVATION } from '../types';

export default (state, action) => {
    switch (action.type) {
        
        case GET_RESERVATIONS_FIELD: 
            return {
                ...state,
                reservationsfield: action.payload
            }

        case ADD_RESERVATION:
            return {
                ...state,
                reservationsfield: [...state.reservationsfield, action.payload]
            }
        case DELETE_RESERVATION:
            return {
                ...state,
                reservationsfield: state.reservationsfield.filter(reservation => reservation._id !== action.payload)
            }

        default:
            return state;
    }
}