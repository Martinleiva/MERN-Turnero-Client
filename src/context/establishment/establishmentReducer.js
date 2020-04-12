import {
    GET_ESTABLISHMENT_BY_OWNER, 
    GET_FIELDS_BY_ESTABLISHMENT,
    SET_SELECTED_ESTABLISHMENT,
    GET_TYPE_OF_SPORTS,
    GET_TYPE_OF_GROUNDS,
    GET_CATEGORIES,
    GET_SERVICES,
    CREATE_FIELD,
    ERROR_CREATING_FIELD,
    SET_SELECTED_FIELD,    
    CREATE_ESTABLISHMENT,
    ERROR_CREATING_ESTABLISHMENT,
    ADD_SERVICE,
    REMOVE_SERVICE
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
        case GET_CATEGORIES:
            return {
                ...state,
                listOfCategories : action.payload
            } 
        case GET_SERVICES:
            return {
                ...state,
                listOfServices : action.payload
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
        case SET_SELECTED_FIELD:
        case ERROR_CREATING_ESTABLISHMENT:    
            return {
                ...state,
                selected_field : action.payload
            } 
        case CREATE_ESTABLISHMENT:
            return {
                ...state,                
                alert_message : {msg :'Complejo creado con exito', category:'alert-success'}
            } 
        case ADD_SERVICE:
            return {
                ...state,
                listOfAddedServices : [...state.listOfAddedServices, action.payload]
            } 
        case REMOVE_SERVICE:
            return {
                ...state,
                listOfAddedServices : state.listOfAddedServices.filter(serviceId => serviceId !== action.payload)
            }                                       
        default :
            return state;        
    }

}