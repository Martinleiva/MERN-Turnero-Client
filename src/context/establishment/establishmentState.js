import React, { useReducer } from 'react';
import EstablishmentContext from './establishmentContext';
import EstablishmentReducer from './establishmentReducer';
import AxiosClient from '../../config/axios';

import {
    GET_ESTABLISHMENTS,
    GET_ESTABLISHMENT_BY_OWNER,
    GET_ESTABLISHMENT,
    GET_FIELDS_BY_ESTABLISHMENT,
    GET_FIELDS,
    SET_SELECTED_ESTABLISHMENT,
    GET_TYPE_OF_SPORTS,
    GET_TYPE_OF_GROUNDS,
    GET_CATEGORIES,
    GET_SERVICES,
    CREATE_FIELD,
    UPDATE_FIELD,
    ERROR_CREATING_FIELD,
    ERROR_DELETING_FIELD,
    ERROR_UPDATE_FIELD,
    REMOVE_ALERT_MESSAGE,
    SET_SELECTED_FIELD,
    CREATE_ESTABLISHMENT,
    UPDATE_ESTABLISHMENT,
    ERROR_CREATING_ESTABLISHMENT,
    ERROR_UPDATING_ESTABLISHMENT,
    ADD_SERVICE,
    REMOVE_SERVICE,
    GET_FIELDS_SEARCH,
    CLEAN_ESTABLISHMENT_DATA
} from '../types';

const EstablishmentState = props => {

    const initialState = {
        listOfStablishments : [],
        listOfFields : [], //list of field by stablishment
        listOfSearchedFields : null, //list of field that was found by user search
        listOfTypesSports : [],
        listOfTypesGrounds : [],
        listOfCategories : [],
        listOfServices : [],
        listOfAddedServices : [],
        fields: [], //list of fields that will be shown to registed clients...
        establishments: [],
        amount_of_establishment : null,
        amount_of_field : null,
        selected_stablishment : null,
        selected_field : null,
        alert_message : null
    }

    const [state, dispatch] = useReducer(EstablishmentReducer, initialState);

    //functions

    const getAllEstablishments = async () => { //REPETIDA
        try {
            const response = await AxiosClient.get('/api/establishment');              
            dispatch({
                type : GET_ESTABLISHMENTS,
                payload : response.data.establishments
            });                        
        } catch (error) {
            console.log(error);
        }
    }

    const getStablishmentByOwner = async () => {
        try {
            const results = await AxiosClient.get('/api/establishment-by-owner/');                        
            dispatch({
                type : GET_ESTABLISHMENT,
                payload : results.data.establishments
            });                        
        } catch (error) {
            console.log(error);
        }
    }

    const getStablishment = async () => {
        try {
            const results = await AxiosClient.get('/api/establishment');                        
            dispatch({
                type : GET_ESTABLISHMENT,
                payload : results.data.establishments
            });                        
        } catch (error) {
            console.log(error);
        }
    }

    //Get fields by establishmentId
    const getFieldByStablishment = async establishmentId => {
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
    
    //Obtain fields
    const getFields = async () => {
        try {
            const res = await AxiosClient.get('/api/field');
            dispatch({
                type: GET_FIELDS,
                payload: res.data.fields
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
            //update list of field
            getFieldByStablishment(data.establishment);

            dispatch({
                type : CREATE_FIELD,
                payload : response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger',
                error_type : ERROR_CREATING_FIELD
            }
            dispatch({
                type : ERROR_CREATING_FIELD,
                payload : alert              
            })
            console.log(error);
        }
    }

    const setSelectedField = (field) => {
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
            //update list of field
            getFieldByStablishment(field.establishment);                        
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger',
                error_type : ERROR_DELETING_FIELD
            }
            dispatch({
                type : ERROR_DELETING_FIELD,
                payload : alert              
            })
            console.log(error);
        }
    }

    const updateField = async (data, id) => {
        try {
            const response = await AxiosClient.put(`/api/field/${id}`, data);            
            //update list of field by establishment
            getFieldByStablishment(data.establishment);

            dispatch({
                type : UPDATE_FIELD,
                payload : response.data.msg
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger',
                error_type : ERROR_UPDATE_FIELD
            }
            dispatch({
                type : ERROR_UPDATE_FIELD,
                payload : alert              
            })
            console.log(error);
        }
    }
    
    const createEstablishment = async data => {
        try {
            const response = await AxiosClient.post('/api/establishment/', data);            
            //update list of field
            getStablishmentByOwner(data.establishment);

            dispatch({
                type : CREATE_ESTABLISHMENT,
                payload : response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger',
                error_type : ERROR_CREATING_ESTABLISHMENT
            }
            dispatch({
                type : ERROR_CREATING_ESTABLISHMENT,
                payload : alert              
            })
            console.log(error);
        }
    }

    const updateEstablishment = async (data, id) => {
        try {
            const response = await AxiosClient.put(`/api/establishment/${id}`, data);            
            //update list of field
            getStablishmentByOwner(data.establishment);

            dispatch({
                type : UPDATE_ESTABLISHMENT,
                payload : response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-danger',
                error_type : ERROR_UPDATING_ESTABLISHMENT
            }
            dispatch({
                type : ERROR_UPDATING_ESTABLISHMENT,
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

    //Functions for search requirements

    const getFieldsBySportType = async sportTypeId => {
        try {
            const resultado = await AxiosClient.get(`/api/field/sporttype/${sportTypeId}`);
            console.log(resultado.data);
            dispatch({
                type : GET_FIELDS_SEARCH,
                payload : resultado.data.fields
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getFieldsByFilters = async filters => {
        console.log('llamada a filter');
        try {
            const resultado = await AxiosClient.post(`/api/field/filter/`, filters);
            console.log(resultado);
            dispatch({
                type : GET_FIELDS_SEARCH,
                payload : resultado.data.filteredFields
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    /*This function is for clean all data belong to establishment. It is import when the user log out */
    const cleanEstablishmentData = () => {
        dispatch({
            type : CLEAN_ESTABLISHMENT_DATA            
        })
    }

    return (
        <EstablishmentContext.Provider
            value={{
                listOfStablishments : state.listOfStablishments,
                listOfFields : state.listOfFields,
                fields : state.fields,
                establishments: state.establishments,
                listOfSearchedFields: state.listOfSearchedFields,
                selected_stablishment : state.selected_stablishment,
                selected_field : state.selected_field,
                listOfTypesSports : state.listOfTypesSports,
                listOfTypesGrounds : state.listOfTypesGrounds,
                listOfCategories : state.listOfCategories,
                listOfServices : state.listOfServices,
                listOfAddedServices : state.listOfAddedServices,
                alert_message : state.alert_message,
                amount_of_establishment : state.amount_of_establishment,
                amount_of_field: state.amount_of_field,
                getAllEstablishments,
                getStablishmentByOwner,
                getStablishment,
                getFieldByStablishment,
                getFields,
                setSelectedEstablishment,
                getTypesOfSports,
                getTypesOfGrounds,
                getCategories,
                getServices,
                createField,
                setSelectedField,
                deleteField,
                updateField,
                createEstablishment,
                updateEstablishment,
                addService,
                removeService,
                removeAlertMessage,
                getFieldsBySportType,
                getFieldsByFilters,
                cleanEstablishmentData
            }}
        >
            {props.children}
        </EstablishmentContext.Provider>

    )


}

export default EstablishmentState;