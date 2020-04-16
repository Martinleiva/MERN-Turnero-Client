import React, { Fragment } from 'react';
import Header from '../common/Header';
import Footer from '../inicio/Footer';
import Container from './Container';

const DashClient = () => {
    return ( 
        <Fragment>
            <Header />
            <Container/>
            <Footer />
        </Fragment>
     );
}
 
export default DashClient;