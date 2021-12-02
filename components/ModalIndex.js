import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import PedidosContext from "../context/pedidos/pedidosContex";

export default function ModalIndex({ isOpen, setIsOpen }) {
  const pedidosContext = React.useContext(PedidosContext);
  const { selectLocal, localSeleccionado } = pedidosContext;

  console.log("localSeleccionado: ", localSeleccionado);

  const addLocalLocalStorage = local => {
    localStorage.setItem("local", JSON.stringify(local));
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-8 text-center bg-white bg-opacity-80 shadow-2xl">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
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
              <div className="inline-block w-full max-w-md  my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-100 shadow-2xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="p-4 text-center font-bold leading-6 text-oishiNegro font-Andika text-3xl"
                >
                  Elige un local
                </Dialog.Title>

                <div className="my-4 mx-4 flex justify-evenly">
                  <div
                    className="cursor-pointer bg-transparent flex-col items-center p-2"
                    onClick={() => {
                      selectLocal(1);
                      addLocalLocalStorage(1);
                      closeModal();
                    }}
                  >
                    <img
                      src="/oishicanete.jpeg"
                      alt=""
                      className="w-32 rounded-xl"
                    />

                    <p className="text-lg font-Andika text-center">
                      Oishi Cañete
                    </p>
                  </div>
                  <div
                    className="cursor-pointer bg-transparent flex-col items-center p-2"
                    onClick={() => {
                      selectLocal(2);
                      addLocalLocalStorage(2);
                      closeModal();
                    }}
                  >
                    <img
                      src="/oishiIca.jpeg"
                      alt=""
                      className="w-32 rounded-xl"
                    />
                    <p className="text-lg font-Andika text-center">Oishi Ica</p>
                  </div>
                </div>

                {/* <div className=" px-3 mb-3 mt-6 w-full">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-700  border border-blue-600 rounded-xl  focus:outline-none "
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
                    Retornar
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
