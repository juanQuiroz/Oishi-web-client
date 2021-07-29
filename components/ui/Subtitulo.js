import React from "react";

const Subtitulo = ({ children }) => {
  return (
    <h3 className="ml-2 sm:ml-4 my-1 font-semibold font-McLaren text-lg text-blueGray-700">
      {children}
    </h3>
  );
};

export default Subtitulo;
