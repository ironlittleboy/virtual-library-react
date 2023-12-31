import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import BuscandoAlaska from "../../../public/bsucando_a_alaska_libro.jpg";
import BajoMismaEstrella from "../../../public/bajo_la_misma_estrella_libro.jpg";
import Teorema from "../../../public/el_teorema_katherine_libro.webp";
import LibroC from "../../../public/lenguaje_c_libro.jpg";
import Correr from "../../../public/correr_o_morir_libro.jpg";
import toast from "react-hot-toast";

const Home = () => {
  const isLoged = localStorage.getItem("isLogged");
  const userBooks = JSON.parse(localStorage.getItem("userBook"));

  const handleLogOut = () => {
    toast.success("Cerraste sesion");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("currentUser");
    navigate("/");
  };
  const handleClick = () => {
    toast.error("Libro no disponible");
  };
  const bookData = [
    {
      id: 1,
      title: "Buscando a Alaska",
      author: "John Green",
      description: "Alaska es un chica...",
      image: BuscandoAlaska,
      handleClick: handleClick,
    },
    {
      id: 2,
      title: "Bajo la misma estrella",
      author: "John Green",
      description: "libro basado en ...",
      image: BajoMismaEstrella,
      handleClick: handleClick,
    },
  ];
  return (
    <div>
      <header>
        <div>
          <h1>
            <NavLink to={"/"}>Biblioteca Virtual</NavLink>
          </h1>
        </div>
        <div>
          {isLoged ? (
            <div>
              <ul>
                <li>
                  <NavLink to={"/profile"}>Mi Perfil</NavLink>
                </li>
                <li>
                  <NavLink to={"/login"} onClick={handleLogOut}>
                    Cerrar Sesion
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul>
                <li>
                  <NavLink to={"/"}>Inicio</NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>Iniciar Sesion</NavLink>
                </li>
                <li>
                  <NavLink to={"/register"}>Registrarse</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <main>
        <div className="main-presentation">
          <div className="text-container">
            <h2>Biblioteca Virtual de la ULEAM Imagen de fondo: The</h2>
            <p>
              Imagen de fondo: The Stadtbibliothek Stuttgart The Stadtbibliothek
              Stuttgart (formerly known as Stadtbücherei Stuttgart) is the
              public library of the city of Stuttgart.
            </p>
          </div>
        </div>
        <div className="tendencias">
          <h1>Tendencias</h1>
          <div className="cards">
            <div className="card">
              <img
                onClick={handleClick}
                src={BuscandoAlaska}
                alt="libro image"
                className="img-libro"
              />
            </div>
            <div className="card">
              <img
                onClick={handleClick}
                src={Teorema}
                alt="libro image"
                className="img-libro"
              />
            </div>
            <div className="card">
              <img
                onClick={handleClick}
                src={BajoMismaEstrella}
                alt="libro image"
                className="img-libro"
              />
            </div>
            <div className="card">
              <img
                onClick={handleClick}
                src={LibroC}
                alt="libro image"
                className="img-libro"
              />
            </div>
            <div className="card">
              <img
                onClick={handleClick}
                src={Correr}
                alt="libro image"
                className="img-libro"
              />
            </div>
          </div>
        </div>
        <div className="personal-area">
          <h1>Tu esapcio Personal</h1>
          <div className="saved-book-container">
            <h2>Libros Guardados</h2>
            <div className="saved-book">
              {bookData.map((book) => {
                return (
                  <div className="saved-book-card">
                    <img
                      onClick={book.handleClick}
                      src={book.image}
                      alt="libro image"
                      className="img-libro"
                    />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="nuevos">
          <h1>Tus publicaciones</h1>
          {isLoged ? (
            <>
              {userBooks ? (
                <table>
                  <thead>
                    <tr>
                      <td>Nombre del libro</td>
                      <td>Autor</td>
                      <td>Descripcion</td>
                      <td>Genero</td>
                    </tr>
                  </thead>
                  <tbody>
                    {userBooks.map((book) => (
                      <tr key={book.id}>
                        <td>{book.bookName}</td>
                        <td>{book.autorBook}</td>
                        <td>{book.descriptionBook}</td>
                        <td>{book.genreBook}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="cartota">
                  <h2>No hay nada que mostrar</h2>
                </div>
              )}
            </>
          ) : <h3>Inicia sesion para mirar</h3>}
        </div>
      </main>
      <footer>
        <h3>Biblioteca Virtual</h3>
        <p>Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Home;
