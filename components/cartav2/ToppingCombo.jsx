import React from "react";
import FormCantPresentationsTopping from "./FormCantPresentationsTopping";
import PedidosContext from "../../context/pedidos/pedidosContex";
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
  // CONTEXT
  // -> para agregar Combos
  const pedidosContext = React.useContext(PedidosContext);
  const { addCombo, addTotalPedidos } = pedidosContext;

  // State para almacenar las configuracion elegida por el usuairo en este topping
  const [toppingSetup, setToppingSetup] = React.useState(
    topping.product_presentations.map(presentation => ({
      id: presentation.presentation_id,
      label: presentation.label,
      cantidad: Number(topping.min_quantity_product_presentations),
    })),
  );

  const [toppingSetupwithId, setToppingSetupwithId] = React.useState([]);

  const cuentaRenderizado = React.useRef(0);

  // React.useEffect(() => {
  //   if (cuentaRenderizado.current === 0) {
  //     cuentaRenderizado.current = cuentaRenderizado.current + 1;
  //     return;
  //   }
  // //   addCombo({
  // //     nombre: combo.name,
  // //     description: combo.description,
  // //     cantidad: cantPresentacionCombo,
  // //     id: combo.id,
  // //     sauce_quantity: combo.sauce_quantity,
  // //     precio: combo.presentations[0].combo_price, // Precio del combo
  // //     default_price: combo.presentations[0].default_price,
  // //   });

  //   addTotalPedidos();
  // }, [cantPresentacionCombo]);

  React.useEffect(() => {
    // if (
    //   toppingSetup
    //     .map(pre => pre.cantidad)
    //     .reduce((prev, curr) => prev + curr, 0) ==
    //   topping.total_quantity_product_presentations
    // ) {
    //   setGlobalToppingSetup(
    //     globalToppingSetup.map(gts =>
    //       gts.id == toppingSetupwithId.id
    //         ? { ...gts, presentations: toppingSetup }
    //         : gts,
    //     ),
    //   );
    // }

    setGlobalToppingSetup(
      globalToppingSetup.map(gts =>
        gts.id == toppingSetupwithId.id
          ? { ...gts, presentations: toppingSetup }
          : gts,
      ),
    );
  }, [toppingSetupwithId]);

  const addCombotoPedido = () => {
    if (
      toppingSetup
        .map(pre => pre.cantidad)
        .reduce((prev, curr) => prev + curr, 0) ==
      topping.total_quantity_product_presentations
    ) {
      addCombo({
        nombre: combo.name,
        description: combo.description,
        cantidad: 1,
        id: combo.id,
        sauce_quantity: combo.sauce_quantity,
        precio: combo.presentations[0].combo_price, // Precio del combo
        default_price: combo.presentations[0].default_price,
      });

      addTotalPedidos();

      toast.success("Combo añadido a la cesta!", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn(`Completa ${topping.total_quantity_product_presentations}`, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div
      className="bg-oishiCeleste2 px-2 py-1 rounded-lg mb-2"
      key={topping.id}
    >
      <ToastContainer />
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
        {/* <div>
          <button className="shadow-sm px-1 rounded-md mr-2 border border-blue-600 text-blue-800 font-bold">
            Restablecer
          </button>
          <button
            onClick={() => addCombotoPedido()}
            className="shadow-sm px-1 rounded-md border border-emerald-600 text-emerald-600 font-bold"
          >
            Añadir a cesta
          </button>
        </div> */}
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
