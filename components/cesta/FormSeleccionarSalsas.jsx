import React from "react";
import SalsaCounter from "./SalsaCounter";

const FormSeleccionarSalsas = ({ cantSalsas, salsas }) => {
  const [totalSalsasSeleccionadas, setTotalSalsasSeleccioanda] =
    React.useState(0);

  return (
    <div className="mt-2">
      {salsas.map(salsa => (
        <SalsaCounter
          key={salsa.id}
          salsa={salsa}
          cantSalsas={cantSalsas}
          totalSalsasSeleccionadas={totalSalsasSeleccionadas}
          setTotalSalsasSeleccioanda={setTotalSalsasSeleccioanda}
        />
      ))}
    </div>
  );
};

export default FormSeleccionarSalsas;
