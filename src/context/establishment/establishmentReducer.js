import {
    GET_ESTABLISHMENT_BY_OWNER, 
    GET_FIELDS_BY_ESTABLISHMENT,
    SET_SELECTED_ESTABLISHMENT,
    GET_TYPE_OF_SPORTS,
    GET_TYPE_OF_GROUNDS,
    CREATE_FIELD,
    ERROR_CREATING_FIELD
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
        case SET_SELECTED_ESTABLISHMENT:
            return {
                ...state,
                selected_stablishment : action.payload
            }
        case GET_TYPE_OF_SPORTS:
            return {
                ...state,
                listOfTypesSports : action.payload
            }
        case GET_TYPE_OF_GROUNDS:
            return {
                ...state,
                listOfTypesGrounds : action.payload
            }
        case CREATE_FIELD:
            return {
                ...state,
                //listOfFields : [...state.listOfFields, action.payload],
                alert_message : {msg :'Cancha creada con exito', category:'alert-success'}
            } 
        case ERROR_CREATING_FIELD:
            return {
                ...state,
                alert_message : action.payload
            }                  
        default :
            return state;        
    }

}