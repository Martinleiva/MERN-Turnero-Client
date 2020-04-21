import React, { useContext, Fragment } from 'react';
import EstablishmentContext from '../../../context/establishment/establishmentContext';


const EstablishmentTable = ({ field }) => {

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Horario</th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miércoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                    <th scope="col">Sabado</th>
                    <th scope="col">Domingo</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>15:00 - 16:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                    <td>16:00 - 17:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                    <td>17:00 - 18:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>

                <tr>
                    <td>18:00 - 19:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>

                <tr>
                    <td>19:00 - 20:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>

                <tr>
                    <td>20:00 - 21:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>

                <tr>
                    <td>21:00 - 22:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>

                <tr>
                    <td>22:00 - 23:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>

                <tr>
                    <td>23:00 - 00:00</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                    <td>Disponible</td>
                </tr>
            </tbody>
        </table>
    );
};

export default EstablishmentTable;