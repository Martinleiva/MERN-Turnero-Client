import React, { useState, useContext, useEffect } from 'react';
import SinImagen from '../../img/sin_imagen.png';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AlertContext from '../../context/alerts/alertContext';
import image2base64 from 'image-to-base64';

const ModalNewField = () => {
    
    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const establishmentContext = useContext(EstablishmentContext);    
    const { selected_stablishment, listOfTypesSports, listOfTypesGrounds, 
            createField, alert_message } = establishmentContext;

    const [name, setName] = useState('');
    const [establishment, setEstablishment] = useState(null);
    const [sport_type, setSport_type] = useState('');
    const [ground_type, setGround_type] = useState('');
    const [number_of_players, setNumber_of_players] = useState('');
    const [is_roofed, setIs_roofed] = useState(false);
    const [has_lighting, setHas_lighting] = useState(false);
    const [price, setPrice] = useState('');
    const [is_enabled, setIs_enabled] = useState(true);    
    const [photo, setPhoto] = useState(null);    

    const onChangeFoto = e => {
        setPhoto(e.target.files[0]);                
    }

    const handleSaveField = async () => {

        //verify required fields
        if(name.trim() === '' || price.trim() === ''){            
            showAlert('Todos los campos son obligatorios!', 'alert-danger');
            return;
        }

        /*
        In this line we convert the uploaded image to base64 in order to send it to 
        the back end as a string. There are major alternatives to do so. The best alternatie to store
        a image in the database, is to load it on the server (in a specific location) and then
        use the path. Howover, due to, we are working on a separated serves (localhost), it is not possible.        
        */
        const photo2base64 = await image2base64(URL.createObjectURL(photo));

        const field = {
            'name' : name,
            'establishment' : selected_stablishment._id,
            'sport_type' : sport_type,
            'ground_type' : ground_type,
            'number_of_players' : number_of_players,
            'is_roofed' : is_roofed,
            'has_lighting' : has_lighting,
            'price' : price,
            'is_enabled' : is_enabled,
            'photo_1': photo2base64            
        };
        createField(field);
    }

    useEffect(()=> {
        if(alert_message){
            showAlert(alert_message.msg, alert_message.category);
        }
    }, [alert_message])

    return (  
        <div className="modal" id="modal_new_field" role="dialog">
            <div className="modal-dialog">                                                                
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">INGRESE DATOS DE LA CANCHA</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body modal_new_field">
                        
                       <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputField">Nombre Cancha:</label>
                                    <input type="text" 
                                           className="form-control-edited" 
                                           id="inputField" 
                                           placeholder="Cancha Nº1"
                                           name={name}
                                           onChange={(e) => { setName(e.target.value) }}
                                           />
                                </div>                           
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputSportType">Tipo de deporte</label>
                                    <select id="inputSportType" 
                                            className="form-control-edited"
                                            onChange={(e) => { setSport_type(e.target.value) }}
                                            >
                                        <option selected>-- Seleccione tipo de deporte --</option>                                                                                
                                        {
                                          listOfTypesSports.map(type => (
                                            <option value={type._id}>{type.description}</option>
                                          ))  
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputGroundType">Tipo de suelo</label>
                                    <select id="inputGroundType" 
                                            className="form-control-edited"
                                            onChange={(e) => { setGround_type(e.target.value) }}
                                            >
                                        <option selected>-- Seleccione tipo de suelo --</option>                                                                                
                                        {
                                          listOfTypesGrounds.map(type => (
                                            <option value={type._id}>{type.description}</option>
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
                                               onChange={(e) => { setIs_roofed(e.target.checked) }}
                                               />
                                        <label className="custom-control-label" for="customRoofed">Cancha Techada</label>
                                    </div>
                                </div>   

                                 <div className="form-group col-md-6">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" 
                                               className="custom-control-input" 
                                               id="customLighting"
                                               onChange={(e) => { setHas_lighting(e.target.checked) }}
                                               />
                                        <label className="custom-control-label" for="customLighting">Iluminación</label>
                                    </div>
                                </div>                 

                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputNumberPlayers">Cantidad de Jugadores</label>
                                    <select id="inputNumberPlayers" 
                                            className="form-control-edited"
                                            onChange={(e) => { setNumber_of_players(e.target.value) }}
                                            >
                                        <option selected>-- Cantidad de Jugadores --</option>                                        
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
                                        <label for="inputPrice">Precio</label>
                                        <input type="number" 
                                               className="form-control-edited" 
                                               id="inputPrice" 
                                               placeholder="$150 por hora"
                                               name={price}
                                               onChange={(e) => { setPrice(e.target.value) }}
                                               />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputPrice">Foto</label>
                                    <div className="card">
                                        <img src={photo ? URL.createObjectURL(photo) : SinImagen} class="card-img-top" alt="..."/>    
                                        <div class="card-body">
                                            <input type="file" accept="image/png, image/jpeg"
                                                   name="photo" onChange={onChangeFoto}/>      
                                        </div>                                                      
                                    </div>                                    
                                </div>                                
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                {alert ? (
                                    <div className={`alert font-weight-bold ${alert.category}`}>
                                        {alert.msg}
                                    </div>) : null
                                }        
                                </div>
                            </div>

                        </form> 

                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-primary btn-sm" onClick={handleSaveField}>Guardar</button>
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>            
            </div>
        </div>   
    );
}
 
export default ModalNewField;