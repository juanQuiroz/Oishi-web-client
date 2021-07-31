import React from "react";

const ProductoPedido = () => {
  return (
    <div className=" bg-blueGray-200 rounded-md p-1">
      <div className="flex justify-between">
        <h2 className="font-semibold">Makis Furai x12</h2>
        <h3 className="font-semibold">3 - unds</h3>
        <h2 className="font-semibold">S/ 36.00</h2>
      </div>
      <div className="flex justify-between items-end">
        <ul className="font-light text-sm">
          <li>Detalle cremas</li>
          <li>Detalle box 12 unds</li>
          <li>Detalle Otros</li>
        </ul>
        <button className="font-light text-white bg-red-500 px-2 py-1 rounded shadow-red  hover:bg-red-600">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductoPedido;
