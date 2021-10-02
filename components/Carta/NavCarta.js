import React from "react";

const NavCarta = () => {
  return (
    <div className="sm:flex flex-col-reverse sm:flex-row justify-between mt-5 sm:mx-12 font-McLaren hidden">
      <ul className="flex justify-around sm:justify-center flex-wrap py-1 px-2 rounded-full text-lg sm:text-xl font-NanumGothic">
        <li className="mx-2 sm:mx-6">
          <a>Inicio</a>
        </li>
        <li className="mx-2 sm:mx-6">
          <a>Promos Oishi</a>
        </li>

        <li className="mx-2 sm:mx-6">
          <a>Carta</a>
        </li>
        <li className="mx-2 sm:mx-6">
          <a>Nosotros</a>
        </li>
        <li className="mx-2 sm:mx-6">
          <a>Catering</a>
        </li>
      </ul>
    </div>
  );
};

export default NavCarta;
