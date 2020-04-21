import React, { useState, useContext, useEffect } from 'react';
import SinImagen from '../../img/sin_imagen.png';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import image2base64 from 'image-to-base64';
import Spinner from '../common/Spinner';
import DayOfWeek from './DayOfWeek';
import {backEndURL} from '../../config/urlBackEnd';

const ModalNewEstablishment = () => {
    
    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const establishmentContext = useContext(EstablishmentContext);    
    const {selected_stablishment, listOfCategories, listOfServices, alert_message , 
            listOfAddedServices, addService, removeService, 
            createEstablishment, updateEstablishment } = establishmentContext;

    const authContext = useContext(AuthContext);            
    const { user } = authContext;

    const [loading, setLoading] = useState(false);             

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [coordinates, setCoordinates] = useState('');    
    const [category, setCategory] = useState(null);
    const [services, setServices] = useState([]); 
    const [photoUploaded, setPhotoUploaded] = useState(null);
    
    const [monday, setMonday] = useState('');
    const [tuesday, setTuesday] = useState('');
    const [wednesday, setWednesday] = useState('');
    const [thursday, setThursday] = useState('');
    const [friday, setFriday] = useState('');
    const [saturday, setSaturday] = useState('');
    const [sunday, setSunday] = useState('');

    const [editionMode, setEditionMode] = useState(false);

    const onChangeFoto = e => {  
        console.log('se llama a cambiar foto');      
        setPhotoUploaded(e.target.files[0]);                
    }

    const handleSaveEstablishment = async () => {

        setLoading(true);

        //verify required fields
        if(name.trim() === '' || address.trim() === '' || tel.trim() === ''){            
            showAlert('Todos los campos son obligatorios!', 'alert-danger');
            setLoading(false); 
            return;
        }

        const establishment = {
            'name' : name,
            'address' : address,
            'tel' : tel,
            'owner' : user._id,
            'category' : category,                        
            'monday' : monday,
            'tuesday' : tuesday,
            'wednesday' : wednesday,
            'thursday' : thursday,
            'friday' : friday,
            'saturday' : saturday,
            'sunday' : sunday,
            'services' : listOfAddedServices           
        };

        /*
        In this line we convert the uploaded image to base64 in order to send it to 
        the back end as a string.         
        */
        let photo2base64 = '';
        if(photoUploaded){
            photo2base64 = await image2base64(URL.createObjectURL(photoUploaded));
            establishment.photo_1 = photo2base64;
        }    

        if(!editionMode) {
            createEstablishment(establishment);
        } else {
            updateEstablishment(establishment, selected_stablishment._id);
        }                   

        setTimeout(() => {                        
            setLoading(false);            
            setPhotoUploaded(null);
        }, 800);
    }

    const handleAddService = service => {
        if(!listOfAddedServices.includes(service._id)){
            addService(service._id);        
        }
        else {
            removeService(service._id);
        }        
    }

    useEffect(()=> {               
        if(alert_message){
            showAlert(alert_message.msg, alert_message.category);
        }
    }, [alert_message]);
    
    useEffect( ()=> { 
        
        //First of all, clean the current state        
        listOfAddedServices.map(id => (
            removeService(id)
        ));

        setPhotoUploaded(null);
        setName('');
        setAddress('');
        setTel('');
        setCategory('');
        setMonday('');
        setTuesday('');
        setWednesday('');
        setThursday('');
        setFriday('');
        setSaturday('');
        setSunday(''); 
        
        //If there is a selected establishment, then we need to set up the state with the value of this..
        //The edition mode needs to be set as well...
        if(selected_stablishment){
            setPhotoUploaded(null);
            setName(selected_stablishment.name);
            setAddress(selected_stablishment.address);
            setTel(selected_stablishment.tel);
            setCategory(selected_stablishment.category);
            setMonday(selected_stablishment.monday);
            setTuesday(selected_stablishment.tuesday);
            setWednesday(selected_stablishment.wednesday);
            setThursday(selected_stablishment.thursday);
            setFriday(selected_stablishment.friday);
            setSaturday(selected_stablishment.saturday);
            setSunday(selected_stablishment.sunday);                                    

            selected_stablishment.services.map(service => (
                addService(service._id)
            ));                

            setEditionMode(true);
        }
    }, [selected_stablishment]);

    return (  
        <div className="modal" id="modal_new_stablishment" role="dialog">
            <div className="modal-dialog modal-lg">                                                                
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">INGRESE DATOS DEL COMPLEJO</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body modal_new_field">                        
                       <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">                                    
                                    <input type="text" 
                                           className="form-control-edited" 
                                           id="inputField" 
                                           placeholder="Nombre"
                                           name={name}
                                           value={name}
                                           onChange={(e) => { setName(e.target.value) }}
                                           />
                                </div>                           
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">                                    
                                    <input type="text" 
                                           className="form-control-edited" 
                                           id="inputField" 
                                           placeholder="Dirección"
                                           name={address}
                                           value={address}
                                           onChange={(e) => { setAddress(e.target.value) }}
                                           />
                                </div>                           
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">                                    
                                    <input type="text" 
                                           className="form-control-edited" 
                                           id="inputField" 
                                           placeholder="Teléfono"
                                           name={tel}
                                           value={tel}
                                           onChange={(e) => { setTel(e.target.value) }}
                                           />
                                </div> 
                                <div className="form-group col-md-6">                                    
                                    <select id="inputSportType" 
                                            className="form-control-edited"
                                            value={category}
                                            onChange={(e) => { setCategory(e.target.value) }}
                                            >
                                        <option selected>-- Seleccione Categoría --</option>                                                                                
                                        {
                                          listOfCategories.map(type => (
                                            <option value={type._id}>{type.description}</option>
                                          ))  
                                        }
                                    </select>
                                </div>                                                        
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">                                    
                                    <div className="accordion" id="accordionNewEstablishment">
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                                    Horarios de atención
                                                </a>                                                
                                            </div>
                                            <div id="collapseOne" className="collapse" data-parent="#accordionNewEstablishment">
                                                <div className="card-body">
                                                    <div className="form-row">
                                                        <DayOfWeek day="Lunes" fnSetTimes={setMonday} value={monday}/>
                                                        <DayOfWeek day="Martes" fnSetTimes={setTuesday} value={tuesday}/>
                                                        <DayOfWeek day="Miércoles" fnSetTimes={setWednesday} value={wednesday}/>
                                                    </div>
                                                    <div className="form-row">
                                                        <DayOfWeek day="Jueves" fnSetTimes={setThursday} value={thursday}/>
                                                        <DayOfWeek day="Viernes" fnSetTimes={setFriday} value={friday}/>
                                                        <DayOfWeek day="Sábado" fnSetTimes={setSaturday} value={saturday}/>
                                                    </div>
                                                    <div className="form-row">
                                                        <DayOfWeek day="Domingo" fnSetTimes={setSunday} value={sunday}/>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>   
                                        <div className="card">    
                                            <div className="card-header">
                                                <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                                                    Servicios ofrecidos
                                                </a>
                                            </div>
                                            <div id="collapseTwo" className="collapse" data-parent="#accordionNewEstablishment">
                                                <div className="card-body service-boxes">                                                    
                                                    { listOfServices.map(service => (                                                        
                                                        <div className={listOfAddedServices.includes(service._id) ? "service-box servicio-agregado" : "service-box servicio-disponible"}
                                                             onClick={ ()=> handleAddService(service)}>
                                                              <p>{service.description}</p>  
                                                        </div>
                                                    ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                      

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputPrice">Foto</label>
                                    <div className="card">               
                                        <img src={
                                                !selected_stablishment
                                                    ?
                                                    photoUploaded
                                                        ? URL.createObjectURL(photoUploaded) 
                                                        : SinImagen
                                                    : !photoUploaded  
                                                      ? selected_stablishment.photo_1 !== ''
                                                         ? `${backEndURL}${selected_stablishment.photo_1}`
                                                         : SinImagen
                                                      : URL.createObjectURL(photoUploaded)         
                                                } 
                                            class="card-img-top" alt="..."
                                        />    
                                        <div class="card-body">
                                            <input type="file" accept="image/png, image/jpeg"                                                   
                                                   name="photo" onChange={onChangeFoto}/>                                                         
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
                        <button type="button" class="btn btn-primary btn-sm" onClick={handleSaveEstablishment}>Guardar</button>
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>            
            </div>
        </div>   
    );
}
 
export default ModalNewEstablishment;