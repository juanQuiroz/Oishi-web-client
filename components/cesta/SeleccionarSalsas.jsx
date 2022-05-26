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
  } = PedidosContext;
  console.log(
    "🚀 ~ file: SeleccionarSalsas.jsx ~ line 17 ~ SeleccionarSalsas ~ combosSeleccionados",
    combosSeleccionados,
  );

  const [salsas, setSalsas] = React.useState([]);
  const [cantSalsas, setCantSalsas] = React.useState(null);

  const getCombos = async () => {
    const res = await apitest.get(`/api/v2/sauces`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setSalsas(res.data.data);
  };

  // const sumarSalsas = () => {
  //   const salsasProductos = presentacion
  //     .map(p => Number(p.sauce_quantity) * Number(p.cantidad))
  //     .reduce((prev, curr) => prev + curr, 0);
  //   const salsasOfertas = ofertasSeleccionada
  //     .map(s => Number(s.sauce_quantity) * Number(s.cantidad))
  //     .reduce((prev, curr) => prev + curr, 0);
  //   const salsasCombos = combosSeleccionados
  //     .map(s => Number(s.sauce_quantity) * Number(s.cantidad))
  //     .reduce((prev, curr) => prev + curr, 0);

  //   setCantSalsas(salsasProductos + salsasOfertas + salsasCombos);
  // };

  React.useEffect(() => {
    getCombos();
  }, []);

  React.useEffect(() => {
    const salsasProductos = presentacion
      .map(p => Number(p.sauce_quantity) * Number(p.cantidad))
      .reduce((prev, curr) => prev + curr, 0);
    const salsasOfertas = ofertasSeleccionada
      .map(s => Number(s.sauce_quantity) * Number(s.cantidad))
      .reduce((prev, curr) => prev + curr, 0);
    const salsasCombos = combosSeleccionados
      .map(s => Number(s.sauce_quantity) * Number(s.cantidad))
      .reduce((prev, curr) => prev + curr, 0);

    setCantSalsas(salsasProductos + salsasOfertas + salsasCombos);
  }, [presentacion, ofertasSeleccionada, combosSeleccionados]);

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
        <FormSeleccionarSalsas cantSalsas={cantSalsas} salsas={salsas} />
      )}
    </div>
  );
};

export default SeleccionarSalsas;
