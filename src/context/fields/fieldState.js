import React, { useReducer } from 'react';
import fieldContext from './fieldContext';
import fieldReducer from './fieldReducer';
import axiosClient from '../../config/axios';

import { GET_FIELDS } from '../types';

const FieldState = props => {
    const initialState = {
        fields: []
    }

    //Dispatch to run the actions
    const [state, dispatch] = useReducer(fieldReducer, initialState);

    // Functions for the CRUD

    //Obtain fields
    const getFields = async () => {
        try {
            const res = await axiosClient.get('/api/field');
            console.log(res);
            dispatch({
                type: GET_FIELDS,
                payload: res.data.fields
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <fieldContext.Provider
            value={{
                fields: state.fields,
                getFields
            }}
        >
            {props.children}
        </fieldContext.Provider>
    );
}

export default FieldState;