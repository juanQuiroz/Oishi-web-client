import React from "react";
import Titulos from "../ui/Titulos";
import Categoria from "./Categoria";

const Categorias = () => {
  return (
    <div className="mx-2 sm:mx-4 my-5 sm:my-9">
      <Titulos>Categorias</Titulos>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 mt-4">
        <Categoria categoria="Sushi" />
        <Categoria categoria="Bebidas" />
        <Categoria categoria="Licores" />
        <Categoria categoria="Makis" />
        <Categoria categoria="Sushi" />
        <Categoria categoria="Bebidas" />
        <Categoria categoria="Licores" />
        <Categoria categoria="Makis" />
      </div>
    </div>
  );
};

export default Categorias;
