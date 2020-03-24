import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

import Img1 from '../../img/cancha1.jpg';
import Img2 from '../../img/cancha2.jpg';
import Img3 from '../../img/cancha3.jpg';
import ImgCard1 from '../../img/img-card1.png';
import ImgCard2 from '../../img/img-card2.png';
import ImgCard3 from '../../img/img-card3.png';


const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className="container img-carrusel">
            <div className="row justify-content-md-center">
                <div className="col col-lg-9">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active h-100">
                            <img src={Img1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item h-100">
                            <img src={Img2} className="d-block w-100 " alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item h-100">
                            <img src={Img3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </div>

            </div>

            <div className="container">
                <di className="row justify-content-md-center">
                    <div className="col-md-4 margen-card">
                        <div className="card border-success mb-3 h-100 estilo-card" >
                            <div className="card-header">
                                <img src={ImgCard1} className="mx-auto d-block"></img>
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
                            <img src={ImgCard2} className="mx-auto d-block"></img>
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
                                <img src={ImgCard3} className="mx-auto d-block"></img>
                            </div>
                            <div className="card-body text-success">
                                <h2 className="card-title">Jugá</h2>
                                <p className="card-text">Solo tenes que presentarte en la cancha reservada, en el horario acordado, pagarle al Dueño y a jugar por la gloria con todo tu equipo.</p>
                            </div>
                        </div>
                    </div>
                </di>
            </div>
            
            <Footer />
        </Fragment>
     );
}
 
export default Home;