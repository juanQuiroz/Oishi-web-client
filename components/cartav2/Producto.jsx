import React from 'react'
import ModalDetalleProducto from '../Carta/ModalDetalleProducto';

const Producto = ({producto}) => {

  const minPrice = Math.min(...producto.presentations.map(presentation => presentation.default_price))

  console.log("🚀 ~ file: Producto.jsx ~ line 9 ~ Producto ~ prices", minPrice)


  const [product, setProduct] = React.useState()
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="flex flex-wrap content-between bg-white shadow-oishiShadow1 rounded-xl cursor-pointer "
        onClick={() => {
          setProduct(producto);
          setIsOpen(true);
        }}
      >
        <div>
          <img
            src={producto.image.url}
            alt="imagen de producto oishisushibar"
            className="rounded-t-xl"
          />
        </div>

        <div className="p-2 sm:p-2">
          <p className="text-gray-800 my-0 font-semibold text-base">
            {producto.name}
          </p>
          <p className="text-gray-500 font-light leading-4 text-xs">
            {producto.description}
            
          </p>
          <p className="mt-2  font-bold text-red-500 leading-4 text-lg">
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
  )
}

export default Producto