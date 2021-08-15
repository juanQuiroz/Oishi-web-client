import React from "react";
import Titulos from "../ui/Titulos";
import Categoria from "./Categoria";
import { CartaOishi } from "../../api/restaurantApi";

const Carta = () => {
  const [datos, setData] = React.useState({});

  CartaOishi({ setData });

  console.log(datos.data);
  return (
    <div>
      <Titulos>Nuestra Carta</Titulos>
      {datos.listaCategorias &&
        datos.listaCategorias.map(categoria => (
          <Categoria carta={datos.data} />
        ))}
    </div>
  );
};

export default Carta;
