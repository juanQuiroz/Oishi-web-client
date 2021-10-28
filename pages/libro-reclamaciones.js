import React from "react";
import Layout from "../components/Layout";
import Book from "../assets/book.svg";

const LibroReclamaciones = () => {
  // State para reclamaciones
  const [reclamacion, setReclamacion] = React.useState({
    nombre: "",
    reclamacion: "",
    detalle: "",
  });

  return (
    <Layout>
      <div className="flex justify-center content-center w-full min-h-full px-6 py-14 shadow-md">
        <div className="w-full">
          <div className="flex content-center items-center sm:hidden my-4">
            <Book className="w-32" />

            <p className="w-full ml-2 font-Andika text-4xl">
              Libro de reclamaciones
            </p>
          </div>
          <p className="ml-2 text-gray-600  font-light text-xl leading-5 sm:hidden mb-4">
            Por que tu opinión nos importa, ayudanos a seguir mejorando
          </p>
          <p className="hidden sm:block font-Andika text-4xl mb-1">
            Libro de reclamaciones
          </p>
          <p className="hidden sm:block text-gray-600  font-light text-xl mb-4">
            Por que tu opinión nos importa, ayudanos a seguir mejorando
          </p>

          <div className="flex justify-between min-w-full bg-white p-3 rounded-2xl sm:px-6">
            <Book className="w-64 hidden sm:block" />
            <form className="sm:ml-10 w-full p-1 sm:p-4">
              <div>
                <label htmlFor="">Nombres y apellidos:</label>
                <input
                  className="bg-gray-100 w-full rounded-lg px-1 py-1"
                  type="text"
                  name="nombre"
                  value={reclamacion.nombre}
                  onChange={e => {
                    setReclamacion({
                      ...reclamacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="">Reclamo:</label>
                <input
                  className="bg-gray-100 w-full rounded-lg px-1 py-1"
                  type="text"
                  name="reclamacion"
                  value={reclamacion.reclamacion}
                  onChange={e => {
                    setReclamacion({
                      ...reclamacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="">Detalle:</label>
                <textarea
                  rows="7"
                  className="bg-gray-100 w-full rounded-lg px-1 py-1"
                  type="text"
                  name="detalle"
                  value={reclamacion.detalle}
                  onChange={e => {
                    setReclamacion({
                      ...reclamacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center bg-blue-400 text-gray-800 font-semibold h-10 text-center rounded-full px-12 mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-trueGray-800 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-Linecap="round"
                    stroke-Linejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <p>Enviar reclamo</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LibroReclamaciones;
