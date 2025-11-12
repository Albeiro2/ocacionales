import './Register.css';
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from 'react-toastify';
import { images } from '../../assets/assets';

const Register = () =>{
  const { register } = useContext(AuthContext); // usamos el login del context
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: '',
    password:'',
    name:''
  });

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]: value}));
  };


  const handleSubmit = async (e) => {

    e.preventDefault(); // evita recargar la página
    const result = await register (data);

    if (result.ok) {
      // login exitoso
      toast.success("Usuario registrado existosamente!");
      console.log(result.data);
      setError(null);
      // opcional: redirigir a home
      // navigate("/");
    } else {
        toast.error("Ocurrio un error en el registro");
      setError("Usuario o contraseña incorrectos");
    }
  };



    return(
      <div className="register-body" style={{ backgroundImage: `url(${images.fondo})` }}>
        <div className="register-container">
            <div className="register-header">
                <h2>Crear una Cuenta</h2>
                <p>Bienvenido al portal de salud</p>
            </div>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="input-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        onChange={onChangeHandler} 
                        value={data.name} 
                        placeholder="Ingrese su nombre"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        onChange={onChangeHandler} 
                        value={data.email}
                        placeholder="ejemplo@correo.com"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        onChange={onChangeHandler} 
                        value={data.password}
                        placeholder="Cree una contraseña segura"
                    />
                </div>
                <button type="submit" className="register-btn">Registrarse</button>
            </form>
        </div>
    </div>
    );
}

export default Register;