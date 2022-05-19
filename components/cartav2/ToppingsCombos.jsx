import React from "react";
import ToppingCombo from "./ToppingCombo";

const ToppingsCombos = ({ toppings, combo }) => {
  // * props: toppings -> trae el array de toppings que tenga el combo
  // * props: combo -> trae el combo

  const [globalToppingSetup, setGlobalToppingSetup] = React.useState(
    toppings.map(topping => ({
      id: topping.id,
      presentations: topping.product_presentations,
    })),
  );
  console.log(
    "🚀 ~ file: ToppingsCombos.jsx ~ line 14 ~ ToppingsCombos ~ globalToppingSetup",
    globalToppingSetup,
  );

  React.useEffect(() => {
    const suma = globalToppingSetup.map(gts =>
      gts.presentations
        .map(pre => pre.cantidad)
        .reduce((prev, curr) => prev + curr, 0),
    );
    console.log(
      "🚀 ~ file: ToppingsCombos.jsx ~ line 25 ~ React.useEffect ~ suma",
      suma,
    );
  }, [globalToppingSetup]);

  return (
    <div>
      {toppings.map(topping => (
        <ToppingCombo
          key={topping.id}
          topping={topping}
          combo={combo}
          setGlobalToppingSetup={setGlobalToppingSetup}
          globalToppingSetup={globalToppingSetup}
          // toppingSetupwithId={toppingSetupwithId}
          // setToppingSetupwithId={setToppingSetupwithId}
        />
      ))}
      <div className="flex justify-between bg-blueGray-100 w-full rounded-md px-2 py-2">
        <div>
          {/* <div className="flex justify-center ">
            <button
              type="button"
              onClick={() => {
                cantPresentations > Number(toppingRules.min)
                  ? setCantPresentations(cantPresentations - 1)
                  : setCantPresentations(Number(toppingRules.min));
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
              value={cantPresentations}
            />
            <button
              type="button"
              onClick={() => {
                cantPresentations < Number(toppingRules.max) &&
                  toppingSetup
                    .map(pre => pre.cantidad)
                    .reduce((prev, curr) => prev + curr, 0) <
                    Number(toppingRules.total) &&
                  setCantPresentations(cantPresentations + 1);
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
          </div> */}
        </div>
        <div>
          <button className="flex items-center bg-emerald-500 p-1 rounded-md text-white font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Añadir a la cesta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToppingsCombos;
