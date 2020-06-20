
import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import reservationContext from '../../../context/reservations/reservationContext';
import establishmentContext from '../../../context/establishment/establishmentContext';
import AuthContext from '../../../context/authentication/authContext';

import { ChevronDoubleUp, Pencil, Plus } from 'react-bootstrap-icons';

import { withStyles } from '@material-ui/core/styles';
import FabGreen from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Add from '@material-ui/icons/Add';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalTitle from 'react-bootstrap/ModalTitle';

const localizer = momentLocalizer(moment);

let id_reserva = null;

const ReservationTableOwner = () => {

    const reservationsContext = useContext(reservationContext);
    const { 
        reservationsfield,
        getReservationsByField,
        addReservation ,
        deleteReservation,
        updateReservationStatus
    } = reservationsContext;

    const establishmentsContext = useContext(establishmentContext);
    const { selected_field, selected_stablishment } = establishmentsContext;

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    //state of reservation
    const [reservation, setReservation] = useState({
        title: '',

    });

    //id de reservation on click
    const [id_res, setId_res] = useState({});

    const handleSelect = ({ start, end }) => {

        const nombre = window.prompt('Su nombre: ');

        let estado_res='';
        if(!id_res.estado){
            estado_res='Pendiente';
        }else{
            estado_res='Aprobada';
        }

        if (nombre) {
            reservation.field_id = selected_field._id;
            setReservation({
                ...reservation,
                start,
                end,
                title: user.names,
                field_id: selected_field._id, // id de la cancha actual
                fieldName: selected_field.name,
                establishment: selected_stablishment.name,
                user_id: user._id, //id del usuario actual
                state: 'Pendiente'
                
            });
            addReservation({
                ...reservation,
                start,
                end,
                title: user.names,
                field_id: selected_field._id, // id de la cancha actual
                fieldName: selected_field.name,
                establishment: selected_stablishment.name,
                user_id: user._id, //id del usuario actual
                state: 'Pendiente' 
            });
        }

        //Obtain reservations 
        getReservationsByField(selected_field._id);
        
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        //var backgroundColor = '#' + event.hexColor;
        let style = {};
        reservationsfield.map((reservation) => {
            if(reservation.estado === true ){
                style = {
                    backgroundColor: 'yellow',
                    borderRadius: '2px',
                    opacity: 0.9,
                    color: 'black',
                    border: '1px solid black',
                    fontWeight: 'bold',
                    height: '50%'
                };
                
            }else{
                style = {
                    backgroundColor: 'yellow',
                    borderRadius: '2px',
                    opacity: 0.9,
                    color: 'black',
                    border: '1px solid black',
                    fontWeight: 'bold',
                    height: '50%'
                };
            }
            
        })
        /*if(!reservation.estado) { 
            color='yellow';
        }else {
            color='green';
        }*/
        /*const style = {
            backgroundColor: color,
            borderRadius: '2px',
            opacity: 0.9,
            color: 'black',
            border: '1px solid black',
            fontWeight: 'bold',
            height: '50%'
        };*/
        return {
            style: style
        };
    }

    useEffect(() => {
        getReservationsByField(selected_field._id);
        
    }, []);


    

    const handleShow = id => { 
        id_reserva = id; 
        //console.log(id_reserva);
        setShow(true);
      }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    deleteReservation(id);
    //console.log(id);
    getReservationsByField(selected_field._id);
    setShow(false)
    
    }
  const handleChangeStatusRes = (id) => {

    //getReservationsByField(selected_field._id);

    /*reservationsfield.map(reservation => reservation._id === id 
        ? setReservation({estado:true})  : reservation)*/

    

    updateReservationStatus(id);

    // console.log(id_reserva);

    setShow(false)

  }

       console.log(reservationsfield);
    
    return ( 
        <Fragment>
        <div>
            <Calendar
                className="container"
                localizer={localizer}
                events={reservationsfield}
                selectable={true}
                defaultView={'week'}
                views={{ week: true, day: true }}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 450 }}
                onSelectEvent={event => handleShow(event._id)}
                onSelectSlot={handleSelect}
                messages={{
                    next: "-->",
                    previous: "<--",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día"
                }}
                eventPropGetter={eventStyleGetter}
            >
            </Calendar>
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Elija las opciones para la Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Button type="button" className="btn btn-success" variant="secondary" onClick={() => {handleChangeStatusRes(id_reserva)}}>
                            Aceptar
                        </Button>
                    </div>
                    <div className="col">
                        <Button className="btn btn-warning" variant="secondary" onClick={handleClose}>
                            Modificar
                        </Button>
                    </div>
                    <div className="col">
                        <Button type="button" className="btn btn-danger" variant="secondary" onClick={() => {handleDelete(id_reserva)}}>
                            Eliminar
                        </Button>
                    </div>
                </div>
                
            </div>
            
            
            
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-secondary" variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

        </Fragment>
     );
}
 
export default ReservationTableOwner;