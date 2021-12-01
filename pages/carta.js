import React from "react";
import Carta from "../components/Carta/Carta";
import Layout from "../components/Layout";
import MensajeDisponibilidad from "../components/ui/MensajeDisponibilidad";

const carta = () => {
  return (
    <Layout>
      <MensajeDisponibilidad />

      <Carta />
    </Layout>
  );
};

export default carta;
