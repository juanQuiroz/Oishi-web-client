import React, { useContext } from "react";
import Carrusel from "../components/Inicio/Carrusel";
import Categorias from "../components/Inicio/Categorias";
import PrincipalesProductos from "../components/Inicio/PrincipalesProductos";
import Layout from "../components/Layout";
import ModalIndex from "../components/ModalIndex";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Layout>
      <ModalIndex isOpen={isOpen} setIsOpen={setIsOpen} />
      <Carrusel />
      <PrincipalesProductos />
      <Categorias />
    </Layout>
  );
}
