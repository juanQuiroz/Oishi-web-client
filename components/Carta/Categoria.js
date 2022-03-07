import React from "react";
import Subtitulo from "../ui/Subtitulo";
import Producto from "./Producto";

const Categoria = ({ categoria }) => {
  console.log("CategoriaProducto:", categoria);
  return (
    <div className="border border-blueGray-500 mx-2 sm:mx-4 my-4 sm:my-6 rounded-md p-2">
      <Subtitulo key={categoria.id}>
        {categoria.descripcion_categoria}
      </Subtitulo>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-6 sm:gap-2 sm:px-3">
        {/* <PresentacionProducto /> */}
        {categoria.productos.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Categoria;
