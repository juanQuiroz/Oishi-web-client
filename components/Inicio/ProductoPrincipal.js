import React from "react";
import Add from "../../assets/icons/Add.svg";

const ProductoPrincipal = ({ img }) => {
  return (
    <div className="bg-gray-50 rounded-md shadow-blueGray p-2">
      <img
        src="https://res.cloudinary.com/alldevsoftware/image/upload/v1627195121/oishwebtestcarousel/oishi3_xqctjs.png"
        alt="..."
        className="rounded-md"
      />
      <div className="my-1">
        <h3 className="text-sm font-semibold">Nombre de producto</h3>
        <p className="text-sm">Descripcion de producto</p>
      </div>
      <div className="flex justify-between pr-1">
        <h2 className="font-bold">S/ 00.00</h2>
        <button>
          <Add className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductoPrincipal;
