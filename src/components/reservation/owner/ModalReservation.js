

const ModalReservation = () => {
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
                                           value={name}
                                           onChange={(e) => { setName(e.target.value) }}
                                           />
                                </div>                           
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputSportType">Tipo de deporte</label>
                                    <select id="inputSportType" 
                                            className="form-control-edited"
                                            value={sport_type}
                                            onChange={(e) => { setSport_type(e.target.value) }}                                            
                                            >
                                        <option value="" selected>-- Seleccione tipo de deporte --</option>                                                                                
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
                                            value={ground_type}
                                            onChange={(e) => { setGround_type(e.target.value) }}                                            
                                            >
                                        <option value="" selected>-- Seleccione tipo de suelo --</option>                                                                                
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
                                               checked={is_roofed}
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
                                               checked={has_lighting}                                              
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
                                            value={number_of_players}
                                            onChange={(e) => { setNumber_of_players(e.target.value) }}
                                            >
                                        <option value="0" selected>-- Cantidad de Jugadores --</option>                                        
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
                                               value={price}
                                               onChange={(e) => { setPrice(e.target.value) }}
                                               />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputPrice">Foto</label>
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
                                            class="card-img-top" alt="..."
                                        />  
                                        <div class="card-body">
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
                        <button type="button" class="btn btn-primary btn-sm" onClick={handleSaveField}>Guardar</button>
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>            
            </div>
        </div>
     );
}
 
export default ModalReservation;