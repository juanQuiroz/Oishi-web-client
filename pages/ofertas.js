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

  React.useEffect(() => {
    getOfertas();
    console.log("StateOFERTAS :", ofertas);
  }, []);
  return (
    <Layout>
      <Titulos>Promos Oishi !</Titulos>
      <div className="w-full h-auto m-0 bg-black">
        <Subtitulo>
          <p className="text-center text-2xl my-1 text-white">Combos Oishi</p>
        </Subtitulo>
        <div className="flex overflow-x-auto whitespace-nowrap sm:overscroll-x-auto p-2 h-auto">
          <Combo />
          <Combo />
          <Combo />
          <Combo />
          <Combo />
          <Combo />
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
