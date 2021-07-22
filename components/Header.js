import React from "react";

const Header = () => {
  return (
    <div className="w-full p-3">
      <h1 className="text-center font-sans text-2xl font-gray">Logo Oishi</h1>

      <div className="flex justify-between">
        <ul className="flex">
          <li className="mx-1">Inicio</li>
          <li className="mx-1">Ofertas</li>
          <li className="mx-1">Carta</li>
          <li className="mx-1">Nostros</li>
          <li className="mx-1">Catering</li>
        </ul>
        <ul className="flex">
          <li>Usuario</li>
          <li>Carrito</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
