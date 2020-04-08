import React, { Fragment, useContext, useState,useEffect} from 'react';
import HeaderOwner from '../../common/HeaderOwner';
import AuthContext from '../../../context/authentication/authContext';
     

const MyAccountOwner = () => {

    const authContext = useContext(AuthContext);
    const { user, updateUser, userRegister} = authContext;                   

    const [ data, setData] = useState({
        
        names: user ? user.names : '',
        last_names: user ? user.last_names : '',
        tel: user ? user.tel : '',
        cuit: user ? user.cuit : '',
        email: user ? user.email : '',
        _id : user ? user._id : ''
    });


    const handleChange = (e) => {
        console.log(data);
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        updateUser(data);
    }
      

    return ( 
        <Fragment>
            <HeaderOwner />
            <div className="div-form-signin">  
                <div className="contenedor-form-signin polaroid">
                    <form onSubmit={onSubmit} >
                        <h2>Mi cuenta</h2>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="names" value={data.names} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Apellido</label>
                            <div className="col-sm-10">
                            <input type="input" className="form-control" name="last_names" value={data.last_names} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Telefono</label>
                            <div className="col-sm-10">
                            <input type="input" className="form-control" name="tel" value={data.tel} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">CUIT</label>
                            <div className="col-sm-10">
                            <input type="input" className="form-control" name="cuit" value={data.cuit} onChange={handleChange} />
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
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                            <small id="fileHelp" className="form-text text-muted">Su foto solo sera usada para su perfil.</small>
                            </div>
                        </div>

                        <button className="btn btn-lg btn-success btn-block mb-4" type="submit">
                            Guardar cambios
                        </button>      
                        
                    </form>
                </div>
            </div>      
        </Fragment>
     );
}
 
export default MyAccountOwner;