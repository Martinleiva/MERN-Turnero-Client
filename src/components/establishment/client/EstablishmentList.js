import React, { useContext, Fragment } from 'react';
import EstablishmentCard from './EstablishmentCard';

import EstablishmentContext from '../../../context/establishment/establishmentContext';

const FieldsList = () => {

    const establishmentContext = useContext(EstablishmentContext);
    const { establishments } = establishmentContext;


    return (
        <Fragment>
            {establishments.map(establishment => (

                <EstablishmentCard key={establishment._id} establishment={establishment} /> 

            ))}
        </Fragment>
    );
};

export default FieldsList;