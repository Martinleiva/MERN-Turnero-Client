import React, {useContext, useEffect, Fragment} from 'react';


const ContainerOwner = () => {

    /*Capturar el complejo seleccionado*/
    const onChange = () =>{

    }

    return ( 
        <Fragment>
        <div className="container">
        <div className="row">
            <div className="col col-lg-12">
                <h1>Bienvenido Dueño</h1>
                <div class="container-owner">
                        <h2>Ver listado de turnos pendientes</h2>
                        <p>Type something in the input field to search the table for first names, last names or emails:</p>  
                        <form>
                            <div class="form-row">
                                <div class="col">
                                <input type="text" id="myInput" class="form-control" placeholder="Nombre del Complejo"/>
                                </div>
                                <div class="col">
                                <input type="text" id="myInput2" class="form-control" placeholder="Nombre de cancha"/>
                                </div>
                                <div class="col">
                                <input type="text" id="myInput2" class="form-control" placeholder="Fecha reservada"/>
                                </div>
                                <div class="col">
                                <input type="text" id="myInput2" class="form-control" placeholder="Nombre cliente"/>
                                </div>
                            </div>
                        </form>
                        
                        <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
                        <input class="form-control" id="myInput2" type="text" placeholder="Search.."/>
                            
                            <select class="form-control" id="select1">
                                <option >Seleccionar complejo</option>
                                <option value="complejo 1">complejo 1</option>
                                <option value="complejo 2">complejo 2</option>
                                <option value="complejo 3">complejo 3</option>
                                <option value="complejo 4">complejo 4</option>
                            </select>
                        
                        <table class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th scope="col">COMPLEJO</th>
                                <th scope="col">CANCHA</th>
                                <th scope="col">FECHA</th>
                                <th scope="col">HORA</th>
                                <th scope="col">DURACION</th>
                                <th scope="col">CLIENTE</th>
                                <th scope="col">ACCIONES</th>
                            </tr>
                            </thead>
                            <tbody id="myTable">
                            <tr>
                                <td>COMPLEJO 1</td>
                                <td>CANCHA 1</td>
                                <td>18/04/2020</td>
                                <td>john@example.com</td>
                            </tr>
                            <tr>
                                <td>COMPLEJO 2</td>
                                <td>CANCHA 1</td>
                                <td>20/04/2020</td>
                                <td>mary@mail.com</td>
                            </tr>
                            <tr>
                                <td>COMPLEJO 2</td>
                                <td>CANCHA 2</td>
                                <td>20/04/2020</td>
                                <td>july@greatstuff.com</td>
                            </tr>
                            <tr>
                                <td>COMPLEJO 1</td>
                                <td>CANCHA 2</td>
                                <td>19/04/2020</td>
                                <td>a_r@test.com</td>
                            </tr>
                            <tr>
                                <td>COMPLEJO 1</td>
                                <td>CANCHA 2</td>
                                <td>19/04/2020</td>
                                <td>a_r@test.com</td>
                            </tr>
                            <tr>
                                <td>COMPLEJO 1</td>
                                <td>CANCHA 3</td>
                                <td>19/04/2020</td>
                                <td>a_r@test.com</td>
                            </tr>
                            <tr>
                                <td>COMPLEJO 1</td>
                                <td>CANCHA 3</td>
                                <td></td>
                                <td>a_r@test.com</td>
                            </tr>
                            <tr>
                                <td>COMPLEJO 1</td>
                                <td>CANCHA 3</td>
                                <td>a_r@test.com</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        <p>Note that we start the search in tbody, to prevent filtering the table headers.</p>
                    </div>
               {/* <div className="tab-body">
                    <ul class="nav nav-pills nav-justified tab-container nav-line" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">COMPLEJO 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">COMPLEJO 2</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active tab-body" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h1>Info Complejo 1</h1>
                    <form>
                        <div className="row">
                            <div class="col">
                                    <label htmlFor="cancha">Seleccione un Cancha</label>
                                    <select 
                                        onChange={onChange}
                                        class="form-control form-control-lg" 
                                        id="cancha"
                                        type="text"
                                        >
                                            <option>CANCHA 1</option>
                                            <option>CANCHA 2</option>
                                            <option>CANCHA 3</option>
                                            <option>CANCHA 4</option>
                                            <option>CANCHA 5</option>
                                    </select>
                            </div>
                            <div class="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                    </form>
                    <table className="table table-hover table-style">
                        <thead className="table-success">
                            <tr>
                            <th scope="col">COMPLEJO</th>
                            <th scope="col">CANCHA</th>
                            <th scope="col">FECHA</th>
                            <th scope="col">HORA</th>
                            <th scope="col">DURACION</th>
                            <th scope="col">CLIENTE</th>
                            <th scope="col">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>COMPLEJO 1</td>
                            <td>COMPLEJO 2</td>
                            <td>COMPLEJO 1</td>
                            <td>COMPLEJO 2</td>
                            <td>COMPLEJO 2</td>
                            <td>COMPLEJO 1</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>CANCHA 1</td>
                            <td>CANCHA 2</td>
                            <td>CANCHA 5</td>
                            <td>CANCHA 1</td>
                            <td>CANCHA 5</td>
                            <td>CANCHA 1</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h1>Info Complejo 2</h1>
                    </div>
                </div>

             </div>*/}
           </div>
        </div>
        </div>
        </Fragment>
     );
}
 
export default ContainerOwner;