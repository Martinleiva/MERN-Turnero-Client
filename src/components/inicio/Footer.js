import React from 'react';
import Logo from '../../img/logo-turnero5.png';
const Footer = () => {
    return ( 
        
            <div className="estilo-footer footer-margen">
                <div className="row justify-content-md-center logo-footer">
                    <div className="col-lg-2">
                        <img src={Logo}></img>
                    </div>
                </div>
            
                <div className="row justify-content-md-center align-items-end">
                    <div className="col col-lg-3 offset-md-2">
                        <ul className="list-estilo">
                            <li className="">Teléfono</li>
                            <li className="">Domicilio</li>
                            <li className="">SFVC, Catamarca, Argentina</li>
                            <li className="">info@tucanchaya.com</li>
                        </ul>

                    </div>
                    <div className="col col-lg-3 ">
                    <p className="nombre-app">Tu Cancha Ya!</p>
                    <ul className="list-estilo">
                            <li className=""><a href="#">Terminos y Condiciones</a></li>
                            <li className=""><a href="#">Politica de cookies</a></li>
                            <li className=""><a href="#">Equipo de Desarrollo</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        
     );
}
 
export default Footer;