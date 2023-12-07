import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [fromData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('userData'));
  
    if (Array.isArray(data)) {
      const user = data.find(u => u.email === fromData.email && u.password === fromData.password);
  
      if (user) {
        localStorage.setItem('isLogged', true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast.success("Inicio de sesión exitoso");
        navigate("/");
      } else {
        toast.error("Datos incorrectos");
      }
    } else {
      toast.error("No hay datos registrados");
    }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...fromData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <section>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesion</h1>
        <div className="input-field">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
            value={fromData.email}
          />
        </div>
        <div className="input-field">
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Contraseña"
            onChange={handleChange}
            value={fromData.password}
          />
        </div>
        <button type="submit">Iniciar Sesion</button>
      </form>
      No tienes una cuenta? <NavLink to={"/register"}>Registrate!</NavLink>
      <br />
      <NavLink to={"/"}>Inicio</NavLink>
    </div>
  </section>
  )
}

export default Login