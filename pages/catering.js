import React from "react";
import Carrusel from "../components/catering/Carrusel";
import FormSolCatering from "../components/catering/FormSolCatering";
import Layout from "../components/Layout";

const catering = () => {
  return (
    <Layout>
      <p className="text-2xl sm:text-3xl text-center font-bold font-Andika mb-2 sm:mb-6">
        Catering Oishi
      </p>
      <div className="sm:flex">
        <p className="sm:w-5/12 text-lg text-justify px-6 my-4">
          Nosotros queremos que todos tengan un evento en la comodidad de su
          casa, trabajo; cuando quieras y donde quieras. Llegamos a tu boda, a
          tu fiesta de 15, a tu cumpleaños, a tu pedida, conferencia de trabajo,
          lanzamiento, ¡Lo que sea! Nosotros organizamos todos los makis, alitas
          o lo que te provoque de nuestra carta, para que tú solo tengas que
          disfrutarlo con tus invitados. Cualquier duda y/o pedidos sólo
          escribenos a{" "}
          <span className="font-bold">clientes@oishipartners.pe</span>
        </p>

        <div className="sm:w-7/12">
          <p className="text-xl font-bold font-Andika ml-3 sm:text-center">
            Algunas de nuestras experiencias
          </p>
          <div className="w-full">
            {" "}
            <Carrusel />
          </div>
        </div>
      </div>
      <p className="text-xl font-bold font-Andika mt-4 mb-2 ml-3 sm:ml-6 sm:text-2xl">
        Nuestros servicios
      </p>
      <p className="text-lg text-justify px-6 my-4">
        Somos Oishi Sushi Bar, un concepto diferente de la comida Nikkei; en
        donde los mejores momentos se unen a traves de la experiencia Oishi,
        trasmitiendo sensaciones con todos los sentidos.
      </p>

      <div className="my-2 px-6 sm:mx-32 sm:my-12">
        <img
          src="/catering/cateringServicos.png"
          alt="img oishi"
          className="rounded-xl h-auto w-full"
        />
      </div>

      <div className="m-6 rounded-lg shadow-md bg-oishiGris p-2">
        <p className="text-lg font-semibold text-oishiAzul leading-5">
          Ficha de información general del cliente "Catering"
        </p>
        <p className="text-sm  text-gray-700 leading-4 mt-2 mb-4">
          *Estimado(a), sírvase llenar todos los campos solicitados, para poder
          enviarle nuestra primera propuesta.
        </p>
        <FormSolCatering />
      </div>
    </Layout>
  );
};

export default catering;
