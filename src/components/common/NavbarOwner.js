import React, { Fragment, useContext, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/authentication/authContext';

const NavbarOwner = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user, logOut ,setAuthenticatedUser} = authContext;

    useEffect(() => {
        setAuthenticatedUser();
    }, []);


    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#/">Tu Cancha Ya!</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item dropdown">

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" onClick={() => logOut()} href="#">Cerrar Sesión</a>
                            </div>
                           
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_554688468.jpg" width={45} height={40} className="rounded-circle" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" onClick={() => logOut()} href="#">Cerrar Sesión</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink exact to={'/'} className="nav-link" activeClassName="nav-link active">
                                Ir al inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'/dash-owner'} className="nav-link" activeClassName="nav-link active">
                                Complejos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'/dash-owner/my-account'} className="nav-link" activeClassName="nav-link active">
                                Mi cuenta
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'#/'} className="nav-link" onClick={() => logOut()} activeClassName="nav-link active">
                                Cerrar sesión
                            </NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control form-control-lg mx-2" type="text" placeholder="Buscar por deporte" />
                        <button className="btn btn-secondary mx-4" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default NavbarOwner;