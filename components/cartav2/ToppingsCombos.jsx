import React from "react";
import FormCantPresentationsTopping from "./FormCantPresentationsTopping";

const ToppingsCombos = ({ toppings }) => {
  // State para almacenar las configuracion elegida por el usuairo en este topping
  const [toppingSetup, setToppingSetup] = React.useState([]);

  return (
    <div>
      {toppings.map(topping => (
        <div className="bg-oishiCeleste2 px-2 py-1 rounded-lg" key={topping.id}>
          <h2 className="text-xs combina text-oishiAzul mb-1">
            {topping.description}
          </h2>
          {topping.product_presentations.map(presentation => (
            <FormCantPresentationsTopping
              key={presentation.presentation_id}
              presentation={presentation}
              toppingSetup={toppingSetup}
              setToppingSetup={setToppingSetup}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ToppingsCombos;
