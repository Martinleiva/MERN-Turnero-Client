import React from 'react';
import imagenTemp from '../../img/complejo_img_test1.jpg';
import Field from './Field';

const Establishment = () => {
    return (  
        <div className="card card-establishment">
            <div className="row no-gutters">                            
                <div className="col-md-4">
                    <img src={imagenTemp} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body establishment-details">
                        <h2 className="card-title">Nombre del Complejo</h2>
                        <p className="card-text"><attr>Dirección: </attr>direccion</p>
                        <p className="card-text"><attr>Teléfono: </attr>383(441520)</p>
                        <p className="card-text"><attr>Servicios: </attr>                                     
                            <span className="badge badge-info mr-2">Vestuarios</span>
                            <span className="badge badge-info mr-2">Bar</span>
                            <span className="badge badge-info mr-2">Parrilla</span>
                        </p>
                        <p className="card-text"><attr>Horarios: </attr>                                         
                            <span className="badge badge-warning mr-2">Martes (15:00 - 23:30)</span>
                            <span className="badge badge-warning mr-2">Miercoles (15:00 - 23:30)</span>
                            <span className="badge badge-warning mr-2">Jueves (15:00 - 23:30)</span>
                            <span className="badge badge-warning mr-2">Viernes (15:00 - 2:00)</span>
                            <span className="badge badge-warning mr-2">Sabados (15:00 - 2:00)</span>
                        </p>
                    </div>
                </div>                            
            </div>
            <div className="row no-gutters mt-3">
                <div className="col-md-12">                                
                    <div className="accordion" id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseFields" aria-expanded="false" aria-controls="collapseFields">
                                    Canchas
                                </button>
                            </h2>
                            </div>

                            <div id="collapseFields" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body card-fields">
                                    <Field/>
                                    <Field/>
                                    <Field/>
                                    <Field/>
                                    <Field/>                                    
                                    <Field/>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Establishment;