import React from "react";
import api from "../../config/axios";
import Notificacion from "../ui/Notificacion";

const FormSolCatering = () => {
  // estate de los campos del formulario
  const [camposCotizacion, setCamposCotizacion] = React.useState({
    nombres: "",
    dni: "",
    celular: "",
    email: "",
    tipo_comprobante: "Boleta", // Valor por defecto
    resumen_comprobante: "Consumo", // VAlor por defecto
    nombre_razon_social: "",
    dni_ruc: "",
    direccion_facturacion: "",
    tipo_servicio: "Basico", // Valor por defecto
    fecha_evento: Date(),
    tipo_evento: "Cumpleaños",
    direccion_evento: "",
    referencia_direccion_evento: "",
    hora_evento: "",
    cantidad_personas: "",
    detalle_gustos_preferencias: "",
    salsa_favorita: "",
    complementos: "Gari",
    presupuesto_evento: "",
  });
  const [page, setPage] = React.useState(1);
  const [serverResponse, setServerResponse] = React.useState(null);
  const [typeResponse, setTypeResponse] = React.useState("");

  const onSubmitForm = async e => {
    e.preventDefault();

    const fechaFormateada = `${camposCotizacion.fecha_evento.slice(
      8,
      10,
    )}-${camposCotizacion.fecha_evento.slice(
      5,
      7,
    )}-${camposCotizacion.fecha_evento.slice(0, 4)}`;
    setCamposCotizacion({ ...camposCotizacion, fecha_evento: fechaFormateada });

    console.log("fechaFormateada :", fechaFormateada);
    console.log("camposCotizacion :", camposCotizacion);
    try {
      const response = await api.post("/enviarCatering", camposCotizacion, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);
      setTypeResponse("success");
      setServerResponse("Cotizacion solicitada");
    } catch (error) {
      console.log(error);
      setTypeResponse("error");
      setServerResponse("Error al solicitar cotización");
    }

    // Resetear datos del formulario
    setTimeout(() => {
      setCamposCotizacion({
        nombres: "",
        dni: "",
        celular: "",
        email: "",
        tipo_comprobante: "Boleta", // Valor por defecto
        resumen_comprobante: "Consumo", // VAlor por defecto
        nombre_razon_social: "",
        dni_ruc: "",
        direccion_facturacion: "",
        tipo_servicio: "Basico", // Valor por defecto
        fecha_evento: Date(),
        tipo_evento: "Cumpleaños",
        direccion_evento: "",
        referencia_direccion_evento: "",
        hora_evento: "",
        cantidad_personas: "",
        detalle_gustos_preferencias: "",
        salsa_favorita: "",
        complementos: "Gari",
        presupuesto_evento: "",
      });
      setPage(1);
      setServerResponse(null);
    }, 2500);
  };

  return (
    <div>
      {serverResponse && (
        <Notificacion
          typeResponse={typeResponse}
          serverResponse={serverResponse}
        />
      )}
      <form onSubmit={onSubmitForm}>
        {/* sobre el cliente */}
        {page === 1 && (
          <div>
            <div className="mb-2">
              <label htmlFor="">Nombres y apellidos:</label>
              <input
                className="bg-white w-full rounded-lg px-1 py-1"
                type="text"
                name="nombres"
                value={camposCotizacion.nombres}
                onChange={e => {
                  setCamposCotizacion({
                    ...camposCotizacion,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-2">
              <div className="mb-2">
                <label htmlFor="">N° de documento:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="dni"
                  placeholder="Ejemplo: Dni - 85854871"
                  value={camposCotizacion.dni}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="">N° de celular:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="celular"
                  value={camposCotizacion.celular}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="">Correo electrónico :</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="email"
                  value={camposCotizacion.email}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <button
              onClick={() => setPage(2)}
              className="w-full sm:py-2 sm:text-lg bg-oishiAzul text-white text-lg rounded-lg shadow-md px-4 py-1 mt-4 mb-2"
            >
              Siguiente
            </button>
          </div>
        )}

        {/* Sobre facturacion */}
        {page === 2 && (
          <div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-2">
              <div className="mb-2">
                <label htmlFor="">¿Boleta o Factura?:</label>
                <select
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="tipo_comprobante"
                  value={camposCotizacion.tipo_comprobante}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="Boleta">Boleta</option>
                  <option value="Factura">Factura</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="">Comprobante Detallado o Por consumo:</label>
                <select
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="resumen_comprobante"
                  value={camposCotizacion.resumen_comprobante}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="Detallado">Detallado</option>
                  <option value="Consumo">Consumo</option>
                </select>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-4 sm:gap-2">
              <div className="mb-2 col-span-3">
                <label htmlFor="">Nombre / Razón Social:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="nombre_razon_social"
                  value={camposCotizacion.nombre_razon_social}
                  placeholder="Ejemplo: Oishi Partners SAC"
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Dni / Ruc:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="dni_ruc"
                  value={camposCotizacion.dni_ruc}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="">Dirección de la facturación:</label>
              <input
                className="bg-white w-full rounded-lg px-1 py-1"
                type="text"
                name="direccion_facturacion"
                value={camposCotizacion.direccion_facturacion}
                onChange={e => {
                  setCamposCotizacion({
                    ...camposCotizacion,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPage(1)}
                className="w-full sm:py-2 sm:text-lg bg-oishiAzul text-white text-lg rounded-lg shadow-md px-4 py-1 mt-4 mb-2"
              >
                Atras
              </button>{" "}
              <button
                onClick={() => setPage(3)}
                className="w-full sm:py-2 sm:text-lg bg-oishiAzul text-white text-lg rounded-lg shadow-md px-4 py-1 mt-4 mb-2"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Datos del evento */}
        {page === 3 && (
          <div>
            <div className="sm:grid sm:grid-cols-6 sm:gap-2">
              <div className="mb-2 sm:col-span-2">
                <label htmlFor="">Tipo de servicio:</label>
                <select
                  className="bg-white w-full rounded-lg px-1 py-1.5"
                  type="text"
                  name="tipo_servicio"
                  value={camposCotizacion.tipo_servicio}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Black">Black</option>
                </select>
              </div>

              <div className="mb-2 sm:col-span-2">
                <label htmlFor="">Fecha del evento:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="date"
                  name="fecha_evento"
                  value={camposCotizacion.fecha_evento}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-2 sm:col-span-2">
                <label htmlFor="">Tipo de evento:</label>
                <select
                  className="bg-white w-full rounded-lg px-1 py-1.5"
                  type="text"
                  name="tipo_evento"
                  value={camposCotizacion.tipo_evento}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="Cumpleaños">Cumpleaños</option>
                  <option value="Matrimonio">Matrimonio</option>
                  <option value="Corporativo">Corporativo</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div className="mb-2 sm:col-span-3">
                <label htmlFor="">Dirección del evento:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="direccion_evento"
                  value={camposCotizacion.direccion_evento}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-2 sm:col-span-3">
                <label htmlFor="">Referencia de la dirección del evento:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="referencia_direccion_evento"
                  value={camposCotizacion.referencia_direccion_evento}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-2 col-span-2">
                <label htmlFor="">Hora del evento:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="hora_evento"
                  value={camposCotizacion.hora_evento}
                  placeholder="Ejemplo: 08:00pm"
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-2 col-span-2">
                <label htmlFor="">Cantidad de personas:</label>
                <input
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="cantidad_personas"
                  value={camposCotizacion.cantidad_personas}
                  placeholder="Ejemplo: 10"
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPage(2)}
                className="w-full sm:py-2 sm:text-lg bg-oishiAzul text-white text-lg rounded-lg shadow-md px-4 py-1 mt-4 mb-2"
              >
                Atras
              </button>
              <button
                onClick={() => setPage(4)}
                className="w-full sm:py-2 sm:text-lg bg-oishiAzul text-white text-lg rounded-lg shadow-md px-4 py-1 mt-4 mb-2"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Conociendo al cliente */}
        {page === 4 && (
          <div>
            <div className="sm:mt-2 sm:grid sm:grid-cols-6 sm:gap-2 sm:place-content-end">
              <div className="mb-2 sm:col-span-6">
                <label htmlFor="">
                  Describenos tus gustos y preferencias: (De ser makis detalla
                  tus sabores favoritos, De ser otro tipo de producto
                  detallanos).:
                </label>
                <p className="text-gray-600 text-xs ">
                  ALITAS CROCANTES - SANGUCHES - MAKIS - PLATOS CALIENTES -
                  ALITAS TERIYAKI
                </p>
                <textarea
                  className="bg-white w-full rounded-lg px-1 py-1"
                  type="text"
                  name="detalle_gustos_preferencias"
                  value={camposCotizacion.detalle_gustos_preferencias}
                  onChange={e => {
                    setCamposCotizacion({
                      ...camposCotizacion,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="sm:flex sm:items-end sm:col-span-6">
                <div className="mb-2 sm:w-3/6">
                  <label htmlFor="">Salsa favorita:</label>
                  <p className="text-gray-600 text-xs ">
                    Opciones de salsas: Acevichada, Tiradito, Maracuya, Anguila
                    (Tare), Aji de alitas, Shoyu (Sillao Japones)
                  </p>

                  <input
                    className="bg-white w-full rounded-lg px-1 py-1"
                    type="text"
                    name="salsa_favorita"
                    value={camposCotizacion.salsa_favorita}
                    onChange={e => {
                      setCamposCotizacion({
                        ...camposCotizacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-2 sm:mx-2 sm:w-2/6">
                  <label htmlFor="">¿Deseas otros complementos?:</label>
                  <select
                    className="bg-white w-full rounded-lg px-1 py-1.5"
                    type="text"
                    name="complementos"
                    value={camposCotizacion.complementos}
                    onChange={e => {
                      setCamposCotizacion({
                        ...camposCotizacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  >
                    <option value="Gari">Gari</option>
                    <option value="wasabi">wasabi</option>
                    <option value="gari & wasabi">gari & wasabi</option>
                    <option value="ninguno">ninguno</option>
                  </select>
                </div>
                <div className="mb-2 sm:w-1/6">
                  <label htmlFor="">Presupuesto:</label>
                  <input
                    className="bg-white w-full rounded-lg px-1 py-1"
                    type="text"
                    name="presupuesto_evento"
                    value={camposCotizacion.presupuesto_evento}
                    onChange={e => {
                      setCamposCotizacion({
                        ...camposCotizacion,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPage(3)}
                className="w-full sm:py-2 sm:text-lg bg-oishiAzul text-white text-lg rounded-lg shadow-md px-4 py-1 mt-4 mb-2"
              >
                Atras
              </button>
              <button
                type="submit"
                className="w-full sm:py-2 sm:text-lg bg-oishiAzul text-white text-lg rounded-lg shadow-md px-4 py-1 mt-4 mb-2"
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormSolCatering;
