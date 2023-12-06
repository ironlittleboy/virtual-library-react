import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import BuscandoAlaska from "../../../public/bsucando_a_alaska_libro.jpg";
import BajoMismaEstrella from "../../../public/bajo_la_misma_estrella_libro.jpg";
import toast from "react-hot-toast";
const Home = () => {
  const isLoged = localStorage.getItem("isLoged");
  const nuevos = false;
  const handleClick = () => {
    toast.error("Libro no disponible")
  }
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
    }
  ]
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
                  <NavLink to={"/login"}>Cerrar Sesion</NavLink>
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
              Stadtbibliothek Stuttgart The Stadtbibliothek Stuttgart (formerly
              known as Stadtbücherei Stuttgart) is the public library of the
              city of Stuttgart.
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
                src={BuscandoAlaska}
                alt="libro image"
                className="img-libro"
              />
            </div>
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
                src={BuscandoAlaska}
                alt="libro image"
                className="img-libro"
              />
            </div>
            <div className="card">
              <img
              onClick={handleClick}
                src={BuscandoAlaska}
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
                {
                  bookData.map((book) => {
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
                    )
                  })
                }
            </div>
          </div>
        </div>
        <div className="nuevos">
          <h1>Nuevas publicaciones</h1>
          {
           nuevos ? nuevos.map((nuevos) => console.log("si hay")) 
           : 
           <div className="cartota">
            <h2>No hay nada que mostrar</h2>
           </div>
          } 
        
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
