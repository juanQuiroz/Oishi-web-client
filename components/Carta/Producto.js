import React from "react";
import ModalDetalleProducto from "./ModalDetalleProducto";

const Producto = ({ producto }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  let [product, setProduct] = React.useState();

  // * Calcular el menor precio para mostar
  const preciosDefault = producto.locales[0].presentaciones.map(
    presentacion => presentacion.precio_default,
  );

  const preciosOferta = producto.locales[0].presentaciones.map(
    presentacion => presentacion.oferta,
  );

  // const concatenarPrecios = preciosDefault.concat(preciosOferta);
  console.log(preciosDefault, preciosOferta);

  const menorPrecio = Math.min(...preciosDefault, ...preciosOferta);

  // console.log("concatenarPrecios ::: ", concatenarPrecios);
  console.log("menorPrecio ::::: ", menorPrecio);

  return (
    <>
      <div
        className="flex flex-wrap content-between bg-white shadow-md rounded-xl cursor-pointer "
        onClick={() => {
          setProduct(producto);
          setIsOpen(true);
        }}
      >
        <div>
          <img
            src={producto.url}
            alt="imagen de producto oishisushibar"
            className="rounded-t-xl"
          />
        </div>

        <div className="p-2 sm:p-2">
          <p className="text-gray-800 my-0 font-semibold text-base">
            {producto.nombre}
          </p>
          <p className="text-gray-500 font-light leading-4 text-xs">
            {producto.descripcion}
          </p>
          <p className="mt-2  font-bold text-red-500 leading-4 text-lg">
            S/ {menorPrecio.toFixed(2)}
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
