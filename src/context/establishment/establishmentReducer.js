import {
    GET_ESTABLISHMENTS,
    GET_ESTABLISHMENT_BY_OWNER, 
    GET_FIELDS_BY_ESTABLISHMENT,
    GET_FIELDS,
    SET_SELECTED_ESTABLISHMENT,
    GET_TYPE_OF_SPORTS,
    GET_TYPE_OF_GROUNDS,
    GET_CATEGORIES,
    GET_SERVICES,
    CREATE_FIELD,
    UPDATE_FIELD,
    ERROR_CREATING_FIELD,
    ERROR_DELETING_FIELD,
    ERROR_UPDATE_FIELD,
    SET_SELECTED_FIELD,    
    CREATE_ESTABLISHMENT,
    UPDATE_ESTABLISHMENT,
    ERROR_CREATING_ESTABLISHMENT,
    ERROR_UPDATING_ESTABLISHMENT,
    ADD_SERVICE,
    REMOVE_SERVICE,
    REMOVE_ALERT_MESSAGE
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_ESTABLISHMENTS:
            return {
                ...state,
                establishments: action.payload,
            }

        case GET_ESTABLISHMENT_BY_OWNER :
            return {
                ...state,
                listOfStablishments : action.payload,
                amount_of_establishment : action.payload.length
            }
        case GET_FIELDS_BY_ESTABLISHMENT :            
            return{
                ...state,
                listOfFields : action.payload,
                amount_of_field : action.payload.length
            }
        case GET_FIELDS:
            return {
                ...state,
                fields: action.payload
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
                alert_message : {msg :'Cancha creada con exito', category:'alert-success'}                
            } 
        case UPDATE_FIELD:            
        return {
            ...state,                
            alert_message : {msg : action.payload, category:'alert-success'},            
            amount_of_field : null
        }     
        case ERROR_CREATING_FIELD:
        case ERROR_DELETING_FIELD:
        case ERROR_UPDATE_FIELD:
        case ERROR_CREATING_ESTABLISHMENT:
        case ERROR_UPDATING_ESTABLISHMENT:        
            return {
                ...state,
                alert_message : action.payload
            }
        case SET_SELECTED_FIELD:                       
            return {
                ...state,
                selected_field : action.payload,
                alert_message : null
            } 
        case CREATE_ESTABLISHMENT:            
            return {
                ...state,                
                alert_message : {msg :'Complejo creado con exito', category:'alert-success'},                
                amount_of_field : null
            } 
        case UPDATE_ESTABLISHMENT:            
        return {
            ...state,                
            alert_message : {msg :'Complejo modificado con exito', category:'alert-success'},            
            amount_of_field : null
        }     
        case ADD_SERVICE:            
            return {
                ...state,
                listOfAddedServices : [...state.listOfAddedServices, action.payload],
                alert_message : null
            } 
        case REMOVE_SERVICE:            
            return {
                ...state,
                listOfAddedServices : state.listOfAddedServices.filter(serviceId => serviceId !== action.payload),
                alert_message : null
            }
        case REMOVE_ALERT_MESSAGE:
            return {
                ...state,
                alert_message : null
            }                                           
        default :
            return state;        
    }

}