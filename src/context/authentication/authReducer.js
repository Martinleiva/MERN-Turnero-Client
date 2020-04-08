import { 
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT,
    SHOW_ALERT,
    UPDATE_USER
} from '../types';

export default (state, action) => {
    switch(action.type) {
        
        case UPDATE_USER:
        case REGISTER_SUCCESS: 
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated : true,
                message : null,
                loading : false,
                user : null               
            }
        
        case LOG_OUT:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                loading : false,
                message: action.payload
            }

        case GET_USER:
            return {
                ...state,
                authenticated : true,
                message : null,
                loading : false,
                user : action.payload
            }    

        case SHOW_ALERT:    
            return {
                ...state,
                authenticated : false,
                message : action.payload,
                loading : false,
                token : null,
                user : null
            }    
        default :
            return state;
    }
}