import React from "react";
import Carrusel from "../components/catering/Carrusel";
import Layout from "../components/Layout";

const catering = () => {
  return (
    <Layout>
      <p className="text-2xl text-center font-bold font-Andika mb-2 sm:mb-6">
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
          escribenos a clientes@oishipartners.pe
        </p>

        <div className="sm:w-7/12">
          <p className="text-xl font-bold font-Andika ml-3 sm:text-center">
            Agunas de nuestras experiencias
          </p>
          <div className="w-full">
            {" "}
            <Carrusel />
          </div>
        </div>
      </div>
      <p className="text-xl font-bold font-Andika mt-4 mb-2 ml-3">
        Nuetros servicios
      </p>
      <p className="text-lg text-justify px-6 my-4">
        Somos Oishi Sushi Bar, un concepto diferente de la comida Nikkei; en
        donde los mejores momentos se unen a traves de la experiencia Oishi,
        trasmitiendo sensaciones con todos los sentidos.
      </p>

      <div className="my-2 px-6">
        <img
          src="/catering/cateringServicos.png"
          alt="img oishi"
          className="rounded-xl h-auto w-full"
        />
      </div>
    </Layout>
  );
};

export default catering;
