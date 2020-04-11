import React, { Fragment } from 'react';
import Header from '../common/Header';
import Container from './Container';
import NavbarOwner from '../common/NavbarOwner';
import ContainerOwner from '../usuarios/ContainerOwner';


const DashOwner = () => {
    return (         
        <Fragment>
            <NavbarOwner />
            
            <ContainerOwner />
              
        </Fragment>
     );
}
 
export default DashOwner;