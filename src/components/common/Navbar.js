import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo-turnero5.png';

import AuthContext from '../../context/authentication/authContext';

const Navbar = () => {

    //Extract the information from authentication
    const authContext = useContext(AuthContext);
    const { user, setAuthenticatedUser, logOut } = authContext;    

    useEffect(() => {
        setAuthenticatedUser();
    }, []);

    return (
        <div> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-custom">
                <div className="container">
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
                                <a className="nav-link" href="#/">Reservas</a>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/my-establishments'}>Complejos</Link>
                            </li>                                                                                 
                        </ul>

                        <ul className="navbar-nav">
                           
                            <li className="nav-item nav-item-user-log">
                                <p>{user ? user.names : ''}</p>
                            </li>
                                                      
                            <li className="nav-item dropdown">                                    
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_554688468.jpg" width={45} height={40} className="rounded-circle" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-logo" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" onClick={() => logOut()} href="#">Mi Cuenta</a>
                                        <a className="dropdown-item" onClick={() => logOut()} href="#">Cerrar Sesión</a>                                        
                                    </div>
                            </li>
                        </ul>
                        
                    </div>                    
                </div>
            </nav>            
        </div>
    );
}
 
export default Navbar;