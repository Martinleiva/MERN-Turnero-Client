import React, { Fragment } from 'react';
import Header from '../common/Header';
import Container from './Container';


const DashOwner = () => {
    return (         
        <Fragment>
            <Header />
            <h1>Bienvenido Dueño</h1>
            <Container/>
        </Fragment>
     );
}
 
export default DashOwner;