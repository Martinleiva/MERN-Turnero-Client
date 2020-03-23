import React, { Fragment } from 'react';
import Logo from '../../img/logo-turnero5.png';

const Header = () => {
    return ( 
        <Fragment>
            <div className="contenedor-header">
                <div className="row align-items-center">
                    <div className="col-sm-8">
                        <img src={Logo} class="rounded float-left logo" alt="..."/>
                    </div>
                    <div className="col-sm-2" >
                        <button type="button" className="btn btn-success btn-lg btn-block">Iniciar Sesión</button>
                    </div>
                    <div class="col-sm-2">
                        <button type="button" className="btn btn-success btn-lg btn-block">Registrarse</button>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Header;