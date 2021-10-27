import React, { useRef, useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Image from "next/image";

const LineaTiempo = () => {
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayInterval="4000"
        infinite={true}
        disableButtonsControls={true}
        disableDotsControls={true}
      >
        <div className="flex justify-between mx-3 rounded-xl bg-white h-80 shadow-md my-2">
          <div className="flex flex-col justify-center p-3 w-8/12">
            <p className="font-Andika text-3xl text-oishiNaranja font-bold">
              2015
            </p>
            <p className="font-Andika leading-none text-2xl text-oishiNegro ">
              Iniciamos en Jr. Bolognesi, en San Vicente de Cañete.
            </p>
          </div>
          <div className="">
            <img
              src="/2015.png"
              alt="2015 img oishi"
              className="rounded-r-xl h-80"
            />
          </div>
        </div>
        <div className="flex justify-between mx-3 rounded-xl bg-white h-80 shadow-md my-2">
          <div className="flex flex-col justify-center p-3 w-8/12">
            <p className="font-Andika text-3xl text-oishiNaranja font-bold">
              2018
            </p>
            <p className="font-Andika leading-none text-2xl text-oishiNegro ">
              Nuestra dedicación en el sabor Nikkei nos permitió ampliar nuestra
              cocina.
            </p>
          </div>
          <div className="">
            <img
              src="/2018.png"
              alt="2018 img oishi"
              className="rounded-r-xl h-80"
            />
          </div>
        </div>
        <div className="flex justify-between mx-3 rounded-xl bg-white h-80 shadow-md my-2">
          <div className="flex flex-col justify-center p-3 w-8/12">
            <p className="font-Andika text-3xl text-oishiNaranja font-bold">
              2020
            </p>
            <p className="font-Andika leading-none text-2xl text-oishiNegro ">
              Llegamos a Ica la ciudad del eterno sol, con la misma calidad y
              sabor.
            </p>
          </div>
          <div className="">
            <img
              src="/2020.png"
              alt="2020 img oishi"
              className="rounded-r-xl h-80"
            />
          </div>
        </div>
        <div className="flex justify-between mx-3 rounded-xl bg-white h-80 shadow-md my-2">
          <div className="flex flex-col justify-center p-3 w-8/12">
            <p className="font-Andika text-3xl text-oishiNaranja font-bold">
              2020
            </p>
            <p className="font-Andika leading-none text-2xl text-oishiNegro ">
              Renovamos nuestra infraestructura en Cañete
            </p>
          </div>
          <div className="">
            <img
              src="/2020-2.png"
              alt="2020-2 img oishi"
              className="rounded-r-xl h-80"
            />
          </div>
        </div>

        {/* <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" /> */}
      </AliceCarousel>
    </>
  );
};

export default LineaTiempo;
