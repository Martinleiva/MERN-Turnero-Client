import React, { Fragment, useContext, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Img1 from '../../img/cancha1.jpg';
import Img2 from '../../img/cancha2.jpg';
import Img3 from '../../img/cancha3.jpg';
import ImgCard1 from '../../img/img-card1.png';
import ImgCard2 from '../../img/img-card2.png';
import ImgCard3 from '../../img/img-card3.png';

import EstablishmentMain from '../search/EstablishmentMain';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import {Carousel} from 'primereact/carousel';
import FieldSearch from '../search/FieldSearch';
import { backEndURL } from '../../config/urlBackEnd';
import { withStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Spinner from '../common/Spinner';


const Home = (props) => {

    const establishmentContext = useContext(EstablishmentContext);    
    const { listOfTypesSports, getTypesOfSports, listOfStablishments, fields,  
            getStablishment, getFields} = establishmentContext;

    const [sport_type, setSport_type] = useState('');

    useEffect( ()=> {        
        getTypesOfSports();   
        getStablishment();
        getFields();     
    }, []);

    const handleSearchFields = () => {
        if(sport_type === '-' || sport_type === ''){             
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes elegir un deporte'            
            })
            return;
        }        
        localStorage.setItem('search_sport_type', sport_type);        
        props.history.push('/search-result'); 
    }

    const ButtonSearch = withStyles({
        root: {
          backgroundColor: '#10850e',
          color : 'white',
          marginTop: 30,
          width : "100%",
          height : 50
        }        
    })(Button);

    const [responsiveSettings, setResponsiveSettings] = useState([
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ]);


    return (
        <Fragment>
            <Header />            

            <div className="header-home">
                <div className="container">                    
                    <div className="titulo-home-search">
                        <h1 className="text-center">Buscá y reservá la cancha que más te convenga</h1>    
                    </div>    
                
                    <div className="container-form-search-fields  col-md-12 col-xs-12">                
                        <form className="form-inline">
                            <div className="form-group col-md-9 col-xs-12">
                                <div className="titulo_form">¿A qué quieres jugar?</div>                        
                                <select id="inputSportType" 
                                        className="form-control-edited select-search"
                                        value={sport_type}
                                        onChange={(e) => { setSport_type(e.target.value) }}                                            
                                        >
                                        <option value='-'>-Elije un deporte-</option>                        
                                        {
                                            listOfTypesSports.map(type => (
                                            <option value={type._id} key={type._id} >{type.description}</option>
                                            ))  
                                        }
                                </select>  
                            </div>
                            <div className="form-group col-md-3 col-xs-12">                        
                                <ButtonSearch
                                    variant="contained"
                                    color="default"
                                    width="100%"                            
                                    startIcon={<Search />}
                                    onClick={handleSearchFields}                                                        
                                >
                                    Buscar Cancha
                                </ButtonSearch>  
                            </div>
                                                                            
                        </form>
                    </div>
                </div>                    

            </div>  

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-4 margen-card">
                        <div className="card border-success mb-3 h-100 estilo-card" >
                            <div className="card-header">
                                <img src={ImgCard1} className="mx-auto d-block" alt="..."></img>
                            </div>
                            <div className="card-body text-success">
                                <h2 className="card-title">Busca</h2>
                                <p className="card-text">De manera rapida y sencilla podes encontrar la cancha que cumpla con tus necesidades: horario, ubicación, cantidad de jugadores, etc. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 margen-card">
                        <div className="card border-success mb-3 h-100 estilo-card">
                            <div className="card-header">
                            <img src={ImgCard2} className="mx-auto d-block" alt="..."></img>
                            </div>
                            <div className="card-body text-success">
                                <h2 className="card-title">Reservá</h2>
                                <p className="card-text">Encontra aqui toda la información necesaria para que realices tu reseva, sin realizar ningun pago por adelantado.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 margen-card">
                        <div className="card border-success mb-3 h-100 estilo-card">
                            <div className="card-header">
                                <img src={ImgCard3} className="mx-auto d-block" alt="..."></img>
                            </div>
                            <div className="card-body text-success">
                                <h2 className="card-title">Jugá</h2>
                                <p className="card-text">Solo tenes que presentarte en la cancha reservada, en el horario acordado, pagarle al Dueño y a jugar por la gloria con todo tu equipo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">    

                {
                    listOfStablishments.length > 0 
                    ?
                    <div className="main-establishment-search">
                        <h2 className="text-center my-4">Conocé todos los complejos adheridos</h2>               
                        <div className="card-deck mb-4">
                                <EstablishmentMain
                                    establishment={listOfStablishments.length > 0 ? listOfStablishments[0] : null}
                                />                                                 
                                <EstablishmentMain
                                    establishment={listOfStablishments.length > 1 ? listOfStablishments[1] : null}
                                />                                                        
                        </div>                         
                        <div className="card-deck">                                                                                         
                                <EstablishmentMain
                                    establishment={listOfStablishments.length > 2 ? listOfStablishments[2] : null}
                                />                                                 
                                <EstablishmentMain
                                    establishment={listOfStablishments.length > 3 ? listOfStablishments[4] : null}
                                />                                                        
                        </div>                                                     
                    </div>
                    :
                    <Spinner/>
                }            
                {
                    fields.length > 0 
                    ?                                            
                    <div className="div-carousel">
                        <h3 className="text-center mb-4">Te puede interesar</h3>
                        <Carousel value={fields} itemTemplate={FieldSearch} numVisible={4} numScroll={1}
                                responsiveOptions={responsiveSettings} circular={true} autoplayInterval={3000}></Carousel>                            
                    </div>        
                    : <Spinner/>
                }                                                                                     
            </div>
            
            <Footer />
        </Fragment>
     );
}
 
export default Home;