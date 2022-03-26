import React from "react";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Presentacion = ({ presentacionData, product }) => {
  console.log(
    "🚀 ~ file: Presentacion.js ~ line 5 ~ Presentacion ~ presentacionData",
    presentacionData,
  );

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

    addPresentacion({
      id: presentacionData.id,
      presentacion: presentacionData.presentation,
      precio: parseFloat(presentacionData.default_price),
      producto_id: product.id,
      producto_nombre: product.name,
      cantidad: cantPresentacion,
    });
    addTotalPedidos();
    // }

    setActualPresentacionContext([
      presentacion.filter(p => p.id === presentacionData.presentation),
    ]);
  }, [cantPresentacion]);

  // comprobar los productos cuya disponibilidad sea SOLO LOCAL
  let dispSoloLocal = false;
  if (
    presentacionData.local_availability === true &&
    presentacionData.web_availability === false
  ) {
    dispSoloLocal = true;
  }

  // comprobar los productos cuya disponibilidad sea SOLO WEB
  let dispSoloWeb = false;
  if (
    presentacionData.local_availability === false &&
    presentacionData.web_availability === true
  ) {
    dispSoloWeb = true;
  }

  // comprobar que ela presentacion no este disponible ni para web ni local
  let noWebNoLocal = false;
  if (
    presentacionData.local_availability === false &&
    presentacionData.web_availability === false
  ) {
    noWebNoLocal = true;
  }

  return (
    <>
      {noWebNoLocal ? (
        <div>
          <div className="w-full leading-tight mt-2">
            <p className=" font-bold text-oishiRojo">
              No tenemos presentaciones disponibles
            </p>
            <div>Vuelve pronto</div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center py-1 px-3 bg-oishiCeleste2 shadow-sm rounded-xl my-1">
          <div className="w-7/12 leading-tight">
            <p className=" font-bold">{presentacionData.presentation}</p>
            <div>S/ {Number(presentacionData.default_price).toFixed(2)}</div>
          </div>
          {presentacionData.local_availability ||
          presentacionData.web_availability === true ? (
            <div className="flex px-2 py-1">
              {dispSoloWeb === true && (
                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded mr-2">
                  W
                </p>
              )}
              {dispSoloLocal === true && (
                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded">
                  L
                </p>
              )}
            </div>
          ) : null}

          {presentacionData.local_availability &&
          presentacionData.web_availability === true ? (
            <div className="flex px-2 py-1">
              <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded mr-2">
                W
              </p>

              <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded">
                L
              </p>
            </div>
          ) : null}

          {dispSoloLocal === true ? (
            <p className="text-xs">Solo consumo en local </p>
          ) : (
            <div className="w-4/12 flex justify-center ">
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

export default Presentacion;
