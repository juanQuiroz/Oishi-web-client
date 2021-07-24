import React from "react";
import Libro from "../assets/icons/libro.svg";
import Oishi from "../assets/icons/oishiblack.svg";
import Insta from "../assets/icons/insta.svg";
import Facebook from "../assets/icons/facebook.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";

const Footer = () => {
  return (
    <div className="w-full bg-blueGray-200 p-3 font-monse rounded-t-lg">
      <div className="flex justify-between">
        <Oishi className="h-20 self-center sm:block hidden" />
        <div>
          <h1 className="text-lg font-bold text-warmGray-800 mb-3">
            Mas sobre oishi
          </h1>
          <ul className="text-sm">
            <li>Cobertura</li>
            <li>Nuestros locales</li>
            <li>Politicas de privacidad</li>
            <li>Terminos y condiciones de servicio</li>
          </ul>
        </div>
        <div className="flex-col sm:flex mt-3">
          <Libro className="h-16 self-center" />
          <h3 className="text-sm">Libro de reclamaciones</h3>
        </div>
      </div>
      <div className="flex justify-evenly sm:justify-start mt-2">
        <Insta className="h-7 sm:mx-6" />
        <Facebook className="h-7 sm:mx-6" />
        <Whatsapp className="h-7 sm:mx-6" />
      </div>
    </div>
  );
};

export default Footer;
