import React, { useContext } from "react";
import Subtitulo from "../ui/Subtitulo";
import ProductoPedido from "./ProductoPedido";
import pedidosContex from "../../context/pedidos/pedidosContex";
import OfertaPedido from "./OfertaPedido";
import ComboPedido from "./ComboPedido";

const ConfirmarPedido = ({ setConfirmarpedido }) => {
  const PedidosContext = useContext(pedidosContex);
  const {
    presentacion,
    vaciarCesta,
    ofertasSeleccionada,
    combosSeleccionados,
    pedido,
  } = PedidosContext;

  console.log("ConfPedido: ", pedido.presentacionesPedidas.length);

  // filtrar pedidos
  if (presentacion.length > 0) {
    var pedidosFiltrados = presentacion.filter(p => p.cantidad > 0);
    console.log("pedidosfiltrado:", pedidosFiltrados);
  }

  return (
    <div>
      <Subtitulo>Detalle del pedido</Subtitulo>
      <div className=" bg-blueGray-200 rounded-md p-2 sm:p-3">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
          {pedidosFiltrados &&
            pedidosFiltrados.map(p => (
              <ProductoPedido key={p.id} presentacionPedido={p} />
            ))}
          {ofertasSeleccionada &&
            ofertasSeleccionada.map(o => (
              <OfertaPedido key={o.oferta_id} ofertaPedido={o} />
            ))}
          {combosSeleccionados &&
            combosSeleccionados.map(c => (
              <ComboPedido key={c.id} comboPedido={c} />
            ))}

          {pedido && (
            <div className=" flex justify-between mt-2 mx-1">
              <p className="text-xl font-medium text-right text-gray-700">
                Total Pedido:
              </p>
              <p className="text-xl font-extrabold text-right text-gray-800">
                S/ {parseFloat(pedido.totalPedidos).toFixed(2)}
              </p>
            </div>
          )}
        </div>

        {(presentacion.length > 0 ||
          ofertasSeleccionada.length > 0 ||
          combosSeleccionados.length > 0) && (
          <div className="flex mt-6 mb-4 justify-evenly">
            <button
              className="font-semibold text-white bg-red-500 px-3 py-2 rounded-full shadow-red hover:shadow-redPlus min-h-10 hover:bg-red-600"
              onClick={vaciarCesta}
            >
              Vaciar cesta
            </button>
            <button
              className="font-semibold text-white bg-green-500 px-3 py-2 rounded-full shadow-green min-h-10 hover:bg-green-600"
              onClick={() => setConfirmarpedido(true)}
            >
              Confirmar productos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmarPedido;
