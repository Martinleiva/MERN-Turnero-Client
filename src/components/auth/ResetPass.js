import React, { useState, useContext, useEffect, Fragment } from 'react';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import Header from '../inicio/Header';
import Footer from '../inicio/Footer';


const ResetPass = (props) => {

        //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { setAuthenticatedUser, sendNewPass, message} = authContext;

    useEffect(() => {
        setAuthenticatedUser();
    }, []);

    useEffect( () => {
        if(message) {
            showAlert(message.msg, message.category);
        }
    }, [message]);

    const [pass, setPass] = useState({
        password : '',
        password2 : ''
    });


    const handleOnChange = e => {
        setPass({
            ...pass,
            [e.target.name] : e.target.value
        })
    }

    const { password, password2 } = pass;

    const onSubmit = e => {
        e.preventDefault();
        
        //verify if password not empty
        if( password.trim() === '' && password2.trim() === ''){
            showAlert('Debe completar su nueva contraseña', 'alert-danger');
            return;
        }

        if( password !== password2){
            showAlert('Las contraseñas ingresadas no son iguales', 'alert-danger');
            return;
        }

        // enviar password algun context para que viaje al backend
        sendNewPass(pass);
    }
        
    return (
        <Fragment>
            <Header />
            <div className="div-form-signin">  
                <div className="contenedor-form-signin polaroid">
                    <form className="form-login" onSubmit={onSubmit}>
                        <h1 className="h2 mb-3 font-weight-bold">Nueva contraseña</h1> 

                        <input 
                            type="password"                 
                            className="form-control" 
                            placeholder="Ingrese su nueva contraseña"
                            name="password"
                            onChange={handleOnChange}
                        /> 

                        <input 
                            type="password"                 
                            className="form-control" 
                            placeholder="Repita la contraseña ingresada"
                            name="password2"
                            onChange={handleOnChange}
                        />             

                        <button className="btn btn-lg btn-success btn-block mb-4" type="submit">
                            Confirmar
                        </button>     

                    </form>

                    {alert ? (<div className={`alert font-weight-bold ${alert.category}`}>{alert.msg}</div>) : null}
        
                </div>         
            </div>

            <Footer />
        </Fragment>           
    );
}
 
export default ResetPass;