import React from "react";
import pedidosContext from "../../context/pedidos/pedidosContex";

const ProductoPedido = ({ presentacionPedido }) => {
  console.log("PresentacionPedido", presentacionPedido);

  const PedidosContext = React.useContext(pedidosContext);
  const { addTotalPedidos, deletePresentacion } = PedidosContext;

  const subtotal = presentacionPedido.precio * presentacionPedido.cantidad;

  // // Agrega el subtotal para sumarlo
  // React.useEffect(() => {
  //   addTotalPedidos(subtotal);
  // }, [subtotal]);

  return (
    <div className="w-full bg-gray-50 rounded-md px-2 py-1 sm:p-2">
      <div className="w-full flex justify-between items-center">
        <div className="w-8/12">
          <h2 className=" font-semibold leading-3">
            {presentacionPedido.producto_nombre}
          </h2>
          <h3>
            {presentacionPedido.presentacion}{" "}
            <span className="font-bold text-red-600">
              x{presentacionPedido.cantidad}
            </span>
          </h3>
        </div>
        <h2 className="w-3/12  font-semibold text-right mr-2">
          S/ {subtotal.toFixed(2)}
        </h2>
        <button
          className="w-1/12 flex flex-row-reverse text-red-500 bg-transparent hover:bg-transparent rounded-full"
          onClick={() => {
            deletePresentacion(presentacionPedido.id);
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

export default ProductoPedido;
