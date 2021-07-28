import React from "react";
import Titulos from "../ui/Titulos";
import ProductoPrincipal from "./ProductoPrincipal";

const PrincipalesProductos = () => {
  return (
    <div className="mx-2 sm:mx-4 my-4 sm:my-6">
      <Titulos>Lo más pedido de Oishi!</Titulos>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-6">
        <ProductoPrincipal />
        <ProductoPrincipal />
        <ProductoPrincipal />
        <ProductoPrincipal />
        <ProductoPrincipal />
        <ProductoPrincipal />
        <ProductoPrincipal />
        <ProductoPrincipal />
      </div>
    </div>
  );
};

export default PrincipalesProductos;
