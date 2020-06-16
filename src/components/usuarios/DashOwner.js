import React, { Fragment } from 'react';
import Header from '../common/Header';
import ContainerOwner from './ContainerOwner';
import Footer from '../inicio/Footer';

const DashOwner = () => {
    return (         
        <Fragment>
            <Header />
            <h1>Bienvenido Dueño</h1>
            <Footer />
        </Fragment>
     );
}
 
export default DashOwner;