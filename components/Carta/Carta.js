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
      <div className="sm:flex flex-col-reverse sm:flex-row justify-between mt-5 sm:mx-12">
        <ul className="flex justify-around sm:justify-center flex-wrap py-1 px-2 rounded-full text-lg sm:text-xl text-coolGray-600">
          <li className="mx-2 sm:mx-6">
            <a>Oishi piqueos</a>
          </li>
          <li className="mx-2 sm:mx-6">
            <a>Acompañamientos</a>
          </li>
          <li className="mx-2 sm:mx-6">
            <a>Platos calientes</a>
          </li>
          <li className="mx-2 sm:mx-6">
            <a>Sanguches</a>
          </li>
          <li className="mx-2 sm:mx-6">
            <a>Makis</a>
          </li>
          <li className="mx-2 sm:mx-6">
            <a>Combinados</a>
          </li>
          <li className="mx-2 sm:mx-6">
            <a>Bebidas</a>
          </li>
          <li className="mx-2 sm:mx-6">
            <a>Sandwich furai</a>
          </li>
        </ul>
      </div>

      {datos.listaCategorias &&
        datos.listaCategorias.map(categoria => (
          <Categoria carta={datos.data} />
        ))}
    </div>
  );
};

export default Carta;
