import React, { useState } from "react";
import "./register.css"
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [registros, setRegistros] = useState(
    JSON.parse(localStorage.getItem('userData')) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    // Intenta obtener los usuarios actuales, asegurándote de que sea un array
    let currentUsers = JSON.parse(localStorage.getItem("userData"));
    if (!Array.isArray(currentUsers)) {
      currentUsers = []; // Si no es un array, inicializa como un array vacío
    }
    if (!regex.test(formData.password)) {
      toast.error("Contraseña no valida");
      return;
    }
    if(formData.password !== formData.confirmPassword) {
      toast.error("Contraseña no coinciden")
      return;
    }
    if(formData.name.length <= 4 ) {
      toast.error("Nombre de usuario no valido");
      return;
    }
    currentUsers.push(formData);
    localStorage.setItem("userData", JSON.stringify(currentUsers));
    toast.success("Te has registrado con éxito");
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({
    ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Registrarse</h1>
          <div className="input-field">
            <label htmlFor="">Nombre de usuario</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
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
              value={formData.password}
            />
          </div>

          <div className="input-field">
            <label htmlFor="">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirmar contraseña"
              required
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
        Ya tienes una cuenta? <NavLink to={"/login"}>Inicia Sesion!</NavLink>
        <br />
        <NavLink to={"/"}>Inicio</NavLink>
      </div>
    </section>
  );
};

export default Register;
