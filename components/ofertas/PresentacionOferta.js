import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import ModalComprarOferta from "./ModalComprarOferta";

const PresentacionOferta = ({ presentacionOferta, dataProducto }) => {
  // State para abrir el modal de compra
  let [isOpen, setIsOpen] = React.useState(false);
  let [product, setProduct] = React.useState();

  console.log("dataProducto -> ", dataProducto);

  return (
    // <div className="flex m-1 backdrop-filter backdrop-blur-3xl  rounded-lg shadow-sm">
    <div className="flex m-1 bg-gray-50 opacity-90  rounded-lg shadow-md">
      <div className="w-full p-2">
        <p className="font-bold">
          {presentacionOferta.descripcion_presentacion}
        </p>

        <div className="flex justify-between items-center">
          <div>
            <p className="line-through text-sm text-blueGray-400">
              S/ {presentacionOferta.precio_default}
            </p>
            <p className="text-lg text-red-600 font-semibold">
              S/ {presentacionOferta.precio_oferta}
            </p>
          </div>
          <button
            className="bg-transparent mr-2"
            onClick={() => {
              setIsOpen(true);
              console.log("ONCLICK OFERTA COMPONENT");
            }}
          >
            <MdAddShoppingCart className="w-8 h-8 text-red-500 " />
          </button>
        </div>
      </div>
      {presentacionOferta && dataProducto && (
        <ModalComprarOferta
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          presentacionOferta={presentacionOferta}
          dataProducto={dataProducto}
        />
      )}
    </div>
  );
};

export default PresentacionOferta;
