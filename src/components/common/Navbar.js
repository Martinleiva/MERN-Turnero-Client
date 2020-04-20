import React, {useContext, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';

import AuthContext from '../../context/authentication/authContext';

const Navbar = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { logOut ,setAuthenticatedUser} = authContext;

    useEffect(() => {
        setAuthenticatedUser();
    }, []);

    return (
        <div> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <a className="navbar-brand" href="#">Tu Cancha Ya!</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to={'/'} className="nav-link" activeClassName="nav-link active">
                                Ir al inicio
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#/">Reservas</a>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/my-establishments'}>Complejos</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'#/'} className="nav-link" activeClassName="nav-link active">
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
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar por deporte" />
                        <button className="btn btn-secondary mx-4" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>            
        </div>
    );
}
 
export default Navbar;