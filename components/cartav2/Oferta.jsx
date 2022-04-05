import React from 'react'
import ModalDetalleOferta from './ModalDetalleOferta';

const Oferta = ({oferta}) => {
console.log("🚀 ~ file: Oferta.jsx ~ line 5 ~ Oferta ~ oferta", oferta)
    const [offer, setOffer] = React.useState()
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
        className="flex flex-wrap content-between bg-white shadow-oishiShadow1 rounded-2xl sm:rounded-3xl cursor-pointer "
        onClick={() => {
            setOffer(oferta);
          setIsOpen(true);
        }}
      >
        <div>
          <img
          src={oferta.image[0].url}
            alt="imagen de producto oishisushibar"
            className="rounded-t-2xl sm:rounded-t-3xl"
          />
        </div>

        <div className="p-2 sm:p-2">
          <p className="text-gray-800 my-0 font-semibold text-base">
            {oferta.presentation.presentationable.name}
          </p>
          <p className="text-oishiAzul font-bold leading-4 text-xl">
            {oferta.presentation.presentation}
            
          </p>
          <p className="mt-5  font-bold text-red-500 leading-4 text-lg">
            S/ {Number(oferta.offer_price).toFixed(2)}
           
          </p>
        </div>
        {offer && (
        <ModalDetalleOferta
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          offer={offer}
        />
      )}
      </div>
  )
}

export default Oferta