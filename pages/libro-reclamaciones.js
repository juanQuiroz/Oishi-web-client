import React from "react";
import Layout from "../components/Layout";
import Book from "../assets/book.svg";
import api from "../config/axios";
import Notificacion from "../components/ui/Notificacion";

const LibroReclamaciones = () => {
  // State para reclamaciones
  const [reclamacion, setReclamacion] = React.useState({
    nombre: "",
    domicilio: "",
    dni_ce: "",
    email: "",
    telefono: "",
    apoderado: "",
    bien_contratado: "Producto", // Valores por defecto del select
    reclamacion: "Reclamo", //Valores por defecto del select
    detalle_reclamacion: "",
    detalle_proveedor: "",
  });
  const [serverResponse, setServerResponse] = React.useState(null);
  const [typeResponse, setTypeResponse] = React.useState("");

  const onSubmitReclamo = async e => {
    e.preventDefault();
    console.log(reclamacion);
    try {
      const response = await api.post(
        "/enviarEmail",

        reclamacion,

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );
      console.log(response);
      setTypeResponse("success");
      setServerResponse(response.data.message);
    } catch (error) {
      console.log(error);
      setTypeResponse("error");
      setServerResponse("Error al enviar reclamo");
    }

    setTimeout(() => {
      // Cerrar notificacion
      setServerResponse(null);

      // Limpiar formulario
      setReclamacion({
        nombre: "",
        domicilio: "",
        dni_ce: "",
        email: "",
        telefono: "",
        apoderado: "",
        bien_contratado: "",
        reclamacion: "",
        detalle_reclamacion: "",
        detalle_proveedor: "",
      });
    }, 2500);
  };

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
            <form
              onSubmit={onSubmitReclamo}
              className="sm:ml-10 w-full p-1 sm:p-4"
            >
              <div>
                {serverResponse && (
                  <Notificacion
                    typeResponse={typeResponse}
                    serverResponse={serverResponse}
                  />
                )}
              </div>

              <div className="mb-2">
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
              <div className="mb-2">
                <label htmlFor="">Domicilio:</label>
                <input
                  className="bg-gray-100 w-full rounded-lg px-1 py-1"
                  type="text"
                  name="domicilio"
                  value={reclamacion.domicilio}
                  onChange={e => {
                    setReclamacion({
                      ...reclamacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-2">
                <div className="mb-2">
                  <label htmlFor="">DNI / CE:</label>
                  <input
                    className="bg-gray-100 w-full rounded-lg px-1 py-1"
                    type="text"
                    name="dni_ce"
                    value={reclamacion.dni_ce}
                    onChange={e => {
                      setReclamacion({
                        ...reclamacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Email:</label>
                  <input
                    className="bg-gray-100 w-full rounded-lg px-1 py-1"
                    type="email"
                    name="email"
                    value={reclamacion.email}
                    onChange={e => {
                      setReclamacion({
                        ...reclamacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Teléfono:</label>
                  <input
                    className="bg-gray-100 w-full rounded-lg px-1 py-1"
                    type="text"
                    name="telefono"
                    value={reclamacion.telefono}
                    onChange={e => {
                      setReclamacion({
                        ...reclamacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="">Apoderado:</label>
                <input
                  className="bg-gray-100 w-full rounded-lg px-1 py-1"
                  type="text"
                  name="apoderado"
                  value={reclamacion.apoderado}
                  onChange={e => {
                    setReclamacion({
                      ...reclamacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                <div className="mb-2">
                  <label htmlFor="">Bien Contratado:</label>
                  <select
                    className="bg-gray-100 w-full rounded-lg px-1 py-1"
                    type="text"
                    name="bien_contratado"
                    value={reclamacion.bien_contratado}
                    onChange={e => {
                      setReclamacion({
                        ...reclamacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  >
                    <option value="Producto">Producto</option>
                    <option value="Servicio">Servicio</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label htmlFor="">Tipo:</label>
                  <select
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
                  >
                    <option value="Reclamo">Reclamo</option>
                    <option value="Queja">Queja</option>
                  </select>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                <div className="mb-2">
                  <label htmlFor="">Detalle Reclamo/Queja:</label>
                  <textarea
                    rows="4"
                    className="bg-gray-100 w-full rounded-lg px-1 py-1"
                    type="text"
                    name="detalle_reclamacion"
                    value={reclamacion.detalle_reclamacion}
                    onChange={e => {
                      setReclamacion({
                        ...reclamacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Acciones adoptadas por el proveedor:</label>
                  <textarea
                    rows="4"
                    className="bg-gray-100 w-full rounded-lg px-1 py-1"
                    type="text"
                    name="detalle_proveedor"
                    value={reclamacion.detalle_proveedor}
                    onChange={e => {
                      setReclamacion({
                        ...reclamacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
