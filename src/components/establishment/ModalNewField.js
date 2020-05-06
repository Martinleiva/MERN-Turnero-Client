import React, { useState, useContext, useEffect } from 'react';
import SinImagen from '../../img/sin_imagen.png';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AlertContext from '../../context/alerts/alertContext';
import image2base64 from 'image-to-base64';
import Spinner from '../common/Spinner';
import {backEndURL} from '../../config/urlBackEnd';

const ModalNewField = () => {
    
    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const establishmentContext = useContext(EstablishmentContext);    
    const { selected_stablishment, selected_field, listOfTypesSports, listOfTypesGrounds, 
            createField, updateField, alert_message } = establishmentContext;

    const [loading, setLoading] = useState(false);             

    const [name, setName] = useState('');
    const [establishment, setEstablishment] = useState(null);
    const [sport_type, setSport_type] = useState('');
    const [ground_type, setGround_type] = useState('');
    const [number_of_players, setNumber_of_players] = useState('');
    const [is_roofed, setIs_roofed] = useState(false);
    const [has_lighting, setHas_lighting] = useState(false);
    const [price, setPrice] = useState('');
    const [is_enabled, setIs_enabled] = useState(true);    
    const [photoUploaded, setPhotoUploaded] = useState(null);
    
    const [editionMode, setEditionMode] = useState(false);

    const onChangePhoto = e => {
        setPhotoUploaded(e.target.files[0]);                
    }

    const handleSaveField = async () => {

        setLoading(true);

        //verify required fields
        if(name.trim() === '' || ground_type === '' || 
           sport_type === '' || number_of_players === 0 || price === ''){            
            showAlert('Todos los campos son obligatorios!', 'alert-danger');
            setLoading(false); 
            return;
        }

        if(!selected_stablishment){
            showAlert('No hay un complejo seleccionado.', 'alert-danger');
            setLoading(false); 
            return;
        }

        const field = {
            'name' : name,
            'establishment' : selected_stablishment._id,
            'sport_type' : sport_type,
            'ground_type' : ground_type,
            'number_of_players' : number_of_players,
            'is_roofed' : is_roofed,
            'has_lighting' : has_lighting,
            'price' : price,
            'is_enabled' : is_enabled            
        };

         /*
        In this line we convert the uploaded image to base64 in order to send it to 
        the back end as a string.         
        */
        let photo2base64 = '';
        if(photoUploaded){
            photo2base64 = await image2base64(URL.createObjectURL(photoUploaded));
            field.photo_1 = photo2base64;
        }         

        if(!editionMode){
            createField(field);
        }else{
            updateField(field, selected_field._id);
        }

        setTimeout(() => {    
            cleanState();                    
            setLoading(false);                        
        }, 800);
    } 

    useEffect(()=> {
        if(alert_message){
            showAlert(alert_message.msg, alert_message.category);
        }                 
    }, [alert_message]);

    useEffect (() => {
        
        //First of all we need to clean the state
        cleanState();

        //If there is a selected field, then we need to set up the state with the value of this..
        //The edition mode needs to be set as well...
        if(selected_field){             
            setName(selected_field.name);
            setEstablishment(selected_field.establishment);
            setSport_type(selected_field.sport_type._id);
            setGround_type(selected_field.ground_type._id);
            setNumber_of_players(selected_field.number_of_players);
            setIs_roofed(selected_field.is_roofed);
            setHas_lighting(selected_field.has_lighting);
            setPrice(selected_field.price);
            setIs_enabled(selected_field.is_enabled);                        

            setEditionMode(true);            
        }
    }, [selected_field]);

    const cleanState = () => {
        setName('');
        setEstablishment(null);
        setSport_type('');
        setGround_type('');
        setNumber_of_players(0);
        setIs_roofed(false);
        setHas_lighting(false);
        setPrice('');
        setIs_enabled(true);        
        setEditionMode(false); 
    }


    return (  
        <div className="modal" id="modal_new_field" role="dialog">
            <div className="modal-dialog">                                                                
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">INGRESE DATOS DE LA CANCHA</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body modal_new_field">                        
                       <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputField">Nombre Cancha:</label>
                                    <input type="text" 
                                           className="form-control-edited" 
                                           id="inputField" 
                                           placeholder="Cancha Nº1"
                                           name={name}
                                           value={name}
                                           onChange={(e) => { setName(e.target.value) }}
                                           />
                                </div>                           
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputSportType">Tipo de deporte</label>
                                    <select id="inputSportType" 
                                            className="form-control-edited"
                                            value={sport_type}
                                            onChange={(e) => { setSport_type(e.target.value) }}                                            
                                            >
                                        <option value="">-- Seleccione tipo de deporte --</option>                                                                                
                                        {
                                          listOfTypesSports.map(type => (
                                            <option value={type._id} key={type._id} >{type.description}</option>
                                          ))  
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputGroundType">Tipo de suelo</label>
                                    <select id="inputGroundType" 
                                            className="form-control-edited"
                                            value={ground_type}
                                            onChange={(e) => { setGround_type(e.target.value) }}                                            
                                            >
                                        <option value="">-- Seleccione tipo de suelo --</option>                                                                                
                                        {
                                          listOfTypesGrounds.map(type => (
                                            <option value={type._id} key={type._id} >{type.description}</option>
                                          ))  
                                        }
                                    </select>
                                </div>                                
                            </div>

                            <div className="form-row">                          
                                <div className="form-group col-md-6">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" 
                                               className="custom-control-input" 
                                               id="customRoofed"   
                                               checked={is_roofed}
                                               onChange={(e) => { setIs_roofed(e.target.checked) }}
                                               />
                                        <label className="custom-control-label" htmlFor="customRoofed">Cancha Techada</label>
                                    </div>
                                </div>   

                                 <div className="form-group col-md-6">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" 
                                               className="custom-control-input" 
                                               id="customLighting"
                                               checked={has_lighting}                                              
                                               onChange={(e) => { setHas_lighting(e.target.checked) }}
                                               />
                                        <label className="custom-control-label" htmlFor="customLighting">Iluminación</label>
                                    </div>
                                </div>                 

                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputNumberPlayers">Cantidad de Jugadores</label>
                                    <select id="inputNumberPlayers" 
                                            className="form-control-edited"
                                            value={number_of_players}
                                            onChange={(e) => { setNumber_of_players(e.target.value) }}
                                            >
                                        <option value="0">-- Cantidad de Jugadores --</option>                                        
                                        <option>2</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                        <label htmlFor="inputPrice">Precio</label>
                                        <input type="number" 
                                               className="form-control-edited" 
                                               id="inputPrice" 
                                               placeholder="$150 por hora"
                                               name={price}
                                               value={price}
                                               onChange={(e) => { setPrice(e.target.value) }}
                                               />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputPrice">Foto</label>
                                    <div className="card">
                                        <img src={
                                                !selected_field
                                                    ?
                                                    photoUploaded
                                                        ? URL.createObjectURL(photoUploaded) 
                                                        : SinImagen
                                                    : !photoUploaded  
                                                      ? selected_field.photo_1 !== ''
                                                         ? `${backEndURL}${selected_field.photo_1}`
                                                         : SinImagen
                                                      : URL.createObjectURL(photoUploaded)         
                                                } 
                                                className="card-img-top" alt="..."
                                        />  
                                        <div className="card-body">
                                            <input type="file" accept="image/png, image/jpeg"
                                                   name="photo" onChange={onChangePhoto}/>      
                                        </div>                                                      
                                    </div>                                    
                                </div>                                
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">                                                          
                                { loading ? <Spinner/>  
                                  : alert ? (
                                    <div className={`alert font-weight-bold ${alert.category}`}>
                                        {alert.msg}
                                    </div>) : null
                                }        
                                </div>
                            </div>

                        </form> 

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveField}>Guardar</button>
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>            
            </div>
        </div>   
    );
}
 
export default ModalNewField;