import React, {Fragment} from 'react';
import SinImagen from '../../img/sin_imagen.png';
import {backEndURL} from '../../config/urlBackEnd';
import RoomOutlined from '@material-ui/icons/RoomOutlined';
import Wifi from '@material-ui/icons/Wifi';
import OutdoorGrill from '@material-ui/icons/OutdoorGrill';
import Cake from '@material-ui/icons/Cake';
import RestaurantMenuOutlined from '@material-ui/icons/RestaurantMenuOutlined';
import LiveTv from '@material-ui/icons/LiveTv';
import Security from '@material-ui/icons/Security';
import Bathtub from '@material-ui/icons/Bathtub';
import DriveEta from '@material-ui/icons/DriveEta';

const FieldResult = ({fieldResult}) => {
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
                        <h6 className="card-text">{fieldResult.establishment.address}</h6>
                       
                       <div className="card-search-icons">
                            <p> <Wifi/> </p>
                            <p> <OutdoorGrill/> </p>
                            <p> <Cake/> </p>                            
                            <p> <LiveTv/> </p>
                            <p> <Security/> </p>
                            <p> <Bathtub /> </p>
                            <p> <DriveEta/> </p>  
                            <p> <RestaurantMenuOutlined/> </p>                        
                       </div>                    
                       
                        <p className="card-text">Nombre Cancha: <span>{fieldResult.name}</span></p>
                        <p className="card-text">Cantidad de Jugadores: <span> {fieldResult.number_of_players}</span></p>
                        <p className="card-text">Techada: <span></span></p>
                        <p className="card-text">Tipo de Sueldo: <span>{fieldResult.ground_type.description}</span></p>
                        <p className="card-text">Tipo de Deporte: <span>{fieldResult.sport_type.description}</span></p>
                        
                        <h3 className="card-text card-price">${fieldResult.price}</h3>
                        <div  className="btn-make-reservation" >Reservar</div>   
                        </>                         
                    </div>

                </div>

                                                                                                
            </div>
                                  
        </div>
     );
}
 
export default FieldResult;
