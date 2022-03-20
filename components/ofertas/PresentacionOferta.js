import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import ModalComprarOferta from "./ModalComprarOferta";

const PresentacionOferta = ({ presentacionOferta, dataProducto }) => {
  // State para abrir el modal de compra
  let [isOpen, setIsOpen] = React.useState(false);
  let [product, setProduct] = React.useState();

  return (
    // <div className="flex m-1 backdrop-filter backdrop-blur-3xl  rounded-lg shadow-sm">
    <>
      {/* <img
        src={dataProducto.url}
        alt="imagen de producto oishisushibar"
        className="rounded-t-xl"
      /> */}
      <div
        className="flex m-1 bg-gray-50 opacity-90  rounded-lg shadow-md cursor-pointer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="flex w-full px-2 py-1 items-center justify-between">
          <div>
            <p className="font-bold">{dataProducto.nombre}</p>
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
            </div>
          </div>
          <div className="ml-1">
            {presentacionOferta.disponibilidad_web == true && (
              <div className="w-4 h-4 bg-red-500 text-center text-xs text-white font-bold rounded mb-1">
                W
              </div>
            )}

            {presentacionOferta.disponibilidad_local == true && (
              <div className="w-4 h-4 bg-red-500 text-center text-xs text-white font-bold rounded">
                L
              </div>
            )}
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
    </>
  );
};

export default PresentacionOferta;
