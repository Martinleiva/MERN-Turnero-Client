import React from 'react';

const ModalDetailOfField = () => {

    return (

        <div className="modal" id="modal_detail_of_field" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">DETALLES CANCHA</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body modal_detail_field">
                    <form>
                        <div className="form-row-modal-edited">
                            <div className="form-group col-md-12">
                                <div className="card">
                                    <img className="card-img-top" alt="..."/>    
                                                                                     
                                </div>                                                                    </div>                                
                        </div>

                        <div className="form-row">
                            <label for="inputSportType" className="form-group col-md-4">Tipo de deporte: </label>
                            <div className="form-group col-md-7">
                                <input type="text" className="form-control-edited" id="inputSportType" readOnly placeholder="Futbol"/>
                            </div>
                            
                            <label for="inputGroundType" className="form-group col-md-4">Tipo de suelo: </label>
                            <div className="form-group col-md-7">
                                <input type="text" className="form-control-edited" id="inputGroundType" readOnly placeholder="Cemento"/>
                            </div>                            
                        </div>

                        
                        <div className="form-row modal_check"> 
                            <div className="custom-control-inline">
                                <label className="modal_check_label">Cancha Techada</label>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="roofedYes" name="roofedYes"/>
                                <label className="custom-control-label" for="roofedYes">SI</label>
                            </div>

                               
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="roofedNo" name="roofedNo"/>
                                <label className="custom-control-label" for="roofedNo">NO</label>
                            </div>
                        </div>
                         
                        <div className="form-row modal_check"> 
                            <div className="custom-control-inline">
                                <label className="modal_check_label_short">Iluminada</label>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="lightingYes" name="lightingYes"/>
                                <label className="custom-control-label" for="lightingYes">SI</label>
                            </div>

                               
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="lightingNo" name="lightingNo"/>
                                <label className="custom-control-label" for="lightingNo">NO</label>
                            </div>
                        </div>
                        
                        
                        <div className="form-row">
                            <label for="inputNumberPlayers" className="form-group col-md-4">Cantidad de Jugadores:</label>
                            <div class="form-group col-md-4">
                                <input type="text" className="form-control-edited" id="inputNumberPlayers" readOnly placeholder="11"/>
                            </div>                           
                                                    
                        </div>
                        <div className="form-row"> 
                            <label for="inputPrice" className="form-group col-md-4">Precio: </label>
                            <div className="form-group col-md-4">
                                <input type="text" className="form-control-edited" id="inputPrice" readOnly placeholder="120"/>
                            </div>   
                        
                        </div>
                   

                    </form>
                </div>

                <div className="modal-footer-edited">
                    <button type="button" className="btn" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
      );
}
 
export default ModalDetailOfField;