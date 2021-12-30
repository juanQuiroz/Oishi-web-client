import React from "react";
import Layout from "../components/Layout";
import Titulos from "../components/ui/Titulos";
import api from "../config/axios";
import Ofertas from "../components/ofertas/Ofertas";
import Subtitulo from "../components/ui/Subtitulo";
import Combo from "../components/ofertas/Combo";
import MensajeDisponibilidad from "../components/ui/MensajeDisponibilidad";

const ofertas = () => {
  // State para almacenar las ofertas
  const [ofertas, setOfertas] = React.useState();
  // State para almacenar los combos
  const [combos, setCombos] = React.useState();

  // obtener ofertas
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
  }, []);
  console.log("StateOFERTAS :", ofertas);
  console.log("StateCOMBOS :", combos);

  return (
    <Layout>
      <Titulos>Promos Oishi !</Titulos>
      <MensajeDisponibilidad />
      <div className="w-full h-auto m-0 pt-2 bg-oishiCeleste pb-3 mt-3">
        <Subtitulo>
          <p className="text-center text-3xl text-black mb-3 font-Cunia">
            Combos Oishi
          </p>
        </Subtitulo>
        <div className="flex overflow-x-scroll ">
          <div className="flex flex-row-reverse flex-nowrap ml-2">
            {combos &&
              combos.map(
                combo =>
                  combo.activo == true && (
                    <Combo key={combo.id} combo={combo} />
                  ),
              )}
          </div>
        </div>
      </div>
      <div className="m-3 mt-4">
        <Subtitulo>
          <p className="text-center text-2xl font-Cunia">Nuestras ofertas</p>
        </Subtitulo>
        {ofertas &&
          ofertas.map(ofer => <Ofertas key={ofer.producto_id} oferta={ofer} />)}
      </div>
    </Layout>
  );
};

export default ofertas;
