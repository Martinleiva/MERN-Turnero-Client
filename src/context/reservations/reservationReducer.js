import { GET_RESERVATIONS_FIELD, ADD_RESERVATION } from '../types';

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

        default:
            return state;
    }
}