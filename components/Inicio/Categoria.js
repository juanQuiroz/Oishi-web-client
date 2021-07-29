import React from "react";
import { blueGray } from "tailwindcss/colors";

const Categoria = ({ categoria }) => {
  return (
    <div className="flex justify-center items-center border-2 border-red-600 hover:border-gray-800  text-red-600 hover:text-gray-800 rounded-full h-12 shadow-sm cursor-pointer">
      <h2 className=" font-bold text-lg sm:text-xl  ">{categoria}</h2>
    </div>
  );
};

export default Categoria;
