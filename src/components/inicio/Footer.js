import React from 'react';
import Logo from '../../img/logo-turnero5.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        
            <div className="estilo-footer footer-margen">
                <div className="row justify-content-md-center logo-footer">
                    <div className="col-md-auto">
                        <img src={Logo} className="mx-auto d-block" alt="..."></img>
                    </div>
                </div>
            
                <div className="row justify-content-sm-center">
                    <div className="col col-sm-auto">
                        <ul className="list-estilo">
                            <li className="">Teléfono</li>
                            <li className="">Domicilio</li>
                            <li className="">SFVC, Catamarca, Argentina</li>
                            <li className="">info@tucanchaya.com</li>
                        </ul>

                    </div>
                    <div className="col-sm-auto">
                    <p className="nombre-app">Tu Cancha Ya!</p>
                    <ul className="list-estilo">
                            <li className=""><Link to={'#'}>Terminos y Condiciones</Link></li>
                            <li className=""><Link to={'#'}>Politica de cookies</Link></li>
                            <li className=""><Link to={'#'}>Equipo de Desarrollo</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
        
     );
}
 
export default Footer;