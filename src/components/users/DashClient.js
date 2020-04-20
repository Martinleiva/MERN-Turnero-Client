import React, { Fragment } from 'react';
import Footer from '../inicio/Footer';
import Container from './Container';
import Header from '../common/Header';

const DashClient = () => {
    return ( 
        <Fragment>
            <Header/>
            <Container/>
            <Footer />
        </Fragment>
     );
}
 
export default DashClient;