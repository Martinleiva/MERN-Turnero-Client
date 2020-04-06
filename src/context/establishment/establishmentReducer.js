import {
    GET_ESTABLISHMENT_BY_OWNER, 
    GET_FIELDS_BY_ESTABLISHMENT
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_ESTABLISHMENT_BY_OWNER :
            return {
                ...state,
                listOfStablishments : action.payload
            }
        case GET_FIELDS_BY_ESTABLISHMENT :
            return{
                ...state,
                listOfFields : action.payload
            }
        default :
            return state;        
    }

}