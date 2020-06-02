import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import Header from '../../components/inicio/Header';
import Footer from '../../components/inicio/Footer';
import Spinner from '../common/Spinner';

const Login = (props) => {

    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, type_usr, startSession } = authContext;

    const [loading, setLoading] = useState(false);

    // In case of the user has been authenticated or registred or duplicate register 
    useEffect( () => {

        if(authenticated && type_usr === 'Cliente') {
            setLoading(false);         
            if(localStorage.getItem('filters') || localStorage.getItem('search_sport_type')) {
                props.history.push('/search-result'); 
            } else {
                props.history.push('/client-search'); // Screen user authenticated
            }            
        } 

        if (authenticated && type_usr === 'Dueño') {
            setLoading(false);
            props.history.push('/my-establishments');
        }

        if(message) {
            setLoading(false);
            showAlert(message.msg, message.category);
        }

    }, [message, authenticated,props.history]);

    const [user, saveUser] = useState({
        email : '',
        password : '',
        user_type: '',
    });

    const handleOnChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const { email, password, user_type } = user;

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);
        
        //verify if email and user are not empty
        if(email.trim() === '' || password.trim() === ''){
            
            showAlert('Todos los campos son obligatorios!', 'alert-danger');
            setLoading(false);
            return;
        }

        //start session  
        startSession({ email, password, user_type });    
    }

    return (
        <Fragment>
            <Header />
            <div className="div-form-signin">                  
                <div className="contenedor-form-signin polaroid">
                    {
                        loading ? <Spinner/> : null
                    }
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
                            <a href="#!">Olvide mi contraseña</a>
                        </div>
                        <button 
                            className="btn btn-lg btn-success btn-block mb-4" 
                            type="submit"               
                        >Ingresar
                        </button>            
                                                            
                    </form>
                    
                    {alert ? (
                        <div className={`alert font-weight-bold ${alert.category}`}>
                            {alert.msg}
                        </div>) : null
                    }

                    <Link to={'/singup'}>¿No tienes una cuenta? Registrate aquí </Link> 

                </div>         

            </div>
            <Footer />
        </Fragment>           
    );
}
 
export default Login;