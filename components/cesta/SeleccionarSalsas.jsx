import React, { useContext } from "react";
import { apitest } from "../../config/axios";
import pedidosContex from "../../context/pedidos/pedidosContex";
import FormSeleccionarSalsas from "./FormSeleccionarSalsas";

const SeleccionarSalsas = () => {
  const PedidosContext = useContext(pedidosContex);
  const {
    presentacion,
    vaciarCesta,
    ofertasSeleccionada,
    combosSeleccionados,
    pedido,
    setConfirmarpedido,
    localSeleccionado,
    addSalsasConfig,
    salsasConfig,
  } = PedidosContext;

  const [salsas, setSalsas] = React.useState([]);

  const [cantSalsas, setCantSalsas] = React.useState(null);
  const [salsasSeleccionadas, SetSalsasSeleccionadas] = React.useState([]);

  const getSalsas = async () => {
    const res = await apitest.get(`/api/v2/sauces`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setSalsas(res.data.data);
  };

  React.useEffect(() => {
    getSalsas();
  }, []);

  React.useEffect(() => {
    const salsasProductosCant = presentacion
      .map(p => Number(p.sauce_quantity) * Number(p.cantidad))
      .reduce((prev, curr) => prev + curr, 0);
    const salsasOfertasCant = ofertasSeleccionada
      .map(s => Number(s.sauce_quantity) * Number(s.cantidad))
      .reduce((prev, curr) => prev + curr, 0);
    const salsasCombosCant = combosSeleccionados
      .map(s => Number(s.sauce_quantity) * Number(s.cantidad))
      .reduce((prev, curr) => prev + curr, 0);

    setCantSalsas(salsasProductosCant + salsasOfertasCant + salsasCombosCant);
  }, [presentacion, ofertasSeleccionada, combosSeleccionados, ,]);

  React.useEffect(() => {
    const salsasSeleccionadasCantMayCero = salsasSeleccionadas.filter(
      se => se.cantSalsa > 0,
    );
    addSalsasConfig(salsasSeleccionadasCantMayCero);
  }, [salsasSeleccionadas]);

  // * Para testear  salsasConfig en contex
  // React.useEffect(() => {
  //   console.log("*****Salsas salsasConfig", salsasConfig);
  // }, [salsasConfig]);

  return (
    <div>
      <h1 className="font-Andika font-bold text-lg">
        Selecciona tus salsas favoritas !
      </h1>
      <h2 className="font-Andika">
        Tu pedido te permite escoger entre {cantSalsas && cantSalsas} unidades
        de salsas
      </h2>
      {cantSalsas && (
        <FormSeleccionarSalsas
          cantSalsas={cantSalsas}
          salsas={salsas}
          salsasSeleccionadas={salsasSeleccionadas}
          SetSalsasSeleccionadas={SetSalsasSeleccionadas}
        />
      )}
    </div>
  );
};

export default SeleccionarSalsas;
