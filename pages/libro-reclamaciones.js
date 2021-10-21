import React from "react";
import Layout from "../components/Layout";
import Book from "../assets/book.svg";

const LibroReclamaciones = () => {
  // State para reclamaciones
  const [reclamacion, setReclamacion] = React.useState({
    reclamacion: "",
    detalle: "",
  });

  return (
    <Layout>
      <div className="flex justify-center content-center w-full min-h-full px-6 py-14 shadow-md">
        <div className="w-full">
          <div className="flex content-center items-center sm:hidden my-4">
            <Book className="min-w-0" />
            <div>
              <p className="w-full ml-2 font-Andika text-4xl">
                Libro de reclamaciones
              </p>
              <p className="ml-2 text-gray-600  font-light text-xl leading-5">
                Por que tu opinión nos importa, ayudanos a seguir mejorando
              </p>
            </div>
          </div>
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
                <label htmlFor="">Reclamo:</label>
                <input
                  className="bg-gray-100 w-full rounded-lg px-1"
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
                  className="bg-gray-100 w-full rounded-lg px-1"
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
                className="bg-blue-400 text-gray-800 font-semibold h-8 text-center rounded-full w-1/2 sm:w-1/3 mt-3"
              >
                Enviar reclamo
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LibroReclamaciones;
