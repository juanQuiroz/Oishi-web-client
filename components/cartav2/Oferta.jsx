import React from "react";
import ModalDetalleOferta from "./ModalDetalleOferta";

const Oferta = ({ oferta }) => {
  console.log("🚀 ~ file: Oferta.jsx ~ line 5 ~ Oferta ~ oferta", oferta);
  const [offer, setOffer] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="flex flex-wrap content-between bg-white shadow-oishiShadow1 rounded-2xl sm:rounded-2xl cursor-pointer "
      onClick={() => {
        setOffer(oferta);
        setIsOpen(true);
      }}
    >
      <div>
        <img
          src={oferta.image.url}
          alt="imagen de oferta oishisushibar"
          className="rounded-t-2xl sm:rounded-t-3xl"
        />
      </div>

      <div className="p-2 sm:p-2 w-full">
        <p className="text-black my-0 font-normal text-lg font-Andika">
          {oferta.presentation.presentationable.name}
        </p>
        <p className="text-oishiAzul font-bold leading-4 text-xl font-Andika">
          {oferta.presentation.presentation}
        </p>
        <div className="flex justify-around w-full mt-4 mb-1">
          <p className="font-thin text-gray-500 leading-4 text-sm font-Andika line-through">
            S/ {Number(oferta.presentation.default_price).toFixed(2)}
          </p>
          <p className="font-bold text-red-500 leading-4 text-lg font-Andika">
            S/ {Number(oferta.offer_price).toFixed(2)}
          </p>
        </div>
      </div>
      {offer && (
        <ModalDetalleOferta
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          offer={offer}
        />
      )}
    </div>
  );
};

export default Oferta;
