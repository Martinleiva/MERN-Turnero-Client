import React, { Fragment } from 'react';
import Logo from '../../img/logo-turnero5.png';
import { Link } from 'react-router-dom';

const Header = ({ user, logOut, cleanEstablishmentData }) => {

    const handleLogOut = () => {
        cleanEstablishmentData();
        logOut();
    }

    return ( 
        <Fragment>
            <div className="contenedor-header">
                <div className="row align-items-center">
                    <div className="col margen-btn">
                        <Link to={'/'}>
                            <img src={Logo} className="rounded float-left logo" alt="..."/>
                        </Link>
                    </div>
                    {
                        !user ?
                            <Fragment>
                                <div className="col-md-auto" >
                                    <Link to={'/login'} type="button" className="btn btn-lg btn-success btn-block">
                                        Iniciar Sesión
                                    </Link>
                                </div>
                                <div className="col col-md-auto">
                                    <Link to={'/singup'} type="button" className="btn btn-lg btn-success btn-block">
                                        Registrarse!
                                    </Link>
                                </div>
                            </Fragment>
                        :   <ul className="navbar-nav nav-bar-log-user">
                           
                                <li className="nav-item nav-item-user-log">
                                    <p>{user ? user.names : ''}</p>
                                </li>
                                                        
                                <li className="nav-item dropdown">                                    
                                        <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_554688468.jpg" width={45} height={40} className="rounded-circle" alt="perfil" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-logo" aria-labelledby="dropdownMenuButton">
                                        {/*eslint-disable-next-line*/}
                                        <a className="dropdown-item" onClick={handleLogOut} href="!#">Mi Cuenta</a>
                                            {/*eslint-disable-next-line*/}
                                            <a className="dropdown-item" onClick={handleLogOut} href="#">Cerrar Sesión</a>                                        
                                        </div>
                                </li>
                            </ul>
                    }
                    
                </div>
            </div>
        </Fragment>
     );
}
 
export default Header;