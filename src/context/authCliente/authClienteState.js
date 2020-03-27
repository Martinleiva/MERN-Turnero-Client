import React, { useReducer } from 'react';
import AuthClienteContext from './authClienteContext';
import AuthClienteReducer from './authClienteReducer';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SHOW_ALERT,
    GET_USER
} from '../types';

const AuthClienteState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated : null,
        logged_user : null,
        message : null,
        loading : true
    }

    const [state, dispatch] = useReducer(AuthClienteReducer, initialState);

    const startSession = async data => {
        try {
            const res = await axiosClient.post('/api/auth', data);
            
            dispatch({
                type : LOGIN_SUCCESS,
                payload : res.data
            });

            setAuthenticatedUser();

        } catch (error) {            
            const alerta = {
                msg : error.response.data.msg, //get the backend's message error
                category : 'alert-error'
            }
            dispatch({
                type : LOGIN_ERROR,
                payload : alerta
            });            
        }
    }

    const setAuthenticatedUser = async () => {
        const token = localStorage.getItem('token');

        //First we need to have the token on the header
        if(token){ // the token contains the encripted id user 
            //save token on the header
            tokenAuth(token);
        }

        try {
             //call api in order to get the user
            const res = await axiosClient.get('/api/auth');
            
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

    const showAlert = alert => {
        dispatch({
            type : SHOW_ALERT,
            payload : alert
        });
    }


    return (
        <AuthClienteContext.Provider
            value = {{
                token : state.token,
                authenticated : state.authenticated,
                logged_user : state.logged_user,
                message : state.message,
                loading : state.loading,
                startSession,
                setAuthenticatedUser,
                showAlert
            }}
        >
            {props.children}
        </AuthClienteContext.Provider>
    )

}

export default AuthClienteState;

