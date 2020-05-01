import React, { useReducer } from 'react';
import ReservationsContext from './reservationsContext';
import ReservationsReducer from './reservationsReducer';
import AxiosClient from '../../config/axios';

import {GET_RESERVATINOS} from '../types';

const ReservationsState = props => {
    return ( 
        <ReservationsContext.Provider
            value={{

            }}
        >
            {props.children}
        </ReservationsContext.Provider>
     );
}
 
export default ReservationsState;