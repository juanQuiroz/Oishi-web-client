import React from "react";
import FormCantPresentationsTopping from "./FormCantPresentationsTopping";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import react from "react";

const ToppingCombo = ({
  topping,
  combo,
  setGlobalToppingSetup,
  globalToppingSetup,
  // toppingSetupwithId,
  // setToppingSetupwithId,
}) => {
  // State para almacenar las configuracion elegida por el usuairo en este topping
  const [toppingSetup, setToppingSetup] = React.useState(
    topping.product_presentations.map(presentation => ({
      id: presentation.presentation_id,
      label: presentation.label,
      cantidad: Number(topping.min_quantity_product_presentations),
      precio: presentation.topping_presentation_price,
    })),
  );

  const [toppingSetupwithId, setToppingSetupwithId] = React.useState([]);

  const cuentaRenderizado = React.useRef(0);

  React.useEffect(() => {
    setGlobalToppingSetup(
      globalToppingSetup.map(gts =>
        gts.id == toppingSetupwithId.id
          ? {
              ...gts,
              presentations: toppingSetup,
            }
          : gts,
      ),
    );
  }, [toppingSetupwithId]);

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
          toppingSetupwithId={toppingSetupwithId}
          setToppingSetupwithId={setToppingSetupwithId}
          toppingRules={{
            min: topping.min_quantity_product_presentations,
            max: topping.max_quantity_product_presentations,
            total: topping.total_quantity_product_presentations,
          }}
        />
      ))}
      <div className="flex justify-between mt-2 mb-1 items-center">
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
