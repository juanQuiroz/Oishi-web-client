import React from "react";
import ModalDetalleProducto from "./ModalDetalleProducto";

const Producto = ({ producto }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  let [product, setProduct] = React.useState();
  console.log("producto:->", producto);

  return (
    <>
      <div
        className="flex flex-wrap content-between bg-white shadow rounded-md cursor-pointer"
        onClick={() => {
          setProduct(producto);
          setIsOpen(true);
        }}
      >
        <div>
          <img
            src={producto.url}
            alt="imagen de producto oishisushibar"
            className="rounded-t-md"
          />
        </div>

        <div className="p-2 sm:p-2">
          <p className="text-gray-800 my-0 font-semibold text-base">
            {producto.nombre}
          </p>
          <p className="text-gray-500 font-light leading-4 text-xs">
            {producto.descripcion}
          </p>
        </div>
      </div>

      {product && (
        <ModalDetalleProducto
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          product={product}
        />
      )}
    </>
  );
};

export default Producto;
