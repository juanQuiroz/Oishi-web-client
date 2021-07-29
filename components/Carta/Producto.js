import React from "react";
import Subtitulo from "../ui/Subtitulo";
import PresentacionProducto from "./PresentacionProducto";

const Producto = () => {
  return (
    <div className="border border-blueGray-700 mx-2 sm:mx-4 my-4 sm:my-6 rounded-md p-2">
      <Subtitulo>Makis</Subtitulo>
      <div className="grid grid-cols-3 gap-1 sm:grid-cols-5 sm:gap-2 sm:px-3">
        <PresentacionProducto />
        <PresentacionProducto />
        <PresentacionProducto />
        <PresentacionProducto />
        <PresentacionProducto />
        <PresentacionProducto />
      </div>
    </div>
  );
};

export default Producto;
