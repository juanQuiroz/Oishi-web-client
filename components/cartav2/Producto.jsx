import React from "react";
import ModalDetalleProducto from "../Carta/ModalDetalleProducto";

const Producto = ({ producto }) => {
  const minPrice = Math.min(
    ...producto.presentations.map(presentation => presentation.default_price),
  );

  const [product, setProduct] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="flex flex-wrap content-between bg-white shadow-oishiShadow1 rounded-2xl sm:rounded-3xl cursor-pointer "
        onClick={() => {
          setProduct(producto);
          setIsOpen(true);
        }}
      >
        <div>
          <img
            src={producto.image.url}
            alt="imagen de producto oishisushibar"
            className="rounded-t-2xl sm:rounded-t-3xl"
          />
        </div>

        <div className="p-2 sm:p-2">
          <p className="text-gray-800 my-0 font-semibold text-base leading-4">
            {producto.name}
          </p>
          <p className="text-gray-500 font-light leading-4 text-xs max-h-24 overflow-auto mt-2">
            {producto.description}
          </p>
          <p className="mt-3 mb-1 ml-1 font-bold text-red-500 leading-4 text-xl">
            S/ {minPrice.toFixed(2)}
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
