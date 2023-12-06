import React, { useState } from "react";
import "./register.css"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.password !== formData.confirmPassword) {
      toast.success("Register completed successfully")
      navigate("/login")
      return; 
    } else {
      toast.error("Passwords do not match")
      return;
    }
  }
  const handleChange = (e) => {
    setFormData({
    ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Registrarse</h1>
          <div>
            <label htmlFor="">Nombres</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Contraseña"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Confirmar contraseña</label>
            <input
              type="password"
              name="password2"
              placeholder="confirmar contraseña"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
