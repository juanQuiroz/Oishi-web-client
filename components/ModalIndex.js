import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import PedidosContext from "../context/pedidos/pedidosContex";

export default function ModalIndex({ isOpen, setIsOpen }) {
  const pedidosContext = React.useContext(PedidosContext);
  const { selectLocal, localSeleccionado, vaciarCesta } = pedidosContext;

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
                      vaciarCesta();
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
                      vaciarCesta();
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
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
