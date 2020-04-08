import React, { useContext } from 'react';
import FieldCard from './FieldCard';

import FieldContext from '../../../context/fields/fieldContext';

const FieldsList = () => {

    const fieldContext = useContext(FieldContext);
    const { fields } = fieldContext;


    return (
        <ul>
            {fields.map(field => (

                <FieldCard key={field._id} field={field} /> 

            ))}
        </ul>
    );
};

export default FieldsList;