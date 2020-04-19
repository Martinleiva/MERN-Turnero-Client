import React, {useContext, useEffect, Fragment} from 'react';
import Logo from '../../img/logo-turnero5.png';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/authentication/authContext';

const NavbarOwner = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user, logOut } = authContext;

    return (
        <Fragment>
        <div> 
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            {/* <a className="navbar-brand" href="#/">Tu Cancha Ya!</a>
            <Link to={'/'}>
                            <img src={Logo} className="rounded float-left logo" alt="..."/>
                        </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#/">Ir al inicio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#/">Turnos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/">Mi cuenta</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => logOut()}  href="#/">Cerrar sesion</a>                            
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control form-control-lg mx-2" type="text" placeholder="Buscar por deporte" />
                    <button className="btn btn-secondary mx-4" type="submit">Buscar</button>
                </form>
            </div>
        </nav>*/}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <Link to={'/'}>
                <img src={Logo} className="rounded float-left logo" alt="..."/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <h4 className="mx-auto">Bienvenido {user ? user.names : ''}</h4> */}
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Ir al Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Turnos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Complejos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cuenta</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" onClick={() => logOut()}  href="#/">Cerrar sesion</a>                            
                    </li>
                </ul>
                {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control form-control-lg mx-2" type="text" placeholder="Buscar por deporte" />
                <button class="btn btn-secondary mx-4" type="submit">Buscar</button>
                </form> */}
            </div>
        </nav>            
    </div>
    </Fragment>
    );
}
 
export default NavbarOwner;