import React, {useContext, Fragment} from 'react';
import Header from '../common/Header';
import EstablishmentContext from '../../context/establishment/establishmentContext';

import SinImagen from '../../img/sin_imagen.png';


const SearchResult = () => {

    const establishmentContext = useContext(EstablishmentContext);    
    const { listOfSearchedFields } = establishmentContext;


    return (
        <Fragment>
            <Header/>>
            <div className="container container-search"> 

                <aside>                   
                    <h2>Filtros</h2> 
                    <div className="card card-filter">
                        
                    </div>                   
                    
                </aside>  

                <div className="main-seccion-search-fields">
                    <h2>Canchas encontradas: </h2>
                    
                    <div className="car card-search-fields">
                        <div className="row no-gutters">  
                            <div className="col-md-4">
                                <img src={                               
                                        SinImagen                    
                                    } 
                                className="card-img" alt="..."/>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body card-search-detail">                                    
                                    <h6 className="card-text"><attr>Dirección: </attr></h6>
                                    <h6 className="card-text"><attr>Cantidad de Jugadores: </attr></h6>
                                    <h6 className="card-text"><attr>Techada: </attr></h6>
                                    <h6 className="card-text"><attr>Tipo de Sueldo: </attr></h6>
                                </div>
                            </div>

                                                 
                        </div>
                        
                    </div>                                        
                   

                </div>
                   
            </div>  

        </Fragment>
      );
}
 
export default SearchResult;