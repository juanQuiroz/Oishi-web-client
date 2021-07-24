import React, { useState } from "react";
import Link from "next/link";
import Logo from "../assets/oishi/oishisushibar.svg";
import User from "../assets/icons/user.svg";
import Carrito from "../assets/icons/carrito.svg";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isMobile, setIsmobile] = useState(true);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className="w-full p-3">
      <div className="w-full flex justify-center">
        <Logo className="w-48 text-center mt-4" />
      </div>

      <div className="flex justify-between sm:hidden">
        <button type="button" onClick={handleClick}>
          <svg
            className="h-9 w-9 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen && (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
            {!isOpen && (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
        <ul className="flex flex-none justify-end py-1 px-2 rounded-full w-auto">
          <div className="flex bg-gray-700 px-1 rounded-full ">
            <Link href="/users/login">
              <a>
                <User className="h-9 sm:h-10 cursor-pointer" />
              </a>
            </Link>
            <Link href="/cesta/cesta">
              <a>
                <Carrito className="h-9 sm:h-10 cursor-pointer" />
              </a>
            </Link>
          </div>
        </ul>
      </div>

      <div className="sm:flex flex-col-reverse sm:flex-row justify-between mt-5 sm:mx-12 font-monse hidden">
        <ul className="flex justify-around sm:justify-center flex-wrap py-1 px-2 rounded-full text-lg sm:text-xl ">
          <li className="mx-2 sm:mx-6">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="mx-2 sm:mx-6">
            <Link href="/ofertas">
              <a>Ofertas</a>
            </Link>
          </li>

          <li className="mx-2 sm:mx-6">
            <Link href="/carta">
              <a>Carta</a>
            </Link>
          </li>
          <li className="mx-2 sm:mx-6">
            <Link href="/nosotros">
              <a>Nosotros</a>
            </Link>
          </li>
          <li className="mx-2 sm:mx-6">
            <Link href="/catering">
              <a>Catering</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-none justify-end py-1 px-2 rounded-full w-auto">
          <div className="flex bg-gray-700 px-1 rounded-full ">
            <Link href="/users/login">
              <a>
                <User className="h-9 sm:h-10 cursor-pointer" />
              </a>
            </Link>
            <Link href="/cesta/cesta">
              <a>
                <Carrito className="h-9 sm:h-10 cursor-pointer" />
              </a>
            </Link>
          </div>
        </ul>
      </div>

      <div className={`lg:flex ${isOpen ? "block" : "hidden"} `}>
        <ul className="font-monse text-lg">
          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/ofertas">
              <a>Ofertas</a>
            </Link>
          </li>

          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/carta">
              <a>Carta</a>
            </Link>
          </li>
          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/nosotros">
              <a>Nosotros</a>
            </Link>
          </li>
          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/catering">
              <a>Catering</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
