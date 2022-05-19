import React from "react";
import ToppingCombo from "./ToppingCombo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PedidosContext from "../../context/pedidos/pedidosContex";

const ToppingsCombos = ({ toppings, combo }) => {
  // CONTEXT
  // -> para agregar Combos
  const pedidosContext = React.useContext(PedidosContext);
  const { addCombo, addTotalPedidos } = pedidosContext;

  // * props: toppings -> trae el array de toppings que tenga el combo
  // * props: combo -> trae el combo
  const [globalToppingSetup, setGlobalToppingSetup] = React.useState(
    toppings.map(topping => ({
      id: topping.id,
      presentations: topping.product_presentations,
    })),
  );

  const [isCompletedQuantityTopppings, setIsCompletedQuantityTopppings] =
    React.useState(false);

  React.useEffect(() => {
    const sumaCantidadSeleccionada = globalToppingSetup
      .map(gts =>
        gts.presentations
          .map(pre => pre.cantidad)
          .reduce((prev, curr) => prev + curr, 0),
      )
      .reduce((prev, curr) => prev + curr, 0);

    const sumaTotales = toppings
      .map(gts => Number(gts.total_quantity_product_presentations))
      .reduce((prev, curr) => prev + curr, 0);

    if (sumaCantidadSeleccionada == sumaTotales) {
      setIsCompletedQuantityTopppings(true);
    }
    if (sumaCantidadSeleccionada != sumaTotales) {
      setIsCompletedQuantityTopppings(false);
    }
  }, [globalToppingSetup]);

  const addCombotoPedido = () => {
    if (isCompletedQuantityTopppings) {
      addCombo({
        nombre: combo.name,
        description: combo.description,
        cantidad: 1,
        id: combo.id,
        sauce_quantity: combo.sauce_quantity,
        precio: combo.presentations[0].combo_price, // Precio del combo
        default_price: combo.presentations[0].default_price,
        globalToppingSetup: globalToppingSetup
          .map(gts => gts.presentations)
          .flat(),
      });

      addTotalPedidos();
      toast.success("Combo añadido a la cesta!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!isCompletedQuantityTopppings) {
      toast.warn("Completa el combo", {
        position: "botton-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      {toppings.map(topping => (
        <ToppingCombo
          key={topping.id}
          topping={topping}
          combo={combo}
          setGlobalToppingSetup={setGlobalToppingSetup}
          globalToppingSetup={globalToppingSetup}
        />
      ))}

      <div className="px-8 mx-4">
        <ToastContainer />
      </div>
      <div>
        <div className="flex justify-between items-center bg-oishiCeleste2  rounded-md px-2 py-2 ">
          <div>
            <p className="font-bold mr-1">Completa el combo</p>
          </div>
          <div className=" ">
            <button
              onClick={() => addCombotoPedido()}
              className={`flex items-center w-max ${
                isCompletedQuantityTopppings
                  ? "bg-emerald-500 text-white"
                  : "bg-emerald-500 text-white opacity-20 pointer-events-none"
              } font-bold p-1 rounded-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
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
    </div>
  );
};

export default ToppingsCombos;
