import React from "react";
import ModalDetalleCombo from "./ModalDetalleCombo";

const Combo = ({ combo }) => {
  console.log("🚀 ~ file: Combo.jsx ~ line 5 ~ Combo ~ combo", combo);
  const [comboo, setCombo] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="flex flex-wrap content-between bg-white shadow-oishiShadow1 rounded-2xl sm:rounded-3xl cursor-pointer "
      onClick={() => {
        setCombo(combo);
        setIsOpen(true);
      }}
    >
      <div>
        <img
          src={combo.image.url}
          alt="imagen de combo oishisushibar"
          className="rounded-t-2xl sm:rounded-t-3xl"
        />
      </div>

      <div className="p-2 sm:p-2">
        <p className="text-gray-800 my-0 font-semibold text-base">
          {combo.name}
        </p>
        <p className="text-gray-500 font-light leading-4 text-xs">
          {combo.description}
        </p>
        <div className="flex justify-around mt-3 mb-2">
          <p className=" line-through font-bold text-gray-500 leading-4 text-md font-Andika">
            S/ {Number(combo.presentations[0].default_price).toFixed(2)}
          </p>
          <p className=" font-bold text-red-500 leading-4 text-xl font-Andika">
            S/ {Number(combo.presentations[0].combo_price).toFixed(2)}
          </p>
        </div>
      </div>
      {combo && (
        <ModalDetalleCombo
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          combo={comboo}
        />
      )}
    </div>
  );
};

export default Combo;
