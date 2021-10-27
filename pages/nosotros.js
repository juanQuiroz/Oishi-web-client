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
      <LineaTiempo />
      <div className="w-full bg-oishiGris py-4 my-3">
        <p className="font-Andika text-oishiAzul text-center text-xl font-light my-3 mx-5">
          <span className="text-4xl text-oishiNaranja font-bold mr-2">"</span>
          Actualmente, creemos que la combinación de los generosos ingredientes,
          técnicas peruanas y japonesas que empleamos sigue siendo el principal
          activo que nos permite estar presentes en Ica y Cañete y exponer con
          pasión parte de nuestra cultura culinaria. Nos satisface seguir
          ofreciendo a nuestros invitados la deliciosa experiencia de saborearlo
          con orgullo, pasión y felicidad.
          <span className="font-Andika text-4xl text-oishiNaranja font-bold ml-2">
            "
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default nosotros;
