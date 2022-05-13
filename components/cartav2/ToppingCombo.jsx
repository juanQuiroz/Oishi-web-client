import React from "react";
import FormCantPresentationsTopping from "./FormCantPresentationsTopping";

const ToppingCombo = ({ topping }) => {
  // State para almacenar las configuracion elegida por el usuairo en este topping
  const [toppingSetup, setToppingSetup] = React.useState(
    topping.product_presentations.map(presentation => ({
      id: presentation.presentation_id,
      label: presentation.label,
      cantidad: Number(topping.min_quantity_product_presentations),
    })),
  );

  return (
    <div
      className="bg-oishiCeleste2 px-2 py-1 rounded-lg mb-2"
      key={topping.id}
    >
      <h2 className="text-xs text-black font-bold mb-1">
        {topping.description}
      </h2>
      {topping.product_presentations.map(presentation => (
        <FormCantPresentationsTopping
          key={presentation.presentation_id}
          presentation={presentation}
          toppingSetup={toppingSetup}
          setToppingSetup={setToppingSetup}
          toppingRules={{
            min: topping.min_quantity_product_presentations,
            max: topping.max_quantity_product_presentations,
            total: topping.total_quantity_product_presentations,
          }}
        />
      ))}
      <div className="flex justify-between mt-2 mb-1 items-center">
        <div>
          <button className="shadow-sm p-1 rounded-md mr-2 border border-blue-600 text-blue-800 font-bold">
            Restablecer
          </button>
          <button className="shadow-sm p-1 rounded-md border border-emerald-600 text-emerald-600 font-bold">
            Añadir a cesta
          </button>
        </div>
        <h2 className="text-oishiNegro font-bold mr-4">
          Total:{" "}
          <span>
            {toppingSetup
              .map(pre => pre.cantidad)
              .reduce((prev, curr) => prev + curr, 0)}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default ToppingCombo;
