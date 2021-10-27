import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Combo = ({ combo }) => {
  return (
    <div className=" bg-white  rounded-xl mx-1 shadow-sm h-auto w-screen sm:w-4/12">
      <img
        src={combo.url}
        alt="..."
        className="rounded-t-xl min-w-full sm:w-16"
      />

      <div className="px-1 sm:p-2 w-full">
        <div className="flex px-2 w-screen">
          <div className="w-10/12">
            <p className="text-gray-800 -my-1 text-xl font-semibold ">
              {combo.nombre}
            </p>
            <p className="text-gray-800 font-thin -my-1 text-md max-w-max">
              {combo.descripcion}
            </p>
          </div>
          <div className="w-2/12 ">
            <MdAddShoppingCart className=" h-10 w-10 text-red-500 ml-4" />
          </div>
        </div>

        {/* <ul className="flex justify-around flex-wrap"> */}
        <ul className="grid grid-cols-1 gap-1 mx-2 mt-2">
          {combo?.presentaciones_base &&
            combo.presentaciones_base[0].productos_presentaciones.map(
              presentacionesBase => (
                <li className="px-1 bg-gray-100 rounded">
                  {presentacionesBase.producto_nombre} -{" "}
                  {presentacionesBase.presentacion} x{" "}
                  {presentacionesBase.cantidad}
                </li>
              ),
            )}
        </ul>
        <div className="flex justify-evenly my-3">
          <p className="text-gray-600  text-xl line-through">
            S/{" "}
            {combo?.locales && combo.locales[0].presentacion[0].precio_default}
          </p>
          <p className="text-red-500 font-bold text-2xl">
            S/ {combo?.locales && combo.locales[0].presentacion[0].precio_combo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Combo;
