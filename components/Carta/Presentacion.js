import React from "react";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Presentacion = ({ presentacion }) => {
  // STATES
  // -> state para cantidad de presentacion de un producto
  const [cantPresentacion, setCantPresentacion] = React.useState(0);
  // CONTEXT
  // -> para agregar productos
  const pedidosContext = React.useContext(PedidosContext);
  const { addDataProducto } = pedidosContext;

  // USEEFFECT
  // -> Cada vez que se actualiza el state "cantPresentacion"
  React.useEffect(() => {
    addDataProducto(cantPresentacion);
  }, [cantPresentacion]);

  return (
    <div className="flex justify-between py-1 px-2 bg-warmGray-100 shadow-sm rounded-xl my-1">
      <p>{presentacion.presentacion}</p>
      <p>S/ {presentacion.precio_default}</p>
      <div className="flex justify-center ">
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
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <input
          readOnly
          type="text"
          className="w-10 mx-1 rounded-md bg-white shadow-xl text-center"
          value={cantPresentacion}
        />
        <button
          type="button"
          onClick={() => setCantPresentacion(cantPresentacion + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Presentacion;
