import React from "react";

const SalsaCounter = ({
  cantSalsas,
  salsa,
  totalSalsasSeleccionadas,
  setTotalSalsasSeleccioanda,
}) => {
  console.log("🚀 ~ file: SalsaCounter.jsx ~ line 9 ~ cantSalsas", cantSalsas);
  const [cantSalsa, setCantSalsa] = React.useState(0);

  React.useEffect(() => {
    setTotalSalsasSeleccioanda(totalSalsasSeleccionadas + cantSalsa);
  }, [cantSalsa]);

  return (
    <div className="flex justify-between bg-white py-1 px-2 rounded-md mb-1">
      <p className="font-semibold"> {salsa.description}</p>{" "}
      <div className="flex justify-center ">
        <button
          type="button"
          onClick={() => {
            cantSalsa > 0 && setCantSalsa(cantSalsa - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          readOnly
          type="text"
          className="w-10 h-fit mx-1 rounded-md bg-oishiCeleste2 text-center text-black font-bold "
          value={cantSalsa}
        />
        <button
          type="button"
          onClick={() => {
            // cantSalsa < cantSalsas &&
            // setCantSalsa(cantSalsa + 1);
            totalSalsasSeleccionadas < cantSalsas &&
              setCantSalsa(cantSalsa + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SalsaCounter;
