import React from 'react';

const Container = () => {
    return ( 
        <div className="jumbotron">
            <h3 className="display-4">Bienvenido Lucas Amaya</h3>
            <p className="lead">En esta sección podra ver sus reservas vigentes, crear nuevas reservaciones y borrar las actuales.</p>
            
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            
            <button type="button" class="btn btn-success">+ RESERVAR</button>
        </div>

     );
}

export default Container;