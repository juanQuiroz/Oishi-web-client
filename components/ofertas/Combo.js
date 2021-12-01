import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import ModalComprarCombo from "./ModalComprarCombo";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Combo = ({ combo }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  console.log("Combo qwers", combo.locales);

  const pedidosContext = React.useContext(PedidosContext);
  const { localSeleccionado } = pedidosContext;

  // DATOS DEL LOCAL ACTUAL
  const localActual = combo.locales.filter(
    local => local.id == localSeleccionado,
  );
  console.log("localActual", localActual);

  return (
    <div className="inline-block mr-2">
      <div
        className="w-80 h-auto max-w-xs overflow-hidden rounded-lg shadow-md bg-white cursor-pointer  hover:shadow-xl transition-shadow duration-300 ease-in-out"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={combo.url}
          alt="..."
          className="rounded-t-lg min-w-full sm:w-16"
        />

        <div className="px-1 sm:p-2 w-full h-56 mt-4 flex flex-col justify-between">
          <div className="flex px-2 ">
            <div className=" w-full">
              <p className="text-gray-800 -my-1 text-xl font-semibold">
                {combo.nombre}
              </p>
              <p className=" text-gray-800 -my-1 text-md ">
                {combo.descripcion}
              </p>
            </div>
          </div>

          {/* <ul className="flex justify-around flex-wrap"> */}
          <ul className="grid grid-cols-1 gap-0 mx-2 mt-2">
            {combo?.presentaciones_base &&
              combo.presentaciones_base[0].productos_presentaciones.map(
                presentacionesBase => (
                  <li className="px-1 ">
                    {presentacionesBase.cantidad}
                    {"  "}
                    {presentacionesBase.producto_nombre} -{" "}
                    {presentacionesBase.presentacion}
                  </li>
                ),
              )}
          </ul>
          <div className="flex justify-evenly my-3">
            <p className="text-gray-600  text-xl line-through">
              S/{" "}
              {/* {combo?.locales &&
                combo.locales[0].presentacion[0].precio_default} */}
              {localActual[0].presentacion[0].precio_default}
            </p>
            <p className="text-red-500 font-bold text-2xl">
              S/{" "}
              {/* {combo?.locales && combo.locales[0].presentacion[0].precio_combo} */}
              {localActual[0].presentacion[0].precio_combo}
            </p>
          </div>
        </div>
        <ModalComprarCombo
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dataCombo={combo}
          localActual={localActual}
        />
      </div>
    </div>
  );
};

export default Combo;
