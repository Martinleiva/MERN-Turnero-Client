import React, { useReducer } from 'react';
import EstablishmentContext from './establishmentContext';
import EstablishmentReducer from './establishmentReducer';
import AxiosClient from '../../config/axios';

import {
    GET_ESTABLISHMENT_BY_OWNER,
    GET_FIELDS_BY_ESTABLISHMENT
} from '../types';

const EstablishmentState = props => {

    const initialState = {
        listOfStablishments : [],
        listOfFields : []
    }

    const [state, dispatch] = useReducer(EstablishmentReducer, initialState);

    //functions
    const getStablishmentByOwner = async () => {
        try {
            const results = await AxiosClient.get('/api/establishment-by-owner/');
            //console.log(results.data.establishments);

            dispatch({
                type : GET_ESTABLISHMENT_BY_OWNER,
                payload : results.data.establishments
            });

        } catch (error) {
            console.log(error);
        }
    }

    //Get fields by establishmentId
    const getFields = async establishmentId => {

        try {
            const fields = await AxiosClient.get(`/api/field/establishment/${establishmentId}`);
            console.log(fields.data);

            dispatch({
                type: GET_FIELDS_BY_ESTABLISHMENT,
                payload: fields.data.fields
            });
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <EstablishmentContext.Provider
            value={{
                listOfStablishments : state.listOfStablishments,
                listOfFields : state.listOfFields,
                getStablishmentByOwner,
                getFields
            }}
        >
            {props.children}
        </EstablishmentContext.Provider>

    )


}

export default EstablishmentState;