import React, {useContext, Fragment, useEffect, useState} from 'react';
import Header from '../common/Header';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import FieldResult from './FieldResult';
import Spinner from '../common/Spinner';

const SearchResult = () => {

    const establishmentContext = useContext(EstablishmentContext);    
    const { listOfTypesSports, listOfTypesGrounds, listOfServices, listOfSearchedFields, 
            getFieldsBySportType, getTypesOfSports, getTypesOfGrounds, getServices } = establishmentContext; 
    
    const [sport_type, setSport_type] = useState('');
    const [ground_type, setGround_type] = useState('');

    useEffect(()=> {
        const search_sport_type = localStorage.getItem('search_sport_type');
        if(search_sport_type){            
            getTypesOfSports();
            getTypesOfGrounds(); 
            getServices();
            getFieldsBySportType(search_sport_type);
        }        
    }, []);

    return (
        <Fragment>
            <Header/>
            <div className="container container-search"> 

                <aside className="aside-search-fields">                   
                    <h4>Filtrar</h4> 
                    
                    <div className="card border-light mt-4">                        
                        <div className="card-header">Tipo de deporte</div>
                        <div className="card-body">                                                       

                            <select id="inputSportType" 
                                    className="form-control"
                                    value={sport_type}
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
                                        <input type="checkbox" className="custom-control-input" id={`service${service._id}`}/>
                                        <label className="custom-control-label" for={`service${service._id}`}>{service.description}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="card border-light mt-4">                        
                        <div className="card-header">Extras</div>
                        <div className="card-body">                                                           
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="roffed"/>
                                <label className="custom-control-label" for="roffed">Cancha techada</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="lighting"/>
                                <label className="custom-control-label" for="lighting">Con iluminación</label>
                            </div>                                
                        </div>
                    </div>

                    <div className="btn-search-by-filter">
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
                            />                        
                        ))
                        :  <Spinner/>                                                                        
                    }  
                </div>
                   
            </div>  

        </Fragment>
      );
}
 
export default SearchResult;