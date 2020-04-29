import React, {useContext, Fragment} from 'react';
import Header from '../common/Header';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import FieldResult from './FieldResult';

const SearchResult = () => {

    const establishmentContext = useContext(EstablishmentContext);    
    const { listOfSearchedFields } = establishmentContext;


    return (
        <Fragment>
            <Header/>>
            <div className="container container-search"> 

                <aside>                   
                    <h2>Buscar</h2> 
                    <div className="card card-filter">
                        
                    </div>                   
                    
                </aside>  

                <div className="main-seccion-search-fields">
                    <h4>Canchas encontradas: </h4>
                    
                    {listOfSearchedFields.map(fieldResult => (
                        <FieldResult
                            fieldResult={fieldResult}                                        
                        />                                                                      
                    ))}  
                </div>
                   
            </div>  

        </Fragment>
      );
}
 
export default SearchResult;