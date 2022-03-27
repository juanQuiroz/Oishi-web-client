import React, { useContext } from "react";
import Layout from "../Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apitest } from "../../config/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";
import EditarCliente from "./EditarCliente";

const Cliente = () => {
  const pedidosContext = useContext(PedidosContext);
  const { cliente, addCustomer } = pedidosContext;

  const router = useRouter();

  const [editarCliente, setEditarCliente] = React.useState(false);

  const cerrarSesion = () => {
    localStorage.removeItem("customer");
    addCustomer(null);
    router.push("/users/clientes");
  };

  return (
    <>
      {editarCliente ? (
        <EditarCliente setEditarCliente={setEditarCliente} cliente={cliente} />
      ) : (
        <div className="sm:-mt-10">
          <div className="flex items-center my-6 mx-3 sm:mx-10 py-4  bg-gradient-to-b from-blueGray-100  to-blueGray-200 rounded-xl shadow-oishiShadow1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-oishiAzul2 sm:h-32 sm:w-32 text-center mx-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>

            <div className="w-8/12 mr-4">
              <div className="mb-1 ">
                <h3 className="text-xs text-oishiAzul2">Nombres:</h3>
                <h2 className="text-md font-Andika font-bold -mt-1.5">
                  {cliente.name}
                </h2>
              </div>
              <div className="mb-1 ">
                <h3 className="text-xs text-oishiAzul2">Apellidos:</h3>
                <h2 className="text-md font-Andika font-bold -mt-1.5">
                  {cliente.last_name}
                </h2>
              </div>
              <div className="mb-1 flex justify-between">
                <div className="">
                  <h3 className="text-xs text-oishiAzul2">DNI:</h3>
                  <h2 className="text-md font-Andika font-bold -mt-1.5">
                    {cliente.dni}
                  </h2>
                </div>
                <div className="mb-1 ">
                  <h3 className="text-xs text-oishiAzul2">Teléfono:</h3>
                  <h2 className="text-md font-Andika font-bold -mt-1.5">
                    {cliente.phone}
                  </h2>
                </div>
              </div>

              <div className="">
                <h3 className="text-xs text-oishiAzul2">Correo electrónico:</h3>
                <h2 className="text-md font-Andika font-bold -mt-1.5">
                  {cliente.email}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-3 sm:mb-12 sm:mx-8">
            <button
              onClick={() => setEditarCliente(true)}
              className="shadow-oishiShadow1 flex items-center justify-center border-2 border-oishiAzul2 rounded-xl py-2 w-1/2 text-center text-md text-oishiAzul2 font-bold mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <p className="text-md">Editar</p>
            </button>
            <button
              onClick={() => cerrarSesion()}
              className="shadow-red flex items-center justify-center border-2 border-red-500 rounded-xl py-2 w-1/2 text-center text-md text-red-600 font-bold ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>{" "}
              <p className="text-md">Cerrar Sesión</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cliente;
