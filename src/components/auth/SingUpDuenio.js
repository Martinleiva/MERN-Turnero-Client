import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import InputMask from 'react-input-mask';
import Header from '../../components/inicio/Header';
import Footer from '../../components/inicio/Footer';


const SingUpDuenio = (props) => {

    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, userRegister } = authContext;

    // In case of the user has been authenticated or registred or duplicate register 
    useEffect( () => {

        if(authenticated) {
            props.history.push('/dash-owner'); // Screen user authenticated
        }

        if(message) {
            showAlert(message.msg, message.category);
        }
        //eslint-disable-next-line
    }, [message, authenticated, props.history]);

    //State for singup
    const [userduenio, guardarUserduenio] = useState({
        last_names: '',
        names: '',
        tel: '',
        cuit: '',
        email: '',
        password: '',
        confirm: '',
        user_type: 'Dueño'
    });

    const {last_names, names, tel, cuit, email, password, confirm, user_type} = userduenio;

    const onChange = e => {
        guardarUserduenio({
            ...userduenio,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        //Unmask inputs tel and cuit
        const normalizeTel = tel.replace(/[^0-9]/g, '');
        const normalizeCuit = cuit.replace(/[^0-9]/g, '');

        // Validate that each field is not empty
        if(
            last_names.trim() === '' || 
            names.trim() === '' ||
            tel.trim() === '' ||
            cuit.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirm.trim() === '' ) {
                showAlert('Todos los campos son obligatorios!', 'alert-danger');
                return;
            }

        // Tel < 12 characters
        if(normalizeTel.length < 12) {
            showAlert('Ingresar numero de contacto válido!', 'alert-danger');
            return;
        }

        //CUIT < 11 characters
        if(normalizeCuit.length < 11) {
            showAlert('Ingresar un CUIT válido!', 'alert-danger');
            return;
        }

        //Password 6 characters min
        if(password.length < 6 ) {
            showAlert('Password de al menos 6 caracteres!', 'alert-danger');
            return;
        }

        //Confirm that both passwords are the same
        if(password !== confirm) {
            showAlert('Los Passwords no sol iguales!', 'alert-danger');
            return;
        }

        // Pass it to action
        userRegister({
            last_names,
            names,
            tel: parseInt(normalizeTel),
            cuit: parseInt(normalizeCuit),
            email,
            password,
            user_type
        });
        
    }

    return (
        <Fragment>
            <Header />
            <div className="div-form-signin">
                <div className="contenedor-form-signin polaroid">
                
                    <form 
                        className="form-login"
                        onSubmit={onSubmit}
                    >
                        <h1 className="h2 mb-3 font-weight-bold">Nuevo Dueño</h1> 

                        <input 
                            type="text"                 
                            className="form-control" 
                            placeholder="Apellidos"
                            name="last_names"
                            value={last_names}
                            onChange={onChange}
                        /> 

                        <input 
                            type="text"                 
                            className="form-control" 
                            placeholder="Nombres"
                            name="names"
                            value={names}
                            onChange={onChange}
                        /> 

                        <InputMask 
                            /* eslint-disable-next-line */
                            mask='+5\4 999 4999999'                 
                            className="form-control" 
                            placeholder="Teléfono"
                            name="tel"
                            value={tel}
                            onChange={onChange}
                        />

                        <InputMask 
                            mask='99-99999999-9'                 
                            className="form-control" 
                            placeholder="CUIT"
                            name="cuit"
                            value={cuit}
                            onChange={onChange}
                        />

                        <input 
                            type="email"                 
                            className="form-control" 
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={onChange}

                        />            
                        <input 
                            type="password"               
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                        <input 
                            type="password"               
                            className="form-control"
                            placeholder="Confirmar Password"
                            name="confirm"
                            value={confirm}
                            onChange={onChange}
                        />

                        <button 
                            className="btn btn-lg btn-success btn-block mb-4" 
                            type="submit"               
                        >Registrarme
                        </button>                                        
                    </form>
                    {alert ? (<div className={`alert font-weight-bold ${alert.category}`}>{alert.msg}</div>) : null}
                    <Link to={'/singup'}> &lt;&lt; Volver Atrás </Link>

                </div>         
            </div>
            <Footer />
        </Fragment>
    );
};

export default SingUpDuenio;