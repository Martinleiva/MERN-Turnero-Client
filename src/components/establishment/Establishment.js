import React, {useContext, useState, useEffect, Fragment} from 'react';
import imagenTemp from '../../img/complejo_img_test1.jpg';
import Field from './Field';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import { ChevronDoubleUp, Pencil, Plus, PlusSquare} from 'react-bootstrap-icons';
import Spinner from '../common/Spinner';

const Establishment = ({establishment}) => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { listOfFields, getFields, setSelectedEstablishment } = establishmentContext;

    const [loading, setLoading] = useState(false);

    const handleGetFields = () => {

        setLoading(true);
        //Get all collapse elements and remove the show class... 
        //This is in orden to close all document's collapses
        const collapses = document.getElementsByClassName('collapseField');        
        for(let i=0; i<collapses.length; i++){           
            collapses[i].classList.remove('show');    
        }

        setSelectedEstablishment(establishment);

        getFields(establishment._id);

        setTimeout(() => {                        
            setLoading(false);            
        }, 1000);
    }

    return (  
        <div className="card card-establishment">
            <div className="row no-gutters">                            
                <div className="col-md-4">
                    <img src={imagenTemp} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">

                    <div className="card-body establishment-details">

                        <div className="btn-group-fab-edit-establishment">
                            <button type="button" 
                                    className="btn btn-main btn-success d-flex d-flex justify-content-center" 
                                    title="Editar Complejo"                                          
                            > 
                                <Pencil color="white" size={20}/>
                            </button>
                        </div>  

                        <h2 className="card-title">{establishment.name}</h2>
                        <p className="card-text"><attr>Dirección: </attr>{establishment.address}</p>
                        <p className="card-text"><attr>Teléfono: </attr>{establishment.tel}</p>
                        <p className="card-text"><attr>Servicios: </attr>
                            {
                                establishment.services.map(service => (
                                    <span className="badge badge-success mr-2">{service.description}</span>
                                ))
                            }                                                                
                        </p>
                        <p className="card-text"><attr>Horarios: </attr>                                         
                            {establishment.monday !== '' ? <span className="badge badge-success mr-2">Lunes: {establishment.monday}</span> : null}
                            {establishment.tuesday !== '' ? <span className="badge badge-success mr-2">Martes: {establishment.tuesday}</span> : null}
                            {establishment.wednesday !== '' ? <span className="badge badge-success mr-2">Miércoles: {establishment.wednesday}</span> : null}
                            {establishment.thursday !== '' ? <span className="badge badge-success mr-2">Jueves: {establishment.thursday}</span> : null}
                            {establishment.friday !== '' ? <span className="badge badge-success mr-2">Viernes: {establishment.friday}</span> : null}
                            {establishment.saturday !== '' ? <span className="badge badge-success mr-2">Sábado: {establishment.saturday}</span> : null}
                            {establishment.sunday !== '' ? <span className="badge badge-success mr-2">Domingo: {establishment.sunday}</span> : null}
                        </p>
                    </div>                          

                </div>                            
            </div>


            <div className="row no-gutters mt-3">
                <div className="col-md-12">                                
                    <div className="accordion" id="accordion">

                        <div className="card">
                            <div className="card-header" id={`heading${establishment._id}`}>
                                <h2 className="mb-0">
                                    <button 
                                        className="btn btn-success btn-sm collapsed" 
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target={`#collapse${establishment._id}`}
                                        aria-expanded="false"    
                                        aria-controls={`#collapse${establishment._id}`}                                    
                                        onClick={handleGetFields}                                        
                                    >
                                        Canchas
                                    </button>
                                </h2>
                            </div>

                            <div id={`collapse${establishment._id}`} 
                                 className="collapseField collapse"
                                 aria-labelledby={`heading${establishment._id}`}
                                 data-parent="#accordion"   
                            >

                            { (loading) ? 
                                <Spinner/> :
                                <Fragment>
                                <div className="card-body card-fields">

                                    {listOfFields.map(field => (
                                        field.establishment === establishment._id ? <Field field={field} /> : null
                                    ))}
                                   
                                </div>

                                <div className="btn-group-fab">

                                    <button type="button" 
                                            className="btn-new-field btn btn-main btn-success d-flex d-flex justify-content-center collapsed" 
                                            title="Nueva Cancha"
                                            data-toggle="modal"
                                            data-target="#modal_new_field"                                                                                
                                    > 
                                        <Plus color="white" size={20} />
                                    </button>    

                                    <button type="button" 
                                            className="btn btn-main btn-success d-flex d-flex justify-content-center collapsed" 
                                            title="Cerrar"
                                            data-toggle="collapse" 
                                            data-target={`#collapse${establishment._id}`}
                                            aria-controls={`#collapse${establishment._id}`}                                            
                                    > 
                                        <ChevronDoubleUp color="white" size={20}/>
                                    </button>
                                </div> 
                                </Fragment>
                            }              

                            </div>                                     
                        </div> 
                    </div>
                </div>
            </div>


        </div>
    );
}
 
export default Establishment;