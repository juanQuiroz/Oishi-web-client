import React from "react";

const Notificacion = ({ typeResponse, serverResponse }) => {
  let color = "";
  if (typeResponse === "success") {
    color = "green";
  } else if (typeResponse === "error") {
    color = "red";
  }

  return (
    <div
      className={`animate-bounce w-full bg-${color}-500 p-1 shadow-lg rounded-lg my-4 text-center text-xl text-white`}
    >
      {serverResponse}
    </div>
  );
};

export default Notificacion;
