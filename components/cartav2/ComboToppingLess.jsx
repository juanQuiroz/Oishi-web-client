import React from "react";
import PedidosContext from "../../context/pedidos/pedidosContex";

const AddComboToppingLess = ({
  combo,
  cantPresentacionCombo,
  setCantPresentacionCombo,
}) => {
  console.log("🚀 ~ file: ComboToppingLess.jsx ~ line 9 ~ combo", combo);
  // CONTEXT
  // -> para agregar Combos
  const pedidosContext = React.useContext(PedidosContext);
  const { addCombo, addTotalPedidos } = pedidosContext;

  const cuentaRenderizado = React.useRef(0);

  React.useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }
    addCombo({
      nombre: combo.name,
      description: combo.description,
      cantidad: cantPresentacionCombo,
      id: combo.presentations[0].id,
      sauce_quantity: combo.sauce_quantity,
      precio: combo.presentations[0].combo_price, // Precio del combo
      default_price: combo.presentations[0].default_price,
    });

    addTotalPedidos();
  }, [cantPresentacionCombo]);

  return (
    <div className="my-2 flex justify-between bg-oishiCeleste2 p-2 rounded-xl">
      <p className="font-bold mt-1">¿ Cuantos quieres ?</p>
      <div className="flex justify-center ">
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
  );
};

export default AddComboToppingLess;
