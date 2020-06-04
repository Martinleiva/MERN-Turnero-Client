import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import AuthContext from '../../context/authentication/authContext';
import AlertContext from '../../context/alerts/alertContext';
import Swal from 'sweetalert2';



const MyAccountClient = () => {

    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { user, updateUser } = authContext;

    const [ data, setData] = useState({
        _id : user ? user._id : '',
        names: user ? user.names : '',
        tel: user ? user.tel : '',
        email: user ? user.email : ''
    });

    // const onChangePhoto = e => {
    //     setProfilePhoto(e.target.files[0]);                
    // }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // validate form
        if (
            data.names.trim() === '' &&
            data.tel.trim() === '' &&
            data.email.trim() === '' 
            ){
                showAlert('Todos los campos excepto la foto son obligatorios', 'alert-danger');
                return;
            }  

        Swal.fire(
            'Modificación exitosa!',
            'Tus cambios se guardaron de manera correcta.',
            'success'
          )

        // user data save changer
        updateUser(data);
    }

    return ( 
        <Fragment>
            <Header />
            <div className="div-form-signin">  
                <div className="contenedor-form-signin polaroid">
                    <form onSubmit={onSubmit} >

                        <h1>Mi cuenta</h1>
                        
                        <div className="fotoPerfil">
                            <img src="https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_554688468.jpg" width={150} height={150} className="img-thumbnail" />
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="names" value={data.names} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Telefono</label>
                            <div className="col-sm-10">
                            <input type="input" className="form-control" name="tel" value={data.tel} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" name="email" value={data.email} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Foto</label>
                            <div className="col-sm-10">
                                <input type="file" accept="image/png, image/jpeg" name="profile_photo" />   {/* onChange={onChangePhoto} */} 
                                <small id="fileHelp" className="form-text text-muted">Su foto solo sera usada para su perfil.</small>
                            </div>
                        </div>

                        <button className="btn btn-lg btn-success btn-block mb-4" type="submit">
                            Guardar cambios 
                        </button>

                        <Link className="btn btn-lg btn-warning btn-block mb-4" type="button" to={'/my-establishments'}>  Volver atrás </Link>

                        {alert ? (<div className={`alert font-weight-bold ${alert.category}`}>{alert.msg}</div>) : null}
                    </form>
                </div>
            </div>      
        </Fragment>
     );
}
 
export default MyAccountClient;
