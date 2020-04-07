import React, { useState } from 'react';

const ModalNewField = () => {

    const [ photo, setPhoto] = useState(null);

    const onChangeFoto = e => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
        console.log(photo);
    }

    return (  
        <div className="modal" id="modal_new_field" role="dialog">
            <div className="modal-dialog">                                                                
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">INGRESE DATOS DE LA CANCHA:</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body modal_new_field">
                        
                       <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputField">Nombre Cancha:</label>
                                    <input type="text" className="form-control-edited" id="inputField" placeholder="Cancha Nº1"/>
                                </div>                           
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputSportType">Tipo de deporte</label>
                                    <select id="inputSportType" className="form-control-edited">
                                        <option selected>-- Seleccione tipo de deporte --</option>
                                        <option>...</option>
                                        <option>Futbol</option>
                                        <option>Paddle</option>
                                        <option>Tenis</option>
                                        <option>Basquet</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputGroundType">Tipo de suelo</label>
                                    <select id="inputGroundType" className="form-control-edited">
                                        <option selected>-- Seleccione tipo de suelo --</option>
                                        <option>...</option>
                                        <option>Cesped Natural</option>
                                        <option>Cesped Sintético</option>
                                        <option>Cemento</option>
                                        <option>Piso</option>
                                        <option>Goma</option>
                                    </select>
                                </div>                                
                            </div>

                            <div className="form-row">                          
                                <div className="form-group col-md-6">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customRoofed"/>
                                        <label className="custom-control-label" for="customRoofed">Cancha Techada</label>
                                    </div>
                                </div>   

                                 <div className="form-group col-md-6">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customLighting"/>
                                        <label className="custom-control-label" for="customLighting">Iluminación</label>
                                    </div>
                                </div>                 

                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputNumberPlayers">Cantidad de Jugadores</label>
                                    <select id="inputNumberPlayers" className="form-control-edited">
                                        <option selected>-- Cantidad de Jugadores --</option>
                                        <option>...</option>
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
                                        <input type="text" className="form-control-edited" id="inputPrice" placeholder="$150 por hora"/>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputPrice">Foto de la chancha</label>
                                    <div className="card">
                                        <img src={photo ? photo : null} class="card-img-top" alt="..."/>    
                                        <div class="card-body">
                                            <input type="file" name="photo" onChange={onChangeFoto}/>      
                                        </div>                                                      
                                    </div>                                    
                                </div>                                
                            </div>

                        </form> 

                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-primary btn-sm">Guardar</button>
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>            
            </div>
        </div>   
    );
}
 
export default ModalNewField;