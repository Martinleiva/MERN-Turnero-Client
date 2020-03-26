import React, { Fragment } from 'react';
import Logo from '../../img/logo-turnero5.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <Fragment>
            <div className="contenedor-header">
                <div className="row align-items-center">
                    <div className="col margen-btn">
                        <Link to={'/'}>
                            <img src={Logo} className="rounded float-left logo" alt="..."/>
                        </Link>
                    </div>
                    <div className="col-md-auto" >
                        <button type="button" className="btn btn-success btn-lg btn-block">Iniciar Sesión</button>
                    </div>
                    <div class="col col-md-auto">
                        <Link to={'/singup'} type="button" className="btn btn-lg btn-success btn-block">
                            Registrarse!
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Header;