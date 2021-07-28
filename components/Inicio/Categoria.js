import React from "react";
import { blueGray } from "tailwindcss/colors";

const Categoria = ({ categoria }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-400  rounded-full h-12 shadow-sm">
      <h2 className=" font-bold text-lg sm:text-xl  text-gray-50">
        {categoria}
      </h2>
    </div>
  );
};

export default Categoria;
