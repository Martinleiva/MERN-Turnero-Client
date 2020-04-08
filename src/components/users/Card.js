import React from 'react';

const Card = () => {
    return ( 
        <div>
            <div className="card mb-3">
                <h1 className="card-header">F5 Futbol Evolution</h1>
                <div className="card-body">
                <h5 className="card-title">Lunes 30 de marzo (20:00 hs - cancha 3)</h5>
                <h6 className="card-subtitle text-muted">Av presidente castillo n° 255</h6>
                </div>
                <img style={{height: 250, width: '100%', display: 'block'}} src="https://civideportes.com.co/wp-content/uploads/2019/08/Cancha-de-f%C3%BAtbol-11-768x512.jpg" alt="Cancha de futbol" />
                <div className="card-body">
                <p className="card-text">Descripción del complejo Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Complejo: F5 / Cancha 3</li>
                <li className="list-group-item">Horario: 20:00 pm</li>
                <li className="list-group-item">Precio: $700 </li>
                <li className="list-group-item">Cancha 3: 7 jugadores, cesped sintetico, con luz.</li>
                <li className="list-group-item">Datos del complejo: Estacionamiento, baños y vestuarios, asador.</li>
                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-danger">CANCELAR RESERVA</button>
                </div>
                <div className="card-footer text-muted">
                    reservado el 28 de marzo
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h4 className="card-title">F5 Futbol Evolution</h4>
                <h6 className="card-subtitle mb-2 text-muted">fútbol - beach voley</h6>
                <p className="card-text">Direccion AV. presidente castillo n°255 - Catamarca</p>
                <a href="#/" className="card-link">Pagina de facebook</a>
                <a href="#/" className="card-link">Llamar</a>
                </div>
            </div>
        </div>

     );
}
 
export default Card;