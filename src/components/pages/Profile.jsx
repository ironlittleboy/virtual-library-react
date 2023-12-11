import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import Default from "../../../public/default.jpg";
import "./profile.css";
const Profile = () => {
  const navigate = useNavigate();
  const [userBook, setUserBook] = useState(JSON.parse(localStorage.getItem("userBook")) || [])
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const handleLogOut = () => {
    toast.success("Cerraste sesion");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("currentUser");
    navigate("/");
  };
  const handleDelete = (id) => {
    const nuevoArray = userBook.filter(objeto => objeto.id !== id);
    setUserBook(nuevoArray)

  }
  return (
    <div>
      <header className="profile-header">
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>Cerrar Sesion</button>
          </li>
        </ul>
      </header>
      <main>
        <div className="perfil-container">
          <div className="img-profile">
            <img src={Default} alt="" id="default-user" />
          </div>
          <div>
            <div>
              <span className="text-bold text-red">Nombre de usuario:</span>{" "}
              <span>{userData.name}</span>
            </div>
            <div>
              <span className="text-bold text-red">Correo Electronico:</span>{" "}
              <span>{userData.email}</span>
            </div>
          </div>
        </div>
        <div className="table-book">
          <h1>Tus libros publicados</h1>
          {userBook ? (
            <>
              <table>
                <thead>
                  <tr>
                    <td>Nombre del libro</td>
                    <td>Autor</td>
                    <td>Descripcion</td>
                    <td>Genero</td>
                    <td>Accion</td>
                  </tr>
                </thead>
                <tbody>
                  {userBook.map((book) => (
                    <tr key={book.id}>
                      <td>{book.bookName}</td>
                      <td>{book.autorBook}</td>
                      <td>{book.descriptionBook}</td>
                      <td>{book.genreBook}</td>
                      <td><button onClick={() => handleDelete(book.id)}>Eliminar</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <NavLink to={"/subirlibro"}>Publicar Ahora</NavLink>
            </>
          ) : (
            <div className="message">
              <h3>No has publicado libros</h3>
              <NavLink to={"/subirlibro"}>Publicar Ahora</NavLink>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
