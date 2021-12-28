import React, { useContext } from "react";
import Subtitulo from "../ui/Subtitulo";
import ProductoPedido from "./ProductoPedido";
import pedidosContex from "../../context/pedidos/pedidosContex";
import OfertaPedido from "./OfertaPedido";
import ComboPedido from "./ComboPedido";
import dayjs from "dayjs";

const ConfirmarPedido = () => {
  const [horarioLaboral, setHorarioLaboral] = React.useState(false);

  React.useEffect(() => {
    if (dayjs().hour() >= 12 && dayjs().hour() < 21) {
      setHorarioLaboral(true);
    } else if (
      dayjs().hour() == 21 &&
      dayjs().minute() >= 0 &&
      dayjs().minute() <= 45
    ) {
      setHorarioLaboral(true);
    } else {
      setHorarioLaboral(false);
    }
  }, [horarioLaboral]);

  const PedidosContext = useContext(pedidosContex);
  const {
    presentacion,
    vaciarCesta,
    ofertasSeleccionada,
    combosSeleccionados,
    pedido,
    setConfirmarpedido,
  } = PedidosContext;

  // filtrar pedidos
  if (presentacion.length > 0) {
    var pedidosFiltrados = presentacion.filter(p => p.cantidad > 0);
    console.log("pedidosfiltrado:", pedidosFiltrados);
  }

  return (
    <div className="min-h-[29rem] flex flex-col justify-start">
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
        </div>
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

            {horarioLaboral == true ? (
              <button
                className="font-Andika  font-semibold text-white bg-green-500 px-3 py-2 rounded-full shadow-green min-h-10 hover:bg-green-600"
                onClick={() => setConfirmarpedido(true)}
              >
                Confirmar productos
              </button>
            ) : (
              <h2 className="font-Andika font-semibold border-2 border-blue-500 rounded-full px-2 py-1 text-blue-800">
                Puedes pedir entre 12:00 pm - 09:45 pm
              </h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmarPedido;
