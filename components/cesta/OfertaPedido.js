import React from "react";
import pedidosContext from "../../context/pedidos/pedidosContex";

const OfertaPedido = ({ ofertaPedido }) => {
  console.log("ofertaPedido", ofertaPedido);

  const PedidosContext = React.useContext(pedidosContext);
  const { addTotalPedidos, deleteOferta } = PedidosContext;

  const subtotal = ofertaPedido.precio_oferta * ofertaPedido.cantidad;

  // Agrega el subtotal para sumarlo
  // React.useEffect(() => {
  //   addTotalPedidos(subtotal);
  // }, []);

  return (
    <div className="w-full bg-gray-50 rounded-md px-2 py-1 sm:p-2">
      <div className="w-full flex justify-between items-center">
        <h2 className="w-5/12 font-semibold">{ofertaPedido.producto_nombre}</h2>
        <h3 className="w-4/12 ">
          {ofertaPedido.descripcion_presentacion} x {ofertaPedido.cantidad}
        </h3>
        <h2 className="w-2/12 font-semibold text-center">
          S/ {subtotal.toFixed(2)}
        </h2>
        <button
          className="w-1/12 flex text-red-500 text-center bg-transparent hover:bg-transparent rounded-full"
          onClick={() => {
            deleteOferta(ofertaPedido.oferta_id);
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

export default OfertaPedido;
