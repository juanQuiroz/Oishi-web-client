import React from "react";
import Layout from "../components/Layout";
import Titulos from "../components/ui/Titulos";
import api from "../config/axios";
import Ofertas from "../components/ofertas/Ofertas";
import Subtitulo from "../components/ui/Subtitulo";
import Combo from "../components/ofertas/Combo";

const ofertas = () => {
  // State para almacenar las ofertas
  const [ofertas, setOfertas] = React.useState();
  // State para almacenar los combos
  const [combos, setCombos] = React.useState();

  const getOfertas = async () => {
    const res = await api.get("/ofertas", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("resOfertas :", res.data.data);

    setOfertas(res?.data?.data);
  };

  // Obtener Combos
  const getCombos = async () => {
    const res = await api.get("/combos", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("resCombos :", res.data.data);

    setCombos(res?.data?.data);
  };

  React.useEffect(() => {
    getCombos();
    getOfertas();
    console.log("StateOFERTAS :", ofertas);
    console.log("StateCOMBOS :", combos);
  }, []);

  return (
    <Layout>
      <Titulos>Promos Oishi !</Titulos>
      <div className="w-full h-auto m-0 pt-2 bg-oishiCeleste">
        <Subtitulo>
          <p className="text-center text-2xl text-black">Combos Oishi</p>
        </Subtitulo>
        <div className="flex overflow-x-auto whitespace-nowrap sm:overscroll-x-auto w-full p-2 h-auto">
          {combos &&
            combos.map(combo => <Combo key={combo.id} combo={combo} />)}
        </div>
      </div>
      <div className="m-3 mt-4">
        <Subtitulo>
          <p className="text-center text-2xl">Nuestras ofertas</p>
        </Subtitulo>
        {ofertas &&
          ofertas.map(ofer => <Ofertas key={ofer.producto_id} oferta={ofer} />)}
      </div>
    </Layout>
  );
};

export default ofertas;
