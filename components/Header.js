import React, { useContext } from "react";
import Link from "next/link";
import Logo from "../assets/oishi/oishisushibar.svg";
import User from "../assets/icons/user.svg";
import PedidosContext from "../context/pedidos/pedidosContex";
import Canete from "../assets/localosihi/canete.svg";
import Ica from "../assets/localosihi/ica.svg";
import Chincha from "../assets/localosihi/chincha.svg";

const Header = () => {
  const pedidosContext = useContext(PedidosContext);
  const {
    selectLocal,
    localSeleccionado,
    vaciarCesta,
    totalPedidos,
    setConfirmarpedido,
    cliente,
    addCustomer,
    addCustomerToken,
  } = pedidosContext;

  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("local"));
    const customer = JSON.parse(localStorage.getItem("customer"));
    const customer_token = JSON.parse(localStorage.getItem("customer_token"));

    selectLocal(local);
    addCustomer(customer);
    addCustomerToken(customer_token);
    console.log("local useEffect header: ", local);
  }, []);

  const cambiarLocal = local => {
    selectLocal(local);

    localStorage.setItem("local", JSON.stringify(local));
  };

  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className="w-full sm:pt-7">
      <div className="w-full flex justify-center">
        <Logo className="w-48 text-center" />
      </div>
      <p className="font-Andika text-center text-lg text-gray-600">
        Te encuentras en{" "}
        {localSeleccionado == 1
          ? "Oishi Cañete"
          : localSeleccionado == 2
          ? "Oishi Ica"
          : "Oishi Chincha"}
      </p>
      <p className="font-Andika font-bold text-center text-lg text-oishiAzul3">
        {cliente && cliente.first_name}
      </p>

      {/* Menu desplegable */}
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
        <ul className="flex flex-none justify-end py-1 rounded-full w-auto">
          <div className="flex items-center bg-oishiCeleste pr-2 pl-1 py-1.5 rounded-l-full">
            <a
              onClick={() => {
                vaciarCesta();
                setConfirmarpedido(false);
                localSeleccionado == 1
                  ? cambiarLocal(2)
                  : localSeleccionado == 2
                  ? cambiarLocal(3)
                  : cambiarLocal(1);
              }}
              className="cursor-pointer mr-2 ml-1 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              {localSeleccionado == 1 ? (
                <Canete className="w-8 h-8" />
              ) : localSeleccionado == 2 ? (
                <Ica className="w-8 h-8" />
              ) : (
                <Chincha className="w-8 h-8" />
              )}
            </a>

            {/* cesta movil */}
            <Link href="/cesta/cesta">
              <a className="mx-1 relative transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                {totalPedidos > 0 && (
                  <div className="absolute top-0 right-0 bg-red-600 h-2 w-2 rounded-full"></div>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 470.21 383.81"
                  className="h-7 w-7 "
                  fill="none"
                  stroke="currentColor"
                >
                  <g id="Capa_2" data-name="Capa 2">
                    <g id="Capa_1-2" data-name="Capa 1">
                      <g id="Carrito_web" data-name="Carrito web">
                        <path
                          d="M462,158.73c-6.17-.18-12.36-.08-18.53-.08H376.81c-12.26-15.89-24.41-31.54-36.52-47.24-7.28-9.43-14-19.31-21.84-28.26-8.77-10.06-13.32-21.61-15.36-34.48-1.78-11.31-3.71-22.59-5.59-33.87-.27-1.75-.19-3.6-.77-5.22C295,4.82,292.47.47,286.69.5s-8.31,4.29-9.16,9.48a69.9,69.9,0,0,0-1,10.51c-.1,11,.27,22.06,0,33.11-.34,11.6,3.5,21.45,10.59,30.48,17.7,22.53,35.15,45.26,52.68,67.93,1.32,1.69,2.54,3.46,4.87,6.62-15.52,0-29.55,0-43.59,0-15.28,0-17.34,1.49-21.66,15.65-2.94,9.7-5.54,19.47-8.45,29.16-1.65,5.49-3.3,8.86-6,10.87-3.27,2.45-6.72,2.54-11.92,2.69-11.93.35-18.26.52-35.81,0-5.19-.15-8.65-.24-11.91-2.69-2.68-2-4.33-5.38-6-10.87-2.91-9.69-5.51-19.46-8.45-29.16-4.31-14.16-6.38-15.62-21.66-15.65-14-.05-28.07,0-43.59,0,2.33-3.16,3.55-4.93,4.88-6.62,17.53-22.67,35-45.4,52.67-67.93,7.1-9,10.94-18.88,10.59-30.48-.32-11.05,0-22.09-.05-33.11a69.9,69.9,0,0,0-1-10.51C191.83,4.79,189.4.53,183.52.5s-8.34,4.32-10,9.08c-.58,1.62-.5,3.47-.77,5.22-1.88,11.28-3.81,22.56-5.58,33.87-2,12.87-6.6,24.42-15.36,34.48-7.84,8.95-14.57,18.83-21.85,28.26-12.1,15.7-24.26,31.35-36.52,47.24H26.8c-6.17,0-12.37-.1-18.54.08C2.88,158.89,0,162,.58,167.31c1,8.29,2.33,16.55,4,24.71.95,4.69,4.6,7.39,9.16,8.63,2.41.67,4.84,1.14,7.12,1.64,1.3,12.69,2.49,24.5,3.76,36.31q3,27.61,6,55.19c2.3,20.58,5.08,41.08,6.94,61.7,1.83,20.34,8.95,27.63,29,27.81,1.77,0,3.55,0,5.32,0H398.26c1.78,0,3.55,0,5.33,0,20-.18,27.17-7.47,29-27.81,1.86-20.62,4.64-41.12,6.94-61.7q3.11-27.57,6-55.19c1.27-11.81,2.46-23.62,3.76-36.31,2.28-.5,4.72-1,7.13-1.64,4.55-1.24,8.2-3.94,9.16-8.63,1.69-8.16,3-16.42,4-24.71C470.24,162,467.33,158.89,462,158.73ZM43.38,237.33q-2-17.67-4.08-35.35l48-.64q1.39,18,2.81,36Zm2.33,25.13c15.7-.21,30.42-.21,46.34.08,1.24,14.65,2.41,28.39,3.71,43.83-15.18.16-29.42.26-44.84-.13C49.17,291.65,47.53,277.88,45.71,262.46ZM76,365.19c-5.35,0-10.7,1.61-14.62-1.62-2.41-2-3.25-4.74-4.08-8.34a124.8,124.8,0,0,1-3.17-24.18c14.35-.16,28.52-.5,43,.35q2.43,16.75,4.82,33.52C91.94,365.08,83.2,365.16,76,365.19Zm32.79-163.64h48v35.62H111.51C110.61,225.52,109.71,213.92,108.79,201.55Zm5.19,61c7.44-.06,14.88-.08,22.32-.11l22.75-.08c.9,14.91,1.72,28.34,2.65,43.4l-43.57.75Q116,284.51,114,262.52ZM124.46,364.9q-2.05-17-4.13-34.06l41.18.08q1.67,16.65,3.31,33.29Q144.65,364.57,124.46,364.9Zm63.06-102h32.17v42.74H188.58Q188.05,284.26,187.52,262.89ZM192,364.13l-2.94-33h30.19c.26,11,.53,22,.77,33Zm86.28,0h-28c.24-11,.5-22,.77-33h30.19C280.21,342.12,279.23,353.14,278.25,364.13Zm3.39-58.5H250.52V262.89H282.7Q282.13,284.25,281.64,305.63Zm64.11,59.27q-20.17-.36-40.36-.69,1.67-16.65,3.31-33.29l41.18-.08Q347.81,347.88,345.75,364.9Zm6.33-58.42-43.56-.75c.92-15.06,1.74-28.49,2.64-43.4l22.75.08c7.44,0,14.89,0,22.33.11Q354.17,284.48,352.08,306.48Zm6.62-69.31H313.47V201.55h48C360.5,213.92,359.6,225.52,358.7,237.17Zm54.21,118.06c-.82,3.6-1.67,6.36-4.08,8.34-3.92,3.23-9.27,1.64-14.62,1.62-7.2,0-15.94-.11-25.95-.27q2.39-16.76,4.82-33.52c14.48-.85,28.65-.51,43-.35A125.46,125.46,0,0,1,412.91,355.23Zm6.38-49c-15.41.39-29.66.29-44.83.13,1.29-15.44,2.46-29.18,3.7-43.83,15.92-.29,30.64-.29,46.35-.08C422.68,277.88,421,291.65,419.29,306.24Zm7.55-68.91H380.12q1.39-18,2.81-36l48,.64Q428.9,219.65,426.84,237.33Z"
                          style={{
                            fill: "#1d1d1b",
                            stroke: "#07070c",
                            strokeMiterlimit: 10,
                          }}
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
            <Link href="/users/clientes">
              <a>
                <User className=" h-9 sm:h-10 cursor-pointer" />
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
            <Link href="/cartaOishi">
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
          <div className="flex items-center bg-oishiCeleste px-2 py-1.5 rounded-full">
            <a
              onClick={() => {
                vaciarCesta();
                setConfirmarpedido(false);
                localSeleccionado == 1
                  ? cambiarLocal(2)
                  : localSeleccionado == 2
                  ? cambiarLocal(3)
                  : cambiarLocal(1);
              }}
              className="cursor-pointer ml-1 mr-2"
            >
              {localSeleccionado == 1 ? (
                <Canete className="w-8 h-8" />
              ) : localSeleccionado == 2 ? (
                <Ica className="w-8 h-8" />
              ) : (
                <Chincha className="w-8 h-8" />
              )}
            </a>
            <Link href="/cesta/cesta">
              <a className="relative">
                {totalPedidos > 0 && (
                  <div className="absolute top-0 right-0 bg-red-600 h-2 w-2 rounded-full"></div>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 470.21 383.81"
                  className="z-0 h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                >
                  <g id="Capa_2" data-name="Capa 2">
                    <g id="Capa_1-2" data-name="Capa 1">
                      <g id="Carrito_web" data-name="Carrito web">
                        <path
                          d="M462,158.73c-6.17-.18-12.36-.08-18.53-.08H376.81c-12.26-15.89-24.41-31.54-36.52-47.24-7.28-9.43-14-19.31-21.84-28.26-8.77-10.06-13.32-21.61-15.36-34.48-1.78-11.31-3.71-22.59-5.59-33.87-.27-1.75-.19-3.6-.77-5.22C295,4.82,292.47.47,286.69.5s-8.31,4.29-9.16,9.48a69.9,69.9,0,0,0-1,10.51c-.1,11,.27,22.06,0,33.11-.34,11.6,3.5,21.45,10.59,30.48,17.7,22.53,35.15,45.26,52.68,67.93,1.32,1.69,2.54,3.46,4.87,6.62-15.52,0-29.55,0-43.59,0-15.28,0-17.34,1.49-21.66,15.65-2.94,9.7-5.54,19.47-8.45,29.16-1.65,5.49-3.3,8.86-6,10.87-3.27,2.45-6.72,2.54-11.92,2.69-11.93.35-18.26.52-35.81,0-5.19-.15-8.65-.24-11.91-2.69-2.68-2-4.33-5.38-6-10.87-2.91-9.69-5.51-19.46-8.45-29.16-4.31-14.16-6.38-15.62-21.66-15.65-14-.05-28.07,0-43.59,0,2.33-3.16,3.55-4.93,4.88-6.62,17.53-22.67,35-45.4,52.67-67.93,7.1-9,10.94-18.88,10.59-30.48-.32-11.05,0-22.09-.05-33.11a69.9,69.9,0,0,0-1-10.51C191.83,4.79,189.4.53,183.52.5s-8.34,4.32-10,9.08c-.58,1.62-.5,3.47-.77,5.22-1.88,11.28-3.81,22.56-5.58,33.87-2,12.87-6.6,24.42-15.36,34.48-7.84,8.95-14.57,18.83-21.85,28.26-12.1,15.7-24.26,31.35-36.52,47.24H26.8c-6.17,0-12.37-.1-18.54.08C2.88,158.89,0,162,.58,167.31c1,8.29,2.33,16.55,4,24.71.95,4.69,4.6,7.39,9.16,8.63,2.41.67,4.84,1.14,7.12,1.64,1.3,12.69,2.49,24.5,3.76,36.31q3,27.61,6,55.19c2.3,20.58,5.08,41.08,6.94,61.7,1.83,20.34,8.95,27.63,29,27.81,1.77,0,3.55,0,5.32,0H398.26c1.78,0,3.55,0,5.33,0,20-.18,27.17-7.47,29-27.81,1.86-20.62,4.64-41.12,6.94-61.7q3.11-27.57,6-55.19c1.27-11.81,2.46-23.62,3.76-36.31,2.28-.5,4.72-1,7.13-1.64,4.55-1.24,8.2-3.94,9.16-8.63,1.69-8.16,3-16.42,4-24.71C470.24,162,467.33,158.89,462,158.73ZM43.38,237.33q-2-17.67-4.08-35.35l48-.64q1.39,18,2.81,36Zm2.33,25.13c15.7-.21,30.42-.21,46.34.08,1.24,14.65,2.41,28.39,3.71,43.83-15.18.16-29.42.26-44.84-.13C49.17,291.65,47.53,277.88,45.71,262.46ZM76,365.19c-5.35,0-10.7,1.61-14.62-1.62-2.41-2-3.25-4.74-4.08-8.34a124.8,124.8,0,0,1-3.17-24.18c14.35-.16,28.52-.5,43,.35q2.43,16.75,4.82,33.52C91.94,365.08,83.2,365.16,76,365.19Zm32.79-163.64h48v35.62H111.51C110.61,225.52,109.71,213.92,108.79,201.55Zm5.19,61c7.44-.06,14.88-.08,22.32-.11l22.75-.08c.9,14.91,1.72,28.34,2.65,43.4l-43.57.75Q116,284.51,114,262.52ZM124.46,364.9q-2.05-17-4.13-34.06l41.18.08q1.67,16.65,3.31,33.29Q144.65,364.57,124.46,364.9Zm63.06-102h32.17v42.74H188.58Q188.05,284.26,187.52,262.89ZM192,364.13l-2.94-33h30.19c.26,11,.53,22,.77,33Zm86.28,0h-28c.24-11,.5-22,.77-33h30.19C280.21,342.12,279.23,353.14,278.25,364.13Zm3.39-58.5H250.52V262.89H282.7Q282.13,284.25,281.64,305.63Zm64.11,59.27q-20.17-.36-40.36-.69,1.67-16.65,3.31-33.29l41.18-.08Q347.81,347.88,345.75,364.9Zm6.33-58.42-43.56-.75c.92-15.06,1.74-28.49,2.64-43.4l22.75.08c7.44,0,14.89,0,22.33.11Q354.17,284.48,352.08,306.48Zm6.62-69.31H313.47V201.55h48C360.5,213.92,359.6,225.52,358.7,237.17Zm54.21,118.06c-.82,3.6-1.67,6.36-4.08,8.34-3.92,3.23-9.27,1.64-14.62,1.62-7.2,0-15.94-.11-25.95-.27q2.39-16.76,4.82-33.52c14.48-.85,28.65-.51,43-.35A125.46,125.46,0,0,1,412.91,355.23Zm6.38-49c-15.41.39-29.66.29-44.83.13,1.29-15.44,2.46-29.18,3.7-43.83,15.92-.29,30.64-.29,46.35-.08C422.68,277.88,421,291.65,419.29,306.24Zm7.55-68.91H380.12q1.39-18,2.81-36l48,.64Q428.9,219.65,426.84,237.33Z"
                          style={{
                            fill: "#1d1d1b",
                            stroke: "#07070c",
                            strokeMiterlimit: 10,
                          }}
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
            <Link href="/users/clientes">
              <a>
                <User className=" h-9 sm:h-10 cursor-pointer" />
              </a>
            </Link>
          </div>
        </ul>
      </div>
      {/* Menu  */}
      <div className={`flex ${isOpen ? "block" : "hidden"} `}>
        <ul className="font-Andika text-2xl">
          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>

          <li className="mx-2 my-2 sm:mx-6 px-2">
            <Link href="/cartaOishi">
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
