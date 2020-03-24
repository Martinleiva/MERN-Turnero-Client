import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="div-form-signin">  
            <div className="contenedor-form-signin">
            <form 
                className="form-login"
            >
                <h1 className="h2 mb-3 font-weight-bold">Iniciar Sesión</h1>            
                <input 
                    type="email"                 
                    className="form-control" 
                    placeholder="Email"
                    name="email"

                />            
                <input 
                    type="password"               
                    className="form-control"
                    placeholder="Password"
                    name="password"
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
                <a href=""></a>    
                <Link to={'/singup-duenio'}> ¿No tienes una cuenta? Registrate aquí</Link>                                    
            </form>
            
            </div>         
    
        </div>            
    );
};

export default Login;