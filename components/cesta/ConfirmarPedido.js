import React, { useContext } from "react";
import Subtitulo from "../ui/Subtitulo";
import ProductoPedido from "./ProductoPedido";
import pedidosContex from "../../context/pedidos/pedidosContex";
import OfertaPedido from "./OfertaPedido";
import ComboPedido from "./ComboPedido";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import SeleccionarSalsas from "./SeleccionarSalsas";

const ConfirmarPedido = () => {
  const [horarioLaboral, setHorarioLaboral] = React.useState(false);

  const PedidosContext = useContext(pedidosContex);
  const {
    presentacion,
    vaciarCesta,
    ofertasSeleccionada,
    combosSeleccionados,
    pedido,
    setConfirmarpedido,
    localSeleccionado,
  } = PedidosContext;

  dayjs.extend(isBetween);

  React.useEffect(() => {
    if (localSeleccionado == 1) {
      var startHour = dayjs().hour(12).minute(15);
      var endHour = dayjs().hour(21).minute(45);
    } else if (localSeleccionado == 2) {
      var startHour = dayjs().hour(12).minute(15);
      var endHour = dayjs().hour(20).minute(45);
    } else if (localSeleccionado == 3) {
      var startHour = dayjs().hour(12).minute(15);
      var endHour = dayjs().hour(20).minute(45);
    }

    setHorarioLaboral(dayjs().isBetween(startHour, endHour));
  }, [horarioLaboral]);

  // filtrar pedidos
  if (presentacion.length > 0) {
    var pedidosFiltrados = presentacion.filter((p) => p.cantidad > 0);
  }

  return (
    <div className="min-h-[29rem] flex flex-col justify-start">
      <div className="sm:ml-4">
        <Subtitulo>Detalle del pedido</Subtitulo>
      </div>
      <div className=" bg-blueGray-200 rounded-md p-2 sm:p-3 sm:mx-8">
        {presentacion.length > 0 ||
        ofertasSeleccionada.length > 0 ||
        combosSeleccionados.length > 0 ? (
          <div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3">
              {pedidosFiltrados &&
                pedidosFiltrados.map((p) => (
                  <ProductoPedido key={p.id} presentacionPedido={p} />
                ))}
              {ofertasSeleccionada &&
                ofertasSeleccionada.map((o) => (
                  <OfertaPedido key={o.oferta_id} ofertaPedido={o} />
                ))}
              {combosSeleccionados &&
                combosSeleccionados.map((c) => (
                  <ComboPedido key={c.id} comboPedido={c} />
                ))}
            </div>
            <div className="mt-6">
              <SeleccionarSalsas />
            </div>
          </div>
        ) : (
          <div className="mx-2">
            <h1 className="font-Andika font-bold text-lg">
              No has añadido pedidos en tu cesta 😕
            </h1>
            <h2 className="font-Andika">
              Añade pedidos a la cesta para que disfrutes del sabor único de
              Oishi Sushi Bar
            </h2>
          </div>
        )}

        {pedido && (
          <div className=" flex justify-between mt-4 mx-2 ">
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
          <div className="flex justify-center">
            {horarioLaboral == false ? (
              <div className="w-full flex mt-6 mb-4 justify-evenly">
                <button
                  className="font-semibold text-white bg-red-500 px-3 py-2 rounded-full shadow-red hover:shadow-redPlus min-h-10 hover:bg-red-600"
                  onClick={vaciarCesta}
                >
                  Vaciar cesta
                </button>
                <button
                  className="font-Andika font-semibold text-white bg-green-500 px-3 py-2 rounded-full shadow-green min-h-10 hover:bg-green-600"
                  onClick={() => setConfirmarpedido(true)}
                >
                  Confirmar productos
                </button>
              </div>
            ) : (
              <div className="flex justify-center ">
                <h2 className="flex mt-6 mb-3 text-center text-sm font-Andika font-semibold border-2 border-blue-500 rounded-full px-2 py-1 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mood-sad mr-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx={12} cy={12} r={9}></circle>
                    <line x1={9} y1={10} x2="9.01" y2={10}></line>
                    <line x1={15} y1={10} x2="15.01" y2={10}></line>
                    <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path>
                  </svg>{" "}
                  Fuera del horario de atención
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmarPedido;
