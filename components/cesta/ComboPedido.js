import React from "react";
import pedidosContext from "../../context/pedidos/pedidosContex";

const ComboPedido = ({ comboPedido }) => {
  console.log(
    "🚀 ~ file: ComboPedido.js ~ line 5 ~ comboPedido.globalToppingSetup ~ comboPedido.globalToppingSetup",
    comboPedido.globalToppingSetup,
  );
  const PedidosContext = React.useContext(pedidosContext);
  const { addTotalPedidos, deleteCombo } = PedidosContext;

  // const subtotal = comboPedido.precio * comboPedido.cantidad;
  // Ahora comboPedido.precio ya trae todo calculado

  // Agrega el subtotal para sumarlo
  // React.useEffect(() => {
  //   addTotalPedidos(subtotal);
  // }, []);

  return (
    <div className="w-full bg-gray-50 rounded-md px-2 py-1 sm:p-2">
      <div className="w-full flex justify-between items-center">
        <div className="w-8/12">
          <h2 className=" font-semibold">
            {comboPedido.nombre}{" "}
            <span className="font-bold text-red-600">
              x{comboPedido.cantidad}
            </span>
          </h2>

          <p className="font-light leading-4 text-xs">
            {comboPedido.description}
          </p>

          {comboPedido.globalToppingSetup && (
            <div>
              {comboPedido.globalToppingSetup.map(
                (gts, index) =>
                  gts.cantidad > 0 && (
                    <p className="font-light leading-4 text-xs" key={index}>
                      {gts.label}{" "}
                      <span className="ml-1 text-red-600">x{gts.cantidad}</span>
                    </p>
                  ),
              )}
            </div>
          )}
        </div>

        <h2 className="w-3/12 font-semibold text-right mr-2">
          S/ {comboPedido.precio.toFixed(2)}
        </h2>
        <button
          className="w-1/12 flex text-red-500 text-center bg-transparent hover:bg-transparent rounded-full"
          onClick={() => {
            deleteCombo(comboPedido.id);
            addTotalPedidos();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ComboPedido;
