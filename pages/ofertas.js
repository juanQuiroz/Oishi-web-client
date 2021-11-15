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
      <div className="w-full h-auto m-0 pt-2 bg-oishiCeleste pb-3">
        <Subtitulo>
          <p className="text-center text-3xl text-black mb-3">Combos Oishi</p>
        </Subtitulo>
        <div className="flex overflow-x-scroll ">
          <div className="flex flex-row-reverse flex-nowrap ml-2">
            {combos &&
              combos.map(combo =>
                combo.activo == true ? (
                  <Combo key={combo.id} combo={combo} />
                ) : (
                  <div className="flex justify-evenly">
                    <p className="text-xl font-bold text-oishiRosa mr-4">
                      No tenemos combos disponibles
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-oishiRosa"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                ),
              )}
          </div>
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
