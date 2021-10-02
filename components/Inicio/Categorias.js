import React from "react";
import Titulos from "../ui/Titulos";
import Categoria from "./Categoria";

const Categorias = () => {
  return (
    <div className="mx-2 sm:mx-4 my-5 sm:mt-9">
      <Titulos>Categorias</Titulos>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 mt-4">
        <Categoria categoria="Oishi piqueos" />
        <Categoria categoria="Acompañamientos" />
        <Categoria categoria="Paltos calientes" />
        <Categoria categoria="Sanguches" />
        <Categoria categoria="Makis" />
        <Categoria categoria="Combinados" />
        <Categoria categoria="Bebidas" />
        <Categoria categoria="Sandwich furai" />
      </div>
    </div>
  );
};

export default Categorias;
