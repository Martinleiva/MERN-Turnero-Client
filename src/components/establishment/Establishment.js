import React, { useContext, useState, useEffect, Fragment } from 'react';
import Field from './Field';
import FieldEmpty from './FieldEmpty';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import { ChevronDoubleUp, Pencil, Plus } from 'react-bootstrap-icons';
import Spinner from '../common/Spinner';
import { backEndURL } from '../../config/urlBackEnd';
import SinImagen from '../../img/sin_imagen.png';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Add from '@material-ui/icons/Add';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const Establishment = ({establishment}) => {

    const establishmentContext = useContext(EstablishmentContext); 
    const { listOfFields, amount_of_field, getFieldByStablishment, 
            setSelectedEstablishment, setSelectedField } = establishmentContext;

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
        getFieldByStablishment(establishment._id);
    }

    useEffect( ()=> {
        if(amount_of_field !== null){
            setLoading(false); 
        }
    }, [amount_of_field, loading]);

    const handleEdit = () => {
        setSelectedEstablishment(establishment);

    }

    const handleNewField = () => {
        setSelectedField(null);
    }

    const FabGreen = withStyles({
        root: {
          backgroundColor: '#10850e',
          color : 'white',
          marginBottom : 5         
        }        
    })(Fab);

    const ButtonAdd = withStyles({
        root: {
          backgroundColor: '#10850e',
          color : 'white'                    
        }        
    })(Button);

    return (  
        <div className="card card-establishment polaroid">
            <div className="row no-gutters">                            
                <div className="col-md-4">
                    <img src={
                            establishment.photo_1 !== ''
                                 ?
                                 `${backEndURL}${establishment.photo_1}`
                                 : SinImagen                    
                            } 
                        className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">

                    <div className="card-body establishment-details">

                        <div className="btn-group-fab-edit-establishment">
                            <FabGreen
                                size="small"                                                                                                
                                aria-label="edit"
                                title="Editar Complejo"
                                data-toggle="modal"
                                data-target="#modal_new_stablishment"
                                onClick={handleEdit} 
                                >
                                <EditIcon />
                            </FabGreen>
                        </div>  

                        <h2 className="card-title">{establishment.name}</h2>
                        <p className="card-text"><attr>Dirección: </attr>{establishment.address}</p>
                        <p className="card-text"><attr>Teléfono: </attr>{establishment.tel}</p>
                        <p className="card-text"><attr>Servicios: </attr>
                            {
                                establishment.services.map(service => (
                                    <span className="badge badge-success mr-2"  key={service._id}>{service.description}</span>
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
                                    <ButtonAdd
                                        variant="contained"
                                        color="default"                            
                                        startIcon={<ExpandMore />}
                                        data-toggle="collapse" 
                                        data-target={`#collapse${establishment._id}`}
                                        aria-expanded="false"    
                                        aria-controls={`#collapse${establishment._id}`}                                    
                                        onClick={handleGetFields}
                                    >
                                        Canchas
                                    </ButtonAdd>
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
                                    {
                                    listOfFields.length === 0 
                                        ? 
                                        <FieldEmpty/>                                                                            
                                        :
                                        listOfFields.map(field => (
                                            field.establishment === establishment._id ? <Field field={field} /> : null
                                        ))
                                    }
                                   
                                </div>

                                <div className="btn-group-fab">  
                                    <FabGreen
                                        size="small"                                                                                                
                                        aria-label="edit"
                                        title="Nueva Cancha"
                                        data-toggle="modal"
                                        data-target="#modal_new_field" 
                                        onClick={handleNewField}  
                                        >
                                        <Add/>
                                    </FabGreen>                                    
                                    <FabGreen
                                        size="small"                                                                                                
                                        aria-label="edit"
                                        title="Cerrar"
                                        data-toggle="collapse" 
                                        data-target={`#collapse${establishment._id}`}
                                        aria-controls={`#collapse${establishment._id}`}  
                                        >
                                        <KeyboardArrowUpIcon/>
                                    </FabGreen>                                   
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