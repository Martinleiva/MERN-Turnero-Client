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
    GET_CATEGORIES,
    GET_SERVICES,
    CREATE_FIELD,
    ERROR_CREATING_FIELD,
    ERROR_DELETING_FIELD,
    REMOVE_ALERT_MESSAGE,
    SET_SELECTED_FIELD,
    CREATE_ESTABLISHMENT,
    ERROR_CREATING_ESTABLISHMENT,
    ADD_SERVICE,
    REMOVE_SERVICE
} from '../types';

const EstablishmentState = props => {

    const initialState = {
        listOfStablishments : [],
        listOfFields : [],
        listOfTypesSports : [],
        listOfTypesGrounds : [],
        listOfCategories : [],
        listOfServices : [],
        listOfAddedServices : [],
        selected_stablishment : null,
        selected_field : null,
        alert_message : null
    }

    const [state, dispatch] = useReducer(EstablishmentReducer, initialState);

    //functions
    const getStablishmentByOwner = async () => {
        try {
            const results = await AxiosClient.get('/api/establishment-by-owner/');                        
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

    const getCategories = async () => {
        try {
            const categories = await AxiosClient.get('/api/category');            
            dispatch({
                type : GET_CATEGORIES,
                payload : categories.data.categories
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getServices = async () => {
        try {
            const services = await AxiosClient.get('/api/service');            
            dispatch({
                type : GET_SERVICES,
                payload : services.data.services
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

    const setSelectedField = async (field) => {
        try {                                    
            dispatch({
                type : SET_SELECTED_FIELD,
                payload : field
            });
        } catch(error){
            console.log(error);
        }
    }

    const deleteField = async field => {
        try {
            const response = await AxiosClient.delete(`/api/field/${field._id}`);
            console.log(response);
            //update list of field
            getFields(field.establishment);                        
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger'
            }
            dispatch({
                type : ERROR_DELETING_FIELD,
                payload : alert              
            })
            console.log(error);
        }
    }
    
    const createEstablishment = async data => {
        try {
            const response = await AxiosClient.post('/api/establishment/', data);
            console.log(response.data);

            //update list of field
            getStablishmentByOwner(data.establishment);

            dispatch({
                type : CREATE_ESTABLISHMENT,
                payload : response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger'
            }
            dispatch({
                type : ERROR_CREATING_ESTABLISHMENT,
                payload : alert              
            })
            console.log(error);
        }
    }

    const addService = serviceId => {
        try {
            dispatch({
                type: ADD_SERVICE,
                payload : serviceId
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removeService = serviceId => {
        try {
            dispatch({
                type: REMOVE_SERVICE,
                payload : serviceId
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removeAlertMessage = () => {
        dispatch({
            type : REMOVE_ALERT_MESSAGE
        })
    }

    return (
        <EstablishmentContext.Provider
            value={{
                listOfStablishments : state.listOfStablishments,
                listOfFields : state.listOfFields,
                selected_stablishment : state.selected_stablishment,
                selected_field : state.selected_field,
                listOfTypesSports : state.listOfTypesSports,
                listOfTypesGrounds : state.listOfTypesGrounds,
                listOfCategories : state.listOfCategories,
                listOfServices : state.listOfServices,
                listOfAddedServices : state.listOfAddedServices,
                alert_message : state.alert_message,
                getStablishmentByOwner,
                getFields,
                setSelectedEstablishment,
                getTypesOfSports,
                getTypesOfGrounds,
                getCategories,
                getServices,
                createField,
                setSelectedField,
                deleteField,
                createEstablishment,
                addService,
                removeService,
                removeAlertMessage
            }}
        >
            {props.children}
        </EstablishmentContext.Provider>

    )


}

export default EstablishmentState;