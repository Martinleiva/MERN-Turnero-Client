import React, { useState, useContext } from 'react';
import AuthClienteContext from '../../context/authCliente/authClienteContext';

const Login = () => {

    const authClienteContext = useContext(AuthClienteContext);

    const { message, startSession, setAuthenticatedUser, showAlert } = authClienteContext;

    const [user, saveUser] = useState({
        email : '',
        password : ''
    });

    const handleOnChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const { email, password } = user;

    const onSubmit = e => {
        e.preventDefault();
        
        //verify if email and user are not empty
        if(email.trim() === '' || password.trim() === ''){
            const alert = {
                msg : 'Todos los campos son obligatorios',
                category : 'alert-warnnig'
            }
            showAlert(alert);
            return;
        }

        //start session  
        startSession({ email, password });      
    }

    return (
      <div className="div-form-signin">  
        <div className="contenedor-form-signin">
        <form 
            className="form-login"
            onSubmit={onSubmit}
        >
            <h1 className="h2 mb-3 font-weight-bold">Iniciar Sesión</h1>            
            <input 
               type="email"                 
               className="form-control" 
               placeholder="Email"
               name="email"
               onChange={handleOnChange}
            />            
            <input 
               type="password"               
               className="form-control"
               placeholder="Password"
               name="password"
               onChange={handleOnChange}
            />
            <div className="checkbox mb-2 mt-3">
                <label>
                <input type="checkbox" value="remember-me"/> Recordar mi sesión
                </label>
            </div>
            <div className="checkbox mb-4 mb-3">
                <a href="">Olvide mi contraseña</a>
            </div>
            <button 
                className="btn btn-lg btn-success btn-block mb-4" 
                type="submit"               
            >Ingresar
            </button>            
            <a href="">¿No tienes una cuenta? Registrate aquí</a>                                        
        </form>

        {
            message ? <div className={`${message.category} mt-4`}>
                        {message.msg}
                      </div> 
                    : null
        }
        

        </div>         

     </div>            
    );
}
 
export default Login;