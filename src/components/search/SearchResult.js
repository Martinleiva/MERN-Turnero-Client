import React, {useContext, Fragment, useEffect, useState} from 'react';
import Header from '../common/Header';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import FieldResult from './FieldResult';
import Spinner from '../common/Spinner';

const SearchResult = () => {

    const establishmentContext = useContext(EstablishmentContext);    
    const { listOfSearchedFields, getFieldsBySportType } = establishmentContext;    

    useEffect(()=> {
        const search_sport_type = localStorage.getItem('search_sport_type');
        if(search_sport_type){            
            getFieldsBySportType(search_sport_type);
        }        
    }, []);

    return (
        <Fragment>
            <Header/>
            <div className="container container-search"> 

                <aside>                   
                    <h2>Buscar</h2> 
                    <div className="card card-filter">
                        
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