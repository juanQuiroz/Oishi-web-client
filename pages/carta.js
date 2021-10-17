import React from "react";
import Carta from "../components/Carta/Carta";
import Layout from "../components/Layout";

const carta = () => {
  return (
    <Layout>
      <div className="bg-blueGray-300 mx-4 py-2 px-3 my-3 rounded-md">
        <div className="flex sm:flex-row flex-col justify-around text-center text-sm text-trueGray-700 font-bold">
          <p> W = Disponibilidad para compras en la web</p>
          <p>L = Disponibilidad para compras en local</p>
        </div>
      </div>

      <Carta />
    </Layout>
  );
};

export default carta;
