import { GET_FIELDS } from '../types';

export default (state, action) => {
    switch(action.type) {

        case GET_FIELDS:
            return {
                ...state,
                fields: action.payload
            }

        default:
            return state;
    }
}