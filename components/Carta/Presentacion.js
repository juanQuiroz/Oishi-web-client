import React from "react";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Presentacion = ({ presentacionData }) => {
  // STATES
  // -> state para cantidad de presentacion de un producto
  const [cantPresentacion, setCantPresentacion] = React.useState(0);
  const [actualPresentacionContext, setActualPresentacionContext] =
    React.useState([]);

  // CONTEXT
  // -> para agregar productos
  const pedidosContext = React.useContext(PedidosContext);
  const { addPresentacion, addTotalPedidos, presentacion } = pedidosContext;

  const cuentaRenderizado = React.useRef(0);
  const cuentaRenderizado2 = React.useRef(0);

  // USEEFFECT
  // -> Cada vez que se actualiza el state "cantPresentacion"
  React.useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }
    if (presentacionData.oferta !== null) {
      console.log("PRECIOOFERTA:", presentacionData.oferta);
      addPresentacion({
        id: presentacionData.presentacion_id,
        presentacion: presentacionData.presentacion,
        precio: parseFloat(presentacionData.oferta),
        producto_id: presentacionData.producto_id,
        producto_nombre: presentacionData.producto_nombre,
        cantidad: cantPresentacion,
      });
      addTotalPedidos();
    }
    if (presentacionData.oferta === null) {
      console.log("NO HAY OFERTA en:", presentacionData.producto_nombre);
      addPresentacion({
        id: presentacionData.presentacion_id,
        presentacion: presentacionData.presentacion,
        precio: parseFloat(presentacionData.precio_default),
        producto_id: presentacionData.producto_id,
        producto_nombre: presentacionData.producto_nombre,
        cantidad: cantPresentacion,
      });
      addTotalPedidos();
    }

    setActualPresentacionContext([
      presentacion.filter(p => p.id === presentacionData.presentacion_id),
    ]);
  }, [cantPresentacion]);

  // React.useEffect(() => {
  //   if (cuentaRenderizado2.current === 0) {
  //     cuentaRenderizado2.current = cuentaRenderizado2.current + 1;
  //     return;
  //   }
  //   // setCantPresentacion(actualPresentacionContext[0].cantidad);
  //   // console.log("FILTER-ACT-PRE:", actualPresentacionContext[0]);
  // }, [actualPresentacionContext]);

  // comprobar los productos cuyo disponibilidad sea SOLO LOCAL
  let dispSoloLocal = false;
  if (
    presentacionData.disponibilidadLocal === true &&
    presentacionData.disponibilidadWeb === false
  ) {
    dispSoloLocal = true;
  }

  return (
    <>
      {presentacionData.activoCombo === true ? null : (
        <div className="flex justify-between items-center py-1 px-3 bg-warmGray-100 shadow-sm rounded-xl my-1">
          <div className="w-7/12 leading-tight">
            <p className=" font-bold">{presentacionData.presentacion}</p>
            <p>
              S/{" "}
              {presentacionData.oferta !== null
                ? presentacionData.oferta
                : presentacionData.precio_default}
            </p>
          </div>
          {presentacionData.disponibilidadLocal ||
          presentacionData.disponibilidadWeb === true ? (
            <div className="flex px-2 py-1">
              {presentacionData.disponibilidadWeb === true && (
                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded mr-2">
                  W
                </p>
              )}
              {presentacionData.disponibilidadLocal === true && (
                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded">
                  L
                </p>
              )}
            </div>
          ) : //   <div className="flex mx-3">
          //   {presentacionData.disponibilidad_web == true && (
          //     <div className="w-6 h-6 bg-red-500 text-center text-md text-white font-bold rounded mr-2">
          //       W
          //     </div>
          //   )}

          //   {presentacionData.disponibilidad_local == true && (
          //     <div className="w-6 h-6 bg-red-500 text-center text-md text-white font-bold rounded">
          //       L
          //     </div>
          //   )}
          // </div>
          null}

          {dispSoloLocal === true ? (
            <p className="text-xs">Solo consumo en local </p>
          ) : (
            <div className="w-4/12" className="flex justify-center ">
              <button
                type="button"
                onClick={() => {
                  cantPresentacion > 0
                    ? setCantPresentacion(cantPresentacion - 1)
                    : setCantPresentacion(0);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <input
                readOnly
                type="text"
                className="w-10 mx-1 rounded-md bg-white shadow-md text-center"
                value={cantPresentacion}
              />
              <button
                type="button"
                onClick={() => {
                  setCantPresentacion(cantPresentacion + 1);
                  // addDataProducto({
                  //   id: presentacion.presentacion_id,
                  //   cantidad: cantPresentacion,
                  // });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

{
  /* <div className="flex justify-between items-center py-1 px-3 bg-warmGray-100 shadow-sm rounded-xl my-1">
      <div className="w-7/12 leading-tight">
        <p className=" font-bold">{presentacionData.presentacion}</p>
        <p>
          S/{" "}
          {presentacionData.oferta !== null
            ? presentacionData.oferta
            : presentacionData.precio_default}
        </p>
      </div>
      {presentacionData.disponibilidadLocal ||
      presentacionData.disponibilidadWeb === true ? (
        <div className="flex px-2 py-1">
          {presentacionData.disponibilidadWeb === true && (
            <p className="bg-gray-700 font-semibold text-white w-7 text-center text-xs p-1 rounded-lg mr-1">
              W
            </p>
          )}
          {presentacionData.disponibilidadLocal === true && (
            <p className="bg-gray-700 font-semibold text-white w-7 text-center text-xs p-1 rounded-lg mr-2">
              L
            </p>
          )}
        </div>
      ) : null}

      {dispSoloLocal === true ? (
        <p className="text-xs">Solo consumo en local </p>
      ) : (
        <div className="w-4/12" className="flex justify-center ">
          <button
            type="button"
            onClick={() => {
              cantPresentacion > 0
                ? setCantPresentacion(cantPresentacion - 1)
                : setCantPresentacion(0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            readOnly
            type="text"
            className="w-10 mx-1 rounded-md bg-white shadow-md text-center"
            value={cantPresentacion}
          />
          <button
            type="button"
            onClick={() => {
              setCantPresentacion(cantPresentacion + 1);
              // addDataProducto({
              //   id: presentacion.presentacion_id,
              //   cantidad: cantPresentacion,
              // });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div> */
}

export default Presentacion;
