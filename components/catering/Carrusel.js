import React, { useRef, useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carrusel = () => {
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayInterval="4000"
        infinite={true}
        disableButtonsControls={true}
        disableDotsControls={true}
      >
        <div className="flex justify-center mt-5 mb-5 px-2">
          <img
            src="/catering/img1.jpeg"
            alt="img oishi"
            className="rounded-xl h-80 shadow-carruselCatering"
          />
        </div>
        <div className="flex justify-center mt-5 mb-5 px-2">
          <img
            src="/catering/img2.jpeg"
            alt="img oishi"
            className="rounded-xl h-80 shadow-carruselCatering"
          />
        </div>
        <div className="flex justify-center mt-5 mb-5 px-2">
          <img
            src="/catering/img3.jpeg"
            alt="img oishi"
            className="rounded-xl h-80 shadow-carruselCatering"
          />
        </div>
        <div className="flex justify-center mt-5 mb-5 px-2">
          <img
            src="/catering/img4.jpeg"
            alt="img oishi"
            className="rounded-xl h-80 shadow-carruselCatering"
          />
        </div>
        <div className="flex justify-center mt-5 mb-5 px-2">
          <img
            src="/catering/img5.jpeg"
            alt="img oishi"
            className="rounded-xl h-80 shadow-carruselCatering"
          />
        </div>
      </AliceCarousel>
    </>
  );
};

export default Carrusel;
