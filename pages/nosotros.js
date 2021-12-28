import React from "react";
import Layout from "../components/Layout";

import LineaTiempo from "../components/nosotros/LineaTiempo";

const nosotros = () => {
  return (
    <Layout>
      <div className="my-3 mx-5 ">
        <h1 className=" font-Andika text-5xl font-semibold text-oishiAzul">
          Oishi
        </h1>
        <h1 className="font-Andika text-4xl font-semibold leading-6">
          Sushi Bar
        </h1>
      </div>
      <div className="my-5 mx-5 font-Andika text-right">
        <p className="text-3xl ">
          La palabra{" "}
          <span className="font-bold text-oishiRosa text-5xl">Oishi</span>
        </p>
        <p className="text-2xl text-oishiVerde">
          traducido al español significa
        </p>
        <p className="text-xl ">
          <span className="font-bold text-oishiNaranja text-3xl">
            delicioso, sabroso, rico.
          </span>
        </p>
      </div>
      <LineaTiempo />
      <div className="w-full bg-oishiGris py-4 my-3 ">
        <p className="font-Andika text-oishiAzul text-center text-xl font-light my-3 mx-5 sm:mx-20 sm:text-3xl">
          <span className="text-4xl text-oishiNaranja font-bold mr-2">"</span>
          Actualmente, creemos que la combinación de los generosos ingredientes,
          técnicas peruanas y japonesas que empleamos sigue siendo el principal
          activo que nos permite estar presentes en Ica y Cañete y exponer con
          pasión parte de nuestra cultura culinaria. Nos satisface seguir
          ofreciendo a nuestros invitados la deliciosa experiencia de saborearlo
          con orgullo, pasión y felicidad.
          <span className="font-Andika text-4xl text-oishiNaranja font-bold ml-2 ">
            "
          </span>
        </p>
      </div>
      <div className="my-3 font-Andika">
        <div className="bg-oishiCeleste w-10/12  rounded-r-xl p-2  h-auto">
          <p className="text-oishiNaranja font-bold text-2xl">Misión</p>
          <p className="text-base">
            Somos Oishi Sushi Bar, un concepto diferente de la comida nikkei;
            donde los mejores momentos se unen a través de la experiencia oishi
            transmitiendo sensaciones con todos los sentidos.
          </p>
        </div>
        <div className="flex flex-row-reverse mt-3 h-auto">
          <div className="bg-oishiCeleste w-10/12 rounded-l-xl p-2">
            <p className="text-oishiNaranja font-bold text-right text-2xl">
              Visión
            </p>
            <p className="text-base text-right h-auto">
              Tener alcance en el territorio nacional, dar a conocer la comida
              nikkei y a su vez generar oportunidades a nuevos talentos.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-1 my-8">
        <img src="/valores.png" alt="2015 img oishi" />
      </div>
    </Layout>
  );
};

export default nosotros;
