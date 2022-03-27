import React from "react";

const MensajeDisponibilidad = () => {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 mx-1 sm:mx-2 px-1 sm:px-4 mb-5">
      <p className="w-full h-9 bg-red-500 text-center text-md py-2 text-white font-bold rounded-xl">
        W = Exclusivo sólo por compras en la web
      </p>
      <p className="w-full h-9 bg-red-500 text-center text-md py-2 text-white font-bold rounded-xl">
        L = Disponible para consumo en el restaurante
      </p>
    </div>
  );
};

export default MensajeDisponibilidad;
