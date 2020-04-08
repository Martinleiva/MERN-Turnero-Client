import { 
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT,
    SHOW_ALERT
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS: 
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated : true,
                message : null,
                loading : false,
                user : null,
                type_usr: action.payload.type_usr,                
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
                message: action.payload,
                type_usr: '',
            }

            case GET_USER:
                return {
                    ...state,
                    authenticated : true,
                    message : null,
                    loading : false,
                    user : action.payload,
                    type_usr: action.payload.user_type
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