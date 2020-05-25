import React, { useReducer } from 'react';
import modalReducer from './modalReducer';
import modalContext from './modalContext';

import { HANDLE_MODAL } from '../types';

const ModalState = ( props ) => {

    const initialState = {
        show: false,
    }

    const [ state, dispatch ] = useReducer(modalReducer, initialState);

    const handleShow = () => {
        dispatch({
            type: HANDLE_MODAL,
        });

    }

    return (
        <modalContext.Provider
            value={{
                show: state.show,
                handleShow
            }}
        >
            {props.children}
        </modalContext.Provider>
    );
};

export default ModalState;