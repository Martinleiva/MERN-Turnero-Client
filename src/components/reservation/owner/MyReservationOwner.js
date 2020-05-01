import React, {useContext, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Establishment from './Establishment';
import EstablishmentContext from '../../context/establishment/establishmentContext';
import AuthContext from '../../context/authentication/authContext';


const MyReservationOwner = () => {
    const establishmentContext = useContext(EstablishmentContext);
    const authContext = useContext(AuthContext);

    const [loading, setLoading] = useState(true); 

    const { user } = authContext;
    const { listOfStablishments, amount_of_establishment, 
            getStablishmentByOwner, getTypesOfSports,            
            getTypesOfGrounds, getCategories, getServices,
            setSelectedEstablishment } = establishmentContext;
            
    return (
        <Fragment>
        <div className="container">
        <div className="row">
            <div className="col col-lg-12">
                <h1>Bienvenido Dueño</h1>
                <div className="container-owner">

                        <input id="myInput" type="text" placeholder="Search.."/>
                            
                           {/* <select>
                                <option >Seleccionar complejo</option>
                                <option value="COMPLEJO 1">complejo 1</option>
                                <option value="COMPLEJO 2">complejo 2</option>
                                <option value="COMPLEJO 3">complejo 3</option>
                                <option value="COMPLEJO 4">complejo 4</option>
                           </select>*/}

                          
                        
                       <table>
                            <thead>
                            <tr>
                                <th>COMPLEJO</th>
                                <th>CANCHA</th>
                                <th>FECHA</th>
                                <th>HORA</th>
                                <th>DURACION</th>
                                <th>CLIENTE</th>
                                <th>ACCIONES</th>
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
                            {/*<tfoot>
            <tr>
                <th>COMPLEJO</th>
                <th>CANCHA</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>DURACION</th>
                <th>CLIENTE</th>
            </tr>
                            </tfoot>*/}
    </table>
                        
   

            </div>
           </div>
        </div>
        </div>
        </Fragment>
      );
}
 
export default MyReservationOwner;