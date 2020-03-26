import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SHOW_ALERT,
    GET_USER
} from '../types';

export default (state, action) => {
    switch (action.type){     

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated : true,
                message : null,
                loading : false,
                logged_user : null               
            }
        case GET_USER:
            return {
                ...state,
                authenticated : true,
                message : null,
                loading : false,
                logged_user : action.payload
            }    
        case LOGIN_ERROR:
        case SHOW_ALERT:    
            return {
                ...state,
                authenticated : false,
                message : action.payload,
                loading : false,
                token : null,
                logged_user : null
            }    
        default :
            return state;
    }
}