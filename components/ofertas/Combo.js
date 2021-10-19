import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Combo = ({ combo }) => {
  return (
    <div className=" bg-white  rounded-xl mx-1 shadow-sm h-auto min-w-full">
      <img
        src={combo.url}
        alt="..."
        className="rounded-t-xl min-w-full sm:w-16"
      />

      <div className="px-1 sm:p-2  ">
        <div className="flex justify-between p-2 ">
          <div className="">
            <p className="text-gray-800 -my-1 text-xl w-full font-semibold ">
              {combo.nombre}
            </p>
            <p className="text-gray-800 font-thin -my-1 text-lg max-w-max">
              {combo.descripcion}
            </p>
          </div>
          <MdAddShoppingCart className="h-9 w-9 ml-12 text-red-500" />
        </div>

        {/* <ul className="flex justify-around flex-wrap"> */}
        <ul className="grid grid-cols-1 gap-2 mx-2">
          {combo?.presentaciones_base &&
            combo.presentaciones_base[0].productos_presentaciones.map(
              presentacionesBase => (
                <li className="p-1 mb-1 bg-gray-50 rounded">
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
          <p className="text-red-500 font-bold text-3xl">
            S/ {combo?.locales && combo.locales[0].presentacion[0].precio_combo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Combo;
