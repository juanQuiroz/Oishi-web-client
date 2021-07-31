import React from "react";
import Add from "../../../assets/icons/Add.svg";

const Oferta = () => {
  return (
    <div className="flex bg-white  rounded mx-2 my-1 shadow-sm min-w-max h-20 ">
      <img
        src="https://res.cloudinary.com/alldevsoftware/image/upload/v1627692387/oishwebtestcarousel/coke_eju9nj.jpg"
        alt="..."
        className="rounded-l h-full w-16 sm:w-16"
      />

      <div className="p-1 sm:p-2">
        <h4 className="text-gray-800 -my-1 text-sm">Coca Cola</h4>
        <h5 className="text-gray-800 font-thin -my-1 text-xs">Lata 300ml</h5>
        <h2 className="text-gray-800 font-bold text-sm">S/ 5.00</h2>
        <Add className="h-6 w-6 ml-6" />
      </div>
    </div>
  );
};

export default Oferta;
