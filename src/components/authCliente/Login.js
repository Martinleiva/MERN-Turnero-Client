import React, { Fragment } from 'react';

const Login = () => {
    return (
      <div className="div-form-signin">  
        <div className="contenedor-form-signin">
        <form className="form-login">
            <h1 className="h2 mb-3 font-weight-bold">Iniciar Sesión</h1>
            <label for="inputEmail" className="sr-only">Email</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email"/>
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
            <div className="checkbox mb-2 mt-3">
                <label>
                <input type="checkbox" value="remember-me"/> Recordar mi sesión
                </label>
            </div>
            <div className="checkbox mb-4 mb-3">
                <a href="">Olvide mi contraseña</a>
            </div>
            <button className="btn btn-lg btn-success btn-block mb-4" type="submit">Ingresar</button>            
            <a href="">¿No tiene una cuenta? Registrate aqui</a>                                        
        </form> 
        </div>                
     </div>            
    );
}
 
export default Login;