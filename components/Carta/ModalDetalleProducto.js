import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Presentacion from "./Presentacion";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";

export default function ModalDetalleProducto({ isOpen, setIsOpen, product }) {
  console.log(
    "🚀 ~ file: ModalDetalleProducto.js ~ line 9 ~ ModalDetalleProducto ~ product",
    product,
  );
  function closeModal() {
    setIsOpen(false);
  }

  const pedidosContext = React.useContext(PedidosContext);
  const { localSeleccionado } = pedidosContext;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center backdrop-filter backdrop-blur-md">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md  my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                {product && (
                  <div className="">
                    <img
                      src={product.image.url}
                      alt="imagen de producto"
                      className="w-full"
                    />
                    <div className="m-3">
                      <p className="text-2xl text-gray-800 font-bold font-Andika">
                        {product.name}
                      </p>
                      <p className="text-md leading-5 text-gray-600">
                        {product.description}
                      </p>
                      <div className="my-4">
                        <div className="my-2">
                          <p className="-mb-1">
                            {product.presentations[0].local_id == 1
                              ? "Cañete"
                              : "Ica"}
                          </p>
                          {product.presentations.map(presentacion =>
                            presentacion.disponibilidadLocal === false &&
                            presentacion.disponibilidadWeb === false ? (
                              ""
                            ) : (
                              <Presentacion
                                key={presentacion.id}
                                presentacionData={presentacion}
                                product={product}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mx-3 mb-3 mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-700  border border-blue-600 rounded-xl  focus:outline-none "
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    seguir comprando
                  </button>
                  <Link href="/cesta/cesta/">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-emerald-700 shadow-green  border border-green-600 rounded-xl  focus:outline-none "
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Ir a la cesta
                    </button>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
