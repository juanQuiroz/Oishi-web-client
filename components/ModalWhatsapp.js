import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function ModalWhatsapp({ isOpen, setIsOpen }) {
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
          <div className="min-h-screen px-8 text-center backdrop-filter backdrop-blur-md shadow-lg">
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
                <Dialog.Title
                  as="h3"
                  className="p-3 font-medium leading-6 text-gray-900 font-Andika text-xl"
                >
                  ¿Con cuál de nuestros locales te gustaria comunicarte?
                </Dialog.Title>

                <div className="my-2 mx-4 flex justify-evenly">
                  <a
                    target="_blank"
                    href="https://walink.co/a14318"
                    className="bg-transparent flex-col items-center p-2"
                  >
                    <BsWhatsapp className="w-24 h-24 sm:mx-6 text-green-500" />
                    <p className="text-lg font-Andika text-center">
                      Oishi Cañete
                    </p>
                  </a>
                  <a
                    target="_blank"
                    href="https://walink.co/59ba5c"
                    className="bg-transparent flex-col items-center p-2"
                  >
                    <BsWhatsapp className="w-24 h-24 sm:mx-6 text-green-500" />
                    <p className="text-lg font-Andika text-center">Oishi Ica</p>
                  </a>
                </div>

                <div className="flex justify-end mx-3 mb-3 mt-6">
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
                    Retornar
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
