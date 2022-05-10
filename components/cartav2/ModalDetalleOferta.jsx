import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
// import Presentacion from "./Presentacion";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";

export default function ModalDetalleOferta({ isOpen, setIsOpen, offer }) {
  console.log(
    "🚀 ~ file: ModalDetalleOferta.jsx ~ line 9 ~ ModalDetalleOferta ~ offer",
    offer,
  );

  function closeModal() {
    setIsOpen(false);
  }

  const pedidosContext = React.useContext(PedidosContext);
  const { localSeleccionado } = pedidosContext;

  const [cantPresentacionOferta, setCantPresentacionOferta] = React.useState(0);

  // CONTEXT
  // -> para agregar productos

  const { addOferta, addTotalPedidos } = pedidosContext;

  const cuentaRenderizado = React.useRef(0);

  // comprobar los productos cuya disponibilidad sea SOLO LOCAL
  let dispSoloLocal = false;
  if (
    offer.presentation.local_availability === true &&
    offer.presentation.web_availability === false
  ) {
    dispSoloLocal = true;
  }

  // comprobar los productos cuya disponibilidad sea SOLO WEB
  let dispSoloWeb = false;
  if (
    offer.presentation.local_availability === false &&
    offer.presentation.web_availability === true
  ) {
    dispSoloWeb = true;
  }

  React.useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }
    addOferta({
      producto_nombre: offer.presentation.presentationable.name,
      cantidad: cantPresentacionOferta,
      oferta_id: offer.id,
      descripcion_presentacion: offer.presentation.presentation,
      precio_oferta: offer.offer_price,
    });

    addTotalPedidos();
  }, [cantPresentacionOferta]);

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
                {offer && (
                  <div className="">
                    <img
                      // *img oferta aqui
                      src={offer.image.url}
                      alt="imagen de producto"
                      className="w-full"
                    />
                    <div className="m-3">
                      <p className="text-2xl leading-5 text-gray-800 font-Andika">
                        {offer.presentation.presentationable.name}
                      </p>
                      <p className="mt-2 text-xl leading-5 text-oishiAzul font-semibold">
                        {offer.presentation.presentation}
                      </p>
                      <div className="flex mt-5">
                        <p className="text-xl leading-5 text-gray-500  line-through">
                          S/{" "}
                          {Number(offer.presentation.default_price).toFixed(2)}
                        </p>
                        <p className="ml-6 text-2xl leading-5 text-oishiRojo font-semibold">
                          S/ {Number(offer.offer_price).toFixed(2)}
                        </p>
                      </div>
                      <div className="my-4">
                        <div>
                          <p>
                            {offer.presentation.local_id == 1
                              ? "Cañete"
                              : offer.presentation.local_id == 2
                              ? "Ica"
                              : "Chincha"}
                          </p>

                          {offer.presentation.local_availability ||
                          offer.presentation.web_availability === true ? (
                            <div className="flex px-2 py-1">
                              {dispSoloWeb === true && (
                                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded mr-2">
                                  W
                                </p>
                              )}
                              {dispSoloLocal === true && (
                                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded">
                                  L
                                </p>
                              )}
                            </div>
                          ) : null}

                          <div className="flex justify-between bg-oishiCeleste2 p-2 rounded-xl">
                            <p className="font-bold mt-1">
                              ¿ Cuantos quieres ?
                            </p>

                            {offer.presentation.local_availability &&
                            offer.presentation.web_availability === true ? (
                              <div className="flex px-2 py-1">
                                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded mr-2">
                                  W
                                </p>

                                <p className="w-5 h-5 bg-red-500 text-center text-md text-white font-bold rounded">
                                  L
                                </p>
                              </div>
                            ) : null}

                            {dispSoloLocal === true ? (
                              <p className="text-xs">Solo consumo en local </p>
                            ) : (
                              <div className="w-4/12 flex justify-center ">
                                <button
                                  type="button"
                                  onClick={() => {
                                    cantPresentacionOferta > 0
                                      ? setCantPresentacionOferta(
                                          cantPresentacionOferta - 1,
                                        )
                                      : setCantPresentacionOferta(0);
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-red-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                                <input
                                  readOnly
                                  type="text"
                                  className="w-10 mx-1 rounded-md bg-white shadow-md text-center"
                                  value={cantPresentacionOferta}
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setCantPresentacionOferta(
                                      cantPresentacionOferta + 1,
                                    );
                                    // addDataProducto({
                                    //   id: presentacion.presentacion_id,
                                    //   cantidad: cantPresentacion,
                                    // });
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-red-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                            )}
                          </div>
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
