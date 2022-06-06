import React from "react";
import SalsaCounter from "./SalsaCounter";

const FormSeleccionarSalsas = ({
  cantSalsas,
  salsas,
  salsasSeleccionadas,
  SetSalsasSeleccionadas,
}) => {
  const [totalSalsasSeleccionadas, setTotalSalsasSeleccioanda] = React.useState(
    [],
  );

  return (
    <div className="mt-2">
      {salsas.map(salsa => (
        <SalsaCounter
          key={salsa.id}
          salsa={salsa}
          cantSalsas={cantSalsas}
          totalSalsasSeleccionadas={totalSalsasSeleccionadas}
          setTotalSalsasSeleccioanda={setTotalSalsasSeleccioanda}
          salsasSeleccionadas={salsasSeleccionadas}
          SetSalsasSeleccionadas={SetSalsasSeleccionadas}
        />
      ))}
    </div>
  );
};

export default FormSeleccionarSalsas;
