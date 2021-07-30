import React from "react";
import Oferta from "./Oferta";
import Subtitulo from "../../ui/Subtitulo";

const OfertaExtra = () => {
  return (
    <div className="w-full">
      <Subtitulo>¿Algo para acompañar?</Subtitulo>
      <div className="flex overflow-x-auto whitespace-nowrap sm:overscroll-x-auto">
        <Oferta />
        <Oferta />
        <Oferta />
        <Oferta />
        <Oferta />
        <Oferta />
      </div>
    </div>
  );
};

export default OfertaExtra;
