import React from "react";
import ConfirmarPedido from "../../components/cesta/ConfirmarPedido";
import FinalizarPedido from "../../components/cesta/FinalizarPedido";
// import OfertaExtra from "../../components/cesta/ofertaCesta/OfertaExtra";
import Layout from "../../components/Layout";
import PedidosContext from "../../context/pedidos/pedidosContex";

const cesta = () => {
  const pedidosContext = React.useContext(PedidosContext);
  const { confirmarPedido } = pedidosContext;

  console.log("confirmarPedido:", confirmarPedido);

  return (
    <Layout>
      <div className="mx-2 my-4 sm:mx-4 sm:my-4">
        {confirmarPedido ? (
          <FinalizarPedido />
        ) : (
          <div>
            {/* <OfertaExtra /> */}
            <ConfirmarPedido />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default cesta;
