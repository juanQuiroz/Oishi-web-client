import React from "react";

const Titulos = ({ children }) => {
  return (
    <h2 className="ml-2 sm:ml-4 my-1 font-semibold font-McLaren text-xl text-blueGray-800">
      {children}
    </h2>
  );
};

export default Titulos;
