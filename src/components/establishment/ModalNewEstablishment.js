import React, { useState, useContext, useEffect } from 'react';
import SinImagen from '../../img/sin_imagen.png';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import image2base64 from 'image-to-base64';
import Spinner from '../common/Spinner';
import DayOfWeek from './DayOfWeek';

const ModalNewEstablishment = () => {
    
    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const establishmentContext = useContext(EstablishmentContext);    
    const { listOfCategories, alert_message } = establishmentContext;

    const authContext = useContext(AuthContext);            
    const { user } = authContext;

    const [loading, setLoading] = useState(false);             

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [owner, setOwner] = useState('');
    const [category, setCategory] = useState(null);
    const [services, setServices] = useState([]); 
    const [photo, setPhoto] = useState(null);
    
    const [monday, setMonday] = useState('');
    const [tuesday, setTuesday] = useState('');
    const [wednesday, setWednesday] = useState('');
    const [thursday, setThursday] = useState('');
    const [friday, setFriday] = useState('');
    const [saturday, setSaturday] = useState('');
    const [sunday, setSunday] = useState('');

    const onChangeFoto = e => {
        setPhoto(e.target.files[0]);                
    }

    const handleSaveEstablishment = async () => {

        setLoading(true);

        //verify required fields
        if(name.trim() === '' || address.trim() === '' || tel.trim() === ''){            
            showAlert('Todos los campos son obligatorios!', 'alert-danger');
            setLoading(false); 
            return;
        }

        /*
        In this line we convert the uploaded image to base64 in order to send it to 
        the back end as a string.         
        */
        const photo2base64 = await image2base64(URL.createObjectURL(photo));

        const establishment = {
            'name' : name,
            'address' : tel,
            'tel' : tel,
            'owner' : user._id,
            'category' : category,            
            'photo_1': photo2base64            
        };
        //createEstablishment(establishment);

        setTimeout(() => {                        
            setLoading(false);            
        }, 800);
    }

    useEffect(()=> {               
        if(alert_message){
            showAlert(alert_message.msg, alert_message.category);
        }
    }, [alert_message])

    return (  
        <div className="modal" id="modal_new_stablishment" role="dialog">
            <div className="modal-dialog modal-lg">                                                                
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">INGRESE DATOS DEL COMPLEJO</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                           onChange={(e) => { setTel(e.target.value) }}
                                           />
                                </div> 
                                <div className="form-group col-md-6">                                    
                                    <select id="inputSportType" 
                                            className="form-control-edited"
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
                                    <div className="accordion">
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                                    Horarios de atención
                                                </a>                                                
                                            </div>
                                            <div id="collapseOne" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="form-row">
                                                        <DayOfWeek day="Lunes" fnSetTimes={setMonday}/>
                                                        <DayOfWeek day="Martes" fnSetTimes={setTuesday}/>
                                                        <DayOfWeek day="Miércoles" fnSetTimes={setWednesday}/>
                                                    </div>
                                                    <div className="form-row">
                                                        <DayOfWeek day="Jueves" fnSetTimes={setThursday}/>
                                                        <DayOfWeek day="Viernes" fnSetTimes={setFriday}/>
                                                        <DayOfWeek day="Sábado" fnSetTimes={setSaturday}/>
                                                    </div>
                                                    <div className="form-row">
                                                        <DayOfWeek day="Domingo" fnSetTimes={setSunday}/>                                                        
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
                                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    Configuracion de Horarios
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