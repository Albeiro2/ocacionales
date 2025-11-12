import './Login.css';
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from 'react-toastify';
import { images } from '../../assets/assets';

const Login = () =>{
  const { login } = useContext(AuthContext); // usamos el login del context
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: '',
    password:''
  });

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]: value}));
  };


  const handleSubmit = async (e) => {

    e.preventDefault(); // evita recargar la página
    const result = await login(data);

    if (result.ok) {
      // login exitoso
      toast.success("Usuario logueado!");
      console.log(result.data.email);
      setError(null);
      // opcional: redirigir a home
      // navigate("/");
    } else {
        toast.error("Credenciales incorrectas");
      setError("Usuario o contraseña incorrectos");
    }
  };



    return(
      <div className="login-body"  style={{ backgroundImage: `url(${images.fondo})` }}>
        <div className="login-container">
            <div className="login-header">
                <h2>Iniciar Sesión</h2>
                <p>Accede a tu portal de salud</p>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        onChange={onChangeHandler} 
                        value={data.email}
                        placeholder="tu@correo.com"
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
                        placeholder="Ingresa tu contraseña"
                    />
                </div>
                <button type="submit" className="login-btn">Entrar</button>
            </form>
        </div>
    </div>
    );
}

export default Login;