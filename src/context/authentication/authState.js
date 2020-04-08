import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import { 
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT
} from '../types';


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
        loading: true,
        type_usr: ''
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

            //Get user 
            setAuthenticatedUser();
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

    // Return the authenticated user
    const setAuthenticatedUser = async () => {
        const token = localStorage.getItem('token');

        //First we need to have the token on the header
        if(token){ // the token contains the encripted id user 
            //save token on the header
            tokenAuth(token);
        }

        try {
                //call api in order to get the user
            const res = await clienteAxios.get('/api/auth');

            dispatch({
                type : GET_USER,
                payload : res.data.user
            });

        } catch (error) {
            dispatch({
                type : LOGIN_ERROR
            });            
        }       
    }

    const startSession = async data => {
        try {
            const res = await clienteAxios.post('/api/auth', data);
            dispatch({
                type : LOGIN_SUCCESS,
                payload : res.data
            });

            setAuthenticatedUser();

        } catch (error) {            
            const alert = {
                msg : error.response.data.msg, //get the backend's message error
                category : 'alert-danger'
            }
            dispatch({
                type : LOGIN_ERROR,
                payload : alert
            });            
        }
    }

    // Log out user 
    const logOut = () => {
        dispatch({
            type: LOG_OUT
        });
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                type_usr: state.type_usr,
                userRegister,
                setAuthenticatedUser,
                startSession,
                logOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;

