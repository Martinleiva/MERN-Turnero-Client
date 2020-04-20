import React, { useContext, Fragment } from 'react';
import FieldCard from './EstablishmentCard';

import EstablishmentContext from '../../../context/establishment/establishmentContext';

const FieldsList = () => {

    const establishmentContext = useContext(EstablishmentContext);
    const { establishments } = establishmentContext;


    return (
        <Fragment>
            {establishments.map(establishment => (

                <FieldCard key={establishment._id} establishment={establishment} /> 

            ))}
        </Fragment>
    );
};

export default FieldsList;