import React from "react";
import Link from "next/link";
import Libro from "../assets/icons/libro.svg";
import Oishi from "../assets/icons/oishiblack.svg";
import Insta from "../assets/icons/insta.svg";
import Facebook from "../assets/icons/facebook.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";

const Footer = () => {
  return (
    <div className="w-full bg-blueGray-200 p-3 font-monse rounded-t-lg sm:px-10">
      <div className="flex justify-between">
        <Oishi className="h-20 self-center sm:block hidden" />
        <div>
          <h1 className="text-lg font-bold text-warmGray-800 mb-3">
            Mas sobre oishi
          </h1>
          <ul className="text-sm">
            <li>
              <Link href="/cobertura">
                <a>Cobertura</a>
              </Link>
            </li>
            <li>
              <Link href="/nuestros-locales">
                <a>Nuestros locales</a>
              </Link>
            </li>
            <li>
              <Link href="/politicas-privacidad">
                <a>Politicas de privacidad</a>
              </Link>
            </li>
            <li>
              <Link href="/terminos-condiciones">
                <a>Terminos y condiciones de servicio</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col sm:flex mt-6">
          <Link href="/libro-reclamaciones">
            <a>
              <Libro className="h-16 self-center" />
              <h3 className="text-sm">
                Libro de <br />
                reclamaciones
              </h3>
            </a>
          </Link>
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
