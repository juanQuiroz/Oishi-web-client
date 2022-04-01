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
      className={`flex items-center justify-center animate-bounce w-full bg-${color}-500 p-1 shadow-lg rounded-lg my-3 text-center text-md text-white`}
    >
      {typeResponse === "success" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <p className="ml-1">{serverResponse}</p>
    </div>
  );
};

export default Notificacion;
