import React from 'react';
import { Link } from 'react-router-dom';
import imagencliente from '../../assets/foto-header-futbol.jpg';
import imagenduenio from '../../assets/apreton-manos.jpg';

const SingUp = () => {
    return (
        <div className="div-form-signin">
            <div className="container">
                <div className="card-deck">
                        <div className="card polaroid">
                            <img className="card-img-top" src={imagencliente} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Vengo a alquilar una cancha!</h5>
                                <p className="card-text">
                                    De esta manera vas a poder acceder a miles de complejos deportivos 
                                    y poder reservar turnos de manera online y gratis para jugar con tus 
                                    amigos!
                                </p>
                                <div className="text-center">
                                    <Link to={'/singup-client'} type="button" className="btn btn-lg btn-success btn-block mb-4">
                                        Registrarme como Cliente
                                    </Link>
                                </div>
                            </div>
                        </div>
                    <div className="card polaroid">
                        <img className="card-img-top" src={imagenduenio} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Vengo a ofrecer mis servicios! </h5>
                            <p className="card-text">
                                Si sos dueño de un complejo deportivo vas a poder ofrecer todos
                                tus servicios y contar con una gestión de turnos de manera 
                                automática y eficiente!
                            </p>
                            <div className="text-center ">
                                <Link to={'/singup-duenio'} type="button" className="btn btn-lg btn-success btn-block mb-4">
                                    Registrarme como Dueño
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;