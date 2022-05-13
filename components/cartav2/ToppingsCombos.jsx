import React from "react";
import ToppingCombo from "./ToppingCombo";

const ToppingsCombos = ({ toppings }) => {
  // * props: toppings -> trae el array de toppings que tenga el combo

  return (
    <div>
      {toppings.map(topping => (
        <ToppingCombo key={topping.id} topping={topping} />
      ))}
    </div>
  );
};

export default ToppingsCombos;
