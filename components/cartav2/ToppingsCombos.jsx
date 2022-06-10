import React from "react";
import ToppingCombo from "./ToppingCombo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PedidosContext from "../../context/pedidos/pedidosContex";

const ToppingsCombos = ({ toppings, combo }) => {
  console.log(
    "🚀 ~ file: ToppingsCombos.jsx ~ line 8 ~ ToppingsCombos ~ toppings",
    toppings,
  );
  // Cantidad de combos elegidos
  const [cantPresentacionCombo, setCantPresentacionCombo] = React.useState(1);

  // CONTEXT
  // -> para agregar Combos
  const pedidosContext = React.useContext(PedidosContext);
  const { addComboWithTopping, addTotalPedidos } = pedidosContext;

  // * props: toppings -> trae el array de toppings que tenga el combo
  // * props: combo -> trae el combo
  const [globalToppingSetup, setGlobalToppingSetup] = React.useState(
    toppings.map(topping => ({
      name: topping.name,
      type: topping.topping_type.id,
      id: topping.id,
      presentations: topping.product_presentations,
    })),
  );
  // console.log(
  //   "🚀 ~ file: ToppingsCombos.jsx ~ line 25 ~ ToppingsCombos ~ globalToppingSetup",
  //   globalToppingSetup,
  // );

  const [isCompletedQuantityTopppings, setIsCompletedQuantityTopppings] =
    React.useState(false);

  // precio final -> precio del combo + precio de los toppings adicionales
  const [precioTotalCombo, setPrecioTotalCombo] = React.useState(0);

  React.useEffect(() => {
    // topping adicional obligatorio  usando operador  ternario
    const sumaCantidadSeleccionada = globalToppingSetup
      .map(gts =>
        gts.type == 1
          ? gts.presentations
              .map(pre => pre.cantidad)
              .reduce((prev, curr) => prev + curr, 0)
          : gts.type == 2 &&
            gts.name.includes("***") &&
            gts.presentations
              .map(pre => pre.cantidad)
              .reduce((prev, curr) => prev + curr, 0),
      )
      .reduce((prev, curr) => prev + curr, 0);

    // topping adicional obligatorio  usando operador ||
    const sumaTotales = toppings
      .map(
        gts =>
          (gts.topping_type_id == "1" ||
            (gts.topping_type_id == "2" && gts.name.includes("***"))) &&
          Number(gts.total_quantity_product_presentations),
      )
      .reduce((prev, curr) => prev + curr, 0);

    if (sumaCantidadSeleccionada == sumaTotales) {
      setIsCompletedQuantityTopppings(true);
    }
    if (sumaCantidadSeleccionada != sumaTotales) {
      setIsCompletedQuantityTopppings(false);
    }

    // *** Sumar los toppings adcionales al precio total ***
    const sumaToppingsAdicionales = globalToppingSetup
      .map(
        gts =>
          gts.type == 2 &&
          gts.presentations
            .map(pre => pre.cantidad * pre.precio)
            .reduce((prev, curr) => prev + curr, 0),
      )
      .reduce((prev, curr) => prev + curr, 0);
    // console.log(
    //   "🚀 ~ file: ToppingsCombos.jsx ~ line 65 ~ React.useEffect ~ sumaToppingsAdicionales",
    //   sumaToppingsAdicionales,
    // );

    setPrecioTotalCombo(
      cantPresentacionCombo * combo.presentations[0].combo_price +
        sumaToppingsAdicionales,
    );
  }, [globalToppingSetup]);

  const addCombotoPedido = () => {
    if (isCompletedQuantityTopppings) {
      addComboWithTopping({
        nombre: combo.name,
        description: combo.description,
        cantidad: cantPresentacionCombo,
        id: combo.presentations[0].id,
        sauce_quantity: combo.sauce_quantity,
        precio: precioTotalCombo, // Precio del combo + mas toppings adicionales
        // precio: combo.presentations[0].combo_price,
        default_price: combo.presentations[0].default_price,
        globalToppingSetup: globalToppingSetup
          .map(gts => gts.presentations)
          .flat(),
      });

      addTotalPedidos();
      toast.success("Combo añadido a la cesta!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
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
      <div
        className={` w-full ${
          isCompletedQuantityTopppings ? "" : " opacity-20 pointer-events-none"
        } `}
      >
        {/* <p className="font-bold mr-3">Cantidad:</p> */}
        <div className="flex justify-between items-center bg-oishiCeleste2  rounded-md px-2 py-2 ">
          <div className="flex items-center">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  cantPresentacionCombo > 0
                    ? setCantPresentacionCombo(cantPresentacionCombo - 1)
                    : setCantPresentacionCombo(0);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-red-600"
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
                className="w-10 mx-1 rounded-md bg-white shadow-md text-center"
                value={cantPresentacionCombo}
              />
              <button
                type="button"
                onClick={() => {
                  setCantPresentacionCombo(cantPresentacionCombo + 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-red-600"
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

          <button
            onClick={() => addCombotoPedido()}
            className={`flex items-center w-max ${
              isCompletedQuantityTopppings
                ? "bg-emerald-500 text-white"
                : "bg-emerald-500 text-white opacity-20 pointer-events-none"
            } font-bold p-1 rounded-md shadow-greenPlus`}
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
  );
};

export default ToppingsCombos;
