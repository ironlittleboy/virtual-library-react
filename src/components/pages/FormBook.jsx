import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const FormBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookName: "",
    autorBook: "",
    descriptionBook: "",	
    genreBook: ""
  })
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const nuevoId = Date.now();
    const nuevaData = { id: nuevoId, ...formData };
    setFormData((prevData) => [...prevData, nuevaData]);
    let currentBooks = JSON.parse(localStorage.getItem("userBook")) || [];
    localStorage.setItem(
      "userBook",
      JSON.stringify([...currentBooks, nuevaData])
    );
    toast.success("Libro publicado con exito");
    navigate("/profile");
    /*
    // Intenta obtener los usuarios actuales, asegurándote de que sea un array
    if (!Array.isArray(currentBooks)) {
      currentBooks = []; // Si no es un array, inicializa como un array vacío
    }

    currentBooks.push(formData);
    localStorage.setItem("userBook", JSON.stringify(currentBooks));
    toast.success("Libro publicado con exito");
    navigate("/profile"); */
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <section className="main">
      <div className="form-container">
        <h1>Publicar un Libro</h1>
        <form onSubmit={handleBookSubmit}>
          <div className="input-field">
            <label htmlFor="">Nombre del libro</label>
            <input
              type="text"
              name="bookName"
              required
              placeholder="Nombre de tu libro"
              onChange={handleChange}
              value={formData.bookName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Autor</label>
            <input
              type="text"
              name="autorBook"
              required
              placeholder="Autor de tu libro"
              onChange={handleChange}
              value={formData.autorBook}
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Descripcion</label>
            <input
              type="text"
              name="descriptionBook"
              required
              placeholder="Descipcion de tu libro"
              onChange={handleChange}
              value={formData.descriptionBook}
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Genero</label>
            <input
              type="text"
              name="genreBook"
              required
              placeholder="Genero de tu libro"
              onChange={handleChange}
              value={formData.genreBook}
            />
          </div>
          <div>
            <button type="submit">Publicar</button>
          </div>
          <NavLink to={"/profile"}>Volver</NavLink>
        </form>
      </div>
    </section>
  );
};

export default FormBook;
