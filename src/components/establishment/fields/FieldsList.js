import React, { useContext } from 'react';
import FieldCard from './FieldCard';

import EstablishmentContext from '../../../context/establishment/establishmentContext';

const FieldsList = () => {

    const establishmentContext = useContext(EstablishmentContext);
    const { fields } = establishmentContext;


    return (
        <ul>
            {fields.map(field => (

                <FieldCard key={field._id} field={field} /> 

            ))}
        </ul>
    );
};

export default FieldsList;