import React from "react";
import Logo from "../assets/oishi/oishisushibar.svg";
import User from "../assets/icons/user.svg";
import Carrito from "../assets/icons/carrito.svg";

const Header = () => {
  return (
    <div className="w-full p-3">
      <div className="w-full flex justify-center">
        <Logo className="w-48 text-center mt-4" />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between mt-5 sm:mx-12 font-monse">
        <ul className="flex justify-around sm:justify-center flex-wrap py-1 px-2 rounded-full text-lg sm:text-xl ">
          <li className="mx-2 sm:mx-6">Inicio</li>
          <li className="mx-2 sm:mx-6">Ofertas</li>
          <li className="mx-2 sm:mx-6">Carta</li>
          <li className="mx-2 sm:mx-6">Nostros</li>
          <li className="mx-2 sm:mx-6">Catering</li>
        </ul>
        <ul className="flex flex-none justify-end py-1 px-2 rounded-full w-auto">
          <div className="flex bg-gray-700 px-1 rounded-full ">
            <User className="h-9 sm:h-10" />

            <Carrito className="h-9 sm:h-10" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
