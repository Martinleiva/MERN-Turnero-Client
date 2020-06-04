import React, { useState, useContext, Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import Header from '../inicio/Header';
import Footer from '../inicio/Footer';
import Swal from 'sweetalert2';


const ForgetPass = () => {

    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, sendMail} = authContext;

    // shows the error message in case the email is not registered
    useEffect( () => {
        if(message) {
            showAlert(message.msg, message.category);
        }
    }, [message]);

    const [usermail, setUserMail] = useState({
        email : ''
    });

    const [resetPass, setResetPass ] = useState(false)

    const handleOnChange = e => {
        setUserMail({
            ...usermail,
            [e.target.name] : e.target.value
        })
    }

    const { email } = usermail;

    const onSubmit = e => {

        e.preventDefault();

        //verify if email not empty
        if( email.trim() === '' ){
            showAlert('Debe completar con su Email', 'alert-danger');
            return;
        }

        //send the email to the registered user
        sendMail(usermail);

        Swal.fire(
            'Correo enviado!',
            'Revisa tu cuenta de correo electronico y continua con las instrucciones.',
            'success'
        )
    }

    return (
        <Fragment>
            <Header />
            <div className="div-form-signin">  
                <div className="contenedor-form-signin polaroid">
                    <form className="form-login" onSubmit={onSubmit}>
                        <h1 className="h2 mb-3 font-weight-bold">Olvide mi contraseña</h1> 

                        <input 
                            type="email"                 
                            className="form-control" 
                            placeholder="Ingrese su email"
                            name="email"
                            onChange={handleOnChange}
                        />            

                        <Link className="btn btn-lg btn-warning btn-block mb-4 mt-3" type="button" to={'/login'}>
                            Volver atrás 
                        </Link>

                        <button className="btn btn-lg btn-success btn-block mb-4" type="submit">
                            Enviar 
                        </button>     

                    </form>

                    {/* shows the error alerts that are from here and the backend*/}
                    {alert ? (<div className={`alert font-weight-bold ${alert.category}`}>{alert.msg}</div>) : null}
        
                </div>         
            </div>

            <Footer />
        </Fragment>           
    );
}
 
export default ForgetPass;