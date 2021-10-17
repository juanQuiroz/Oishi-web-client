import React from "react";
import ConfirmarPedido from "../../components/cesta/ConfirmarPedido";
import FinalizarPedido from "../../components/cesta/FinalizarPedido";
import OfertaExtra from "../../components/cesta/ofertaCesta/OfertaExtra";
import Layout from "../../components/Layout";

const cesta = () => {
  const [confirmarpedido, setConfirmarpedido] = React.useState(false);

  return (
    <Layout>
      <div className="mx-2 my-4 sm:mx-4 sm:my-4">
        {confirmarpedido ? (
          <FinalizarPedido setConfirmarpedido={setConfirmarpedido} />
        ) : (
          <div>
            <OfertaExtra />
            <ConfirmarPedido setConfirmarpedido={setConfirmarpedido} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default cesta;
