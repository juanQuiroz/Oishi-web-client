import React from "react";
import Cesta from "../../components/cesta/Cesta";
import OfertaExtra from "../../components/cesta/ofertaCesta/OfertaExtra";
import Layout from "../../components/Layout";

const cesta = () => {
  return (
    <Layout>
      <div className="mx-2 my-4 sm:mx-4 sm:my-4">
        <OfertaExtra />
        <Cesta />
      </div>
    </Layout>
  );
};

export default cesta;
