import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';

import { 
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT
} from '../types';

//FALTA AGREGAR MENSAJE DE ERROR TRAIDO DEL BACK PARA DUEÑO Y CLIENTEEEEE!!

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Functions
    const userRegister = async data => {
        try {
            const response = await clienteAxios.post('/api/users', data);
            console.log(response);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            });
        }
    }


    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                userRegister
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;

