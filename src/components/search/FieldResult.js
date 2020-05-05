import React, {Fragment, useState, useEffect} from 'react';
import SinImagen from '../../img/sin_imagen.png';
import {backEndURL} from '../../config/urlBackEnd';
import RoomOutlined from '@material-ui/icons/RoomOutlined';
import Wifi from '@material-ui/icons/Wifi';
import OutdoorGrill from '@material-ui/icons/OutdoorGrill';
import Cake from '@material-ui/icons/Cake';
import RestaurantMenuOutlined from '@material-ui/icons/RestaurantMenuOutlined';
import LiveTv from '@material-ui/icons/LiveTv';
import Security from '@material-ui/icons/Security';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import DriveEta from '@material-ui/icons/DriveEta';

const FieldResult = ({fieldResult}) => {
    
    const icons = {
        '5e8753e27086622ea490f158' : <p data-toggle="tooltip" title="WiFi"> <Wifi style={{ fontSize: 18 }}/> </p>,
        '5e8753b37086622ea490f152' : <p data-toggle="tooltip" title="Vestuario"> <MeetingRoom style={{ fontSize: 18 }}/> </p>,
        '5e8753d67086622ea490f156' : <p data-toggle="tooltip" title="Estacionamiento"> <DriveEta style={{ fontSize: 18 }}/> </p>,
        '5e8753c17086622ea490f153' :  <p data-toggle="tooltip" title="Bar"> <RestaurantMenuOutlined style={{ fontSize: 18 }}/> </p>,
        '5e8753c97086622ea490f154' : <p data-toggle="tooltip" title="Cumpleaños"> <Cake style={{ fontSize: 18 }}/> </p>,
        '5e8753d17086622ea490f155' : <p data-toggle="tooltip" title="Parrilla"> <OutdoorGrill style={{ fontSize: 18 }}/> </p>,
        '5e8753db7086622ea490f157' : <p data-toggle="tooltip" title="Seguridad"> <Security style={{ fontSize: 18 }}/> </p>,
        '5e8753e97086622ea490f159' : <p data-toggle="tooltip" title="TV"> <LiveTv style={{ fontSize: 18 }}/> </p>
    }

    return ( 

        <div className="car card-search-fields">
            <div className="row no-gutters">  
                <div className="col-md-4">
                    <img                            
                        src={fieldResult.photo_1 !== '' ?  `${backEndURL}${fieldResult.photo_1}` : SinImagen}
                        
                    className="card-img" alt="..."/>
                </div>

                <div className="col-md-8">
                    <div className="card-body card-search-detail">                              
                        <>                   
                        <h2 className="card-text">{fieldResult.establishment.name}</h2> 
                        <div className="car-search-address">
                            <h6 className="card-text"> <RoomOutlined style={{ fontSize: 18 }} color="disabled"/> 
                            {fieldResult.establishment.address}</h6>
                        </div>                        
                        
                        <div className="card-search-icons">
                            {
                                fieldResult.establishment.services.map(service=>(
                                    icons[service]                                    
                                ))
                            }                       
                       </div>                  
                       
                        <p className="card-text">Nombre Cancha: <span>{fieldResult.name}</span></p>
                        <p className="card-text">Tipo de Deporte: <span>{fieldResult.sport_type.description}</span></p>                       
                        <div className="car-serch-roofed-lighting">
                            <p className="card-text">Techada: <span>{fieldResult.is_roofed ? "SI" : "NO"}</span></p>
                            <p className="card-text">Iluminación: <span>{fieldResult.has_lighting ? "SI" : "NO"}</span></p>    
                        </div>                        
                        <p className="card-text">Tipo de Sueldo: <span>{fieldResult.ground_type.description}</span></p>
                        <p className="card-text">Cantidad de Jugadores: <span> {fieldResult.number_of_players}</span></p>
                        
                        <div className="div-price-and-reservation">
                            <h3 className="card-text card-price">${fieldResult.price}</h3>
                            <div  className="btn-make-reservation" >Reservar</div>   
                        </div>
                        </>                         
                    </div>

                </div>

                                                                                                
            </div>
                                  
        </div>
     );
}
 
export default FieldResult;
