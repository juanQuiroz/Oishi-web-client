import React from "react";
import Link from "next/link";
import Logo from "../assets/oishi/oishisushibar.svg";
import User from "../assets/icons/user.svg";
import Carrito from "../assets/icons/carrito.svg";

const Header = () => {
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <Logo className="w-48 text-center" />
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
        <ul className="flex flex-none justify-end py-1  rounded-full w-auto">
          <div className="flex bg-oishiCeleste px-4 py-2 rounded-l-full">
            {/* <Link href="/users/login">
              <a>
                <User className="h-9 sm:h-10 cursor-pointer" />
              </a>
            </Link> */}
            <Link href="/cesta/cesta">
              <a className="ransition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-oishiNegro "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </ul>
      </div>

      <div className="sm:flex flex-col-reverse sm:flex-row justify-between mt-5 sm:mx-12 font-Andika hidden mb-12">
        <ul className="flex justify-around sm:justify-center flex-wrap py-1 px-2 rounded-full text-lg sm:text-2xl font-Andika">
          <li className="mx-2 sm:mx-6">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="mx-2 sm:mx-6">
            <Link href="/ofertas">
              <a>Promos Oishi</a>
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
          <div className="flex bg-oishiCeleste px-3 py-1 rounded-full ">
            {/* <Link href="/users/login">
              <a>
                <User className="h-9 sm:h-10 cursor-pointer" />
              </a>
            </Link> */}
            <Link href="/cesta/cesta">
              <a className="ransition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-oishiNegro "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </ul>
      </div>

      <div className={`flex ${isOpen ? "block" : "hidden"} `}>
        <ul className="font-Andika text-2xl">
          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/ofertas">
              <a>Promos Oishi</a>
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
