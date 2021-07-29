import React from "react";
import Carta from "../components/Carta/Carta";
import Layout from "../components/Layout";

const carta = () => {
  return (
    <Layout>
      <div className="bg-gray-700 mx-5 sm:mx-12 py-2 px-3 my-3 rounded-md shadow">
        <h2 className="text-center text-sm text-white ">
          Precios y promociones solo para compras en la Web
        </h2>
      </div>
      <Carta />
    </Layout>
  );
};

export default carta;
