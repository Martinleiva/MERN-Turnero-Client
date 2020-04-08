import React, { useReducer } from 'react';
import EstablishmentContext from './establishmentContext';
import EstablishmentReducer from './establishmentReducer';
import AxiosClient from '../../config/axios';

import {
    GET_ESTABLISHMENT_BY_OWNER,
    GET_FIELDS_BY_ESTABLISHMENT,
    SET_SELECTED_ESTABLISHMENT,
    GET_TYPE_OF_SPORTS,
    GET_TYPE_OF_GROUNDS,
    CREATE_FIELD,
    ERROR_CREATING_FIELD
} from '../types';

const EstablishmentState = props => {

    const initialState = {
        listOfStablishments : [],
        listOfFields : [],
        listOfTypesSports : [],
        listOfTypesGrounds : [],
        selected_stablishment : null,
        alert_message : null
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
            //console.log(fields.data);

            dispatch({
                type: GET_FIELDS_BY_ESTABLISHMENT,
                payload: fields.data.fields
            });            
            
        } catch (error) {
            console.log(error);
            
        }
    }    

    const setSelectedEstablishment = establishment => {
        dispatch({
            type : SET_SELECTED_ESTABLISHMENT,
            payload : establishment
        })
    }

    const getTypesOfSports = async () => {
        try {
            const typesOfSports = await AxiosClient.get('/api/sport-type');            
            dispatch({
                type : GET_TYPE_OF_SPORTS,
                payload : typesOfSports.data.sportTypes
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getTypesOfGrounds = async () => {
        try {
            const typesOfGrounds = await AxiosClient.get('/api/ground-type');            
            dispatch({
                type : GET_TYPE_OF_GROUNDS,
                payload : typesOfGrounds.data.groundTypes
            })
        } catch (error) {
            console.log(error);
        }
    }

    const createField = async data => {
        try {
            const response = await AxiosClient.post('/api/field/', data);
            console.log(response.data);

            //update list of field
            getFields(data.establishment);

            dispatch({
                type : CREATE_FIELD,
                payload : response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger'
            }
            dispatch({
                type : ERROR_CREATING_FIELD,
                payload : alert              
            })
            console.log(error);
        }
    }

    return (
        <EstablishmentContext.Provider
            value={{
                listOfStablishments : state.listOfStablishments,
                listOfFields : state.listOfFields,
                selected_stablishment : state.selected_stablishment,
                listOfTypesSports : state.listOfTypesSports,
                listOfTypesGrounds : state.listOfTypesGrounds,
                alert_message : state.alert_message,
                getStablishmentByOwner,
                getFields,
                setSelectedEstablishment,
                getTypesOfSports,
                getTypesOfGrounds,
                createField
            }}
        >
            {props.children}
        </EstablishmentContext.Provider>

    )


}

export default EstablishmentState;