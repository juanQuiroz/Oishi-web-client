import React from "react";
import Subtitulo from "../ui/Subtitulo";
import ProductoPedido from "./ProductoPedido";

const ConfirmarPedido = () => {
  return (
    <div>
      <Subtitulo>Detalle del pedido</Subtitulo>
      <div className="border border-blueGray-500 rounded-md p-1 sm:p-3">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
          <ProductoPedido />
          <ProductoPedido />
          <ProductoPedido />
          <ProductoPedido />
        </div>
        <div className="flex mt-6 mb-4 justify-evenly">
          <button className="font-semibold text-white bg-red-500 px-3 py-2 rounded-full shadow-red hover:shadow-redPlus min-h-10 hover:bg-red-600">
            Vaciar cesta
          </button>
          <button className="font-semibold text-white bg-green-500 px-3 py-2 rounded-full shadow-green min-h-10 hover:bg-green-600">
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarPedido;
