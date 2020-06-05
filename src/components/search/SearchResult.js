import React, {useContext, Fragment, useEffect, useState} from 'react';
import PrivateHeader from '../common/Header';
import PublicHeader from '../inicio/Header';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AuthContext from '../../context/authentication/authContext';
import FieldResult from './FieldResult';
import Spinner from '../common/Spinner';

import ModalReservation from '../reservation/client/ModalReservation';

const SearchResult = (props) => {


    const authContext = useContext(AuthContext);
    const { user } = authContext; 

    const establishmentContext = useContext(EstablishmentContext);    
    const { listOfTypesSports, listOfTypesGrounds, listOfServices, listOfSearchedFields, 
            getFieldsBySportType, getTypesOfSports, getTypesOfGrounds, 
            getServices, getFieldsByFilters } = establishmentContext; 
    
    const [sport_type, setSport_type] = useState('');
    const [ground_type, setGround_type] = useState('');
    const [roofed, setRoofed] = useState(false);
    const [lighted, setLighted] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);

    const handleAddService = (service, checked) => {
        if(checked) {
            setSelectedServices(selectedServices => [...selectedServices, service._id]);
        }
        else {
            setSelectedServices(selectedServices => selectedServices.filter(s => s !== service._id));     
        }
    }

    const handleSearch = () => {
        const filters = {
            sport_type,
            ground_type,
            roofed,
            lighted,
            'services' : selectedServices
        }
        localStorage.setItem('filters', JSON.stringify(filters));        
        getFieldsByFilters(filters);
    }

    useEffect(()=> {
        let filtros = localStorage.getItem('filters');
        if(filtros) {
            filtros = JSON.parse(filtros);
        }

        const search_sport_type = localStorage.getItem('search_sport_type');
        
        getTypesOfSports();
        getTypesOfGrounds(); 
        getServices();
        setGround_type('all');            
        if(search_sport_type && !filtros){                        
            getFieldsBySportType(search_sport_type);
            setSport_type(search_sport_type);            
        }

        if(filtros) {
            setSelectedServices(filtros.services);
            setSport_type(filtros.sport_type);
            setGround_type(filtros.ground_type);
            setLighted(filtros.lighted);
            setRoofed(filtros.roofed);
            getFieldsByFilters(filtros);
        }

    }, []);

    return (            
            <Fragment>                                   
            {user ? <PrivateHeader/> : <PublicHeader/>}         
            <div className="container container-search">                 
                <aside className="aside-search-fields">                   
                    <h4>Filtrar</h4> 
                    
                    <div className="card border-light mt-4">                        
                        <div className="card-header">Tipo de deporte</div>
                        <div className="card-body">                                                       

                            <select id="inputSportType" 
                                    className="form-control"
                                    value={sport_type == '' ? localStorage.getItem('search_sport_type') : sport_type}
                                    onChange={(e) => { setSport_type(e.target.value) }}                                            
                                    >                                        
                                    {
                                        listOfTypesSports.map(type => (
                                        <option value={type._id} key={type._id} >{type.description}</option>
                                        ))  
                                    }
                            </select>
                        </div>
                    </div>

                    <div className="card border-light mt-4">                        
                        <div className="card-header">Tipo de Suelo</div>
                        <div className="card-body">                                                       
                            <select id="inputGroundType" 
                                    className="form-control"
                                    value={ground_type}
                                    onChange={(e) => { setGround_type(e.target.value) }}                                            
                                    >
                                    <option value="all" key="all" >Todos</option>                                            
                                    {
                                        listOfTypesGrounds.map(type => (
                                        <option value={type._id} key={type._id} >{type.description}</option>
                                        ))  
                                    }
                            </select>
                        </div>
                    </div>

                    <div className="card border-light mt-4">                        
                        <div className="card-header">Servicios</div>
                        <div className="card-body">                                                                                   
                            {
                                listOfServices.map(service => (
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" 
                                               className="custom-control-input" 
                                               id={`service${service._id}`} 
                                               checked={selectedServices.includes(service._id)}
                                               onClick={(e)=>handleAddService(service, e.target.checked)}/>
                                        <label className="custom-control-label" htmlFor={`service${service._id}`}>{service.description}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="card border-light mt-4">                        
                        <div className="card-header">Extras</div>
                        <div className="card-body">                                                           
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" 
                                       className="custom-control-input" 
                                       id="roffed"
                                       checked={roofed}
                                       onClick={(e) => { setRoofed(e.target.checked) }}
                                       />
                                <label className="custom-control-label" htmlFor="roffed">Cancha techada</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" 
                                       className="custom-control-input" 
                                       id="lighting"
                                       checked={lighted}
                                       onClick={(e) => { setLighted(e.target.checked) }}
                                       />
                                <label className="custom-control-label" htmlFor="lighting">Con iluminación</label>
                            </div>                                
                        </div>
                    </div>

                    <div className="btn-search-by-filter" onClick={handleSearch}>
                        Buscar
                    </div>
                        
                                                       
                </aside>  

                <div className="main-seccion-search-fields">
                    <h4>Canchas encontradas: </h4>                    
                    {        
                        listOfSearchedFields
                        ?           
                            listOfSearchedFields.map(fieldResult => (
                            <FieldResult
                                fieldResult={fieldResult}
                                history={props.history}                                        
                            />                        
                        ))
                        :  <Spinner/>                                                                        
                    }  
                </div>
                   
            </div>  

            <ModalReservation />

        </Fragment>
      );
}
 
export default SearchResult;