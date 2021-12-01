import React from "react";

const MensajeDisponibilidad = () => {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 mx-2 sm:mx-3">
      <p className="w-full h-9 bg-red-500 text-center text-md py-2 text-white font-bold rounded-lg">
        W = Exclusivo sólo por compras en la web
      </p>
      <p className="w-full h-9 bg-red-500 text-center text-md py-2 text-white font-bold rounded-lg">
        L = Disponible para consumo en el restaurante
      </p>
    </div>
  );
};

export default MensajeDisponibilidad;
