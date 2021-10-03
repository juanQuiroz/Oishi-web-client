import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Presentacion from "./Presentacion";

export default function ModalDetalleProducto({ isOpen, setIsOpen, product }) {
  //   let [isOpen, setIsOpen] = useState();

  function closeModal() {
    setIsOpen(false);
  }

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  console.log("modalProduct: ", product);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
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
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {product && product.nombre}
                </Dialog.Title> */}
                {product && (
                  <div className="">
                    <img
                      src={product.url}
                      alt="imagen de producto"
                      className="w-full"
                    />
                    <div className="m-3">
                      <p className="text-2xl text-gray-800 font-bold font-Andika">
                        {product.nombre}
                      </p>
                      <p className="text-md leading-5 text-gray-600">
                        {product.descripcion}
                      </p>
                      <div className="my-4">
                        {product.locales &&
                          product.locales.map(local => (
                            <div key={local.localId} className="my-2">
                              <p className="-mb-1">{local.descripcion}</p>
                              {local.presentaciones.map(presentacion => (
                                <Presentacion
                                  key={presentacion.localId}
                                  presentacion={presentacion}
                                />
                              ))}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mx-3 mb-3 mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700  border border-red-600 rounded-xl  focus:outline-none "
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-emerald-700 shadow-green  border border-green-600 rounded-xl  focus:outline-none "
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    confirmar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
