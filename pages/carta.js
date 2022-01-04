import React from "react";
import Carta from "../components/Carta/Carta";
import Layout from "../components/Layout";
import MensajeDisponibilidad from "../components/ui/MensajeDisponibilidad";

const carta = () => {
  return (
    <Layout>
      <div className="w-full p-2 px-3 sm:px-6 text-blue-600 font-Cunia">
        Carta Oishi Sushi Bar 👉🏼
        <a href="https://bit.ly/cartaoishisb" target="_blank" className="">
          🍘🍙🍚🍜🍣🍱🍥🍢
        </a>
      </div>
      <MensajeDisponibilidad />

      <Carta />
    </Layout>
  );
};

export default carta;
