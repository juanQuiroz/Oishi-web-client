import React, { useReducer } from "react";
import pedidosReducer from "./pedidosReducer";
import PedidosContext from "./pedidosContex";

import { AGREGAR_PRODUCTOS } from "../../types";

const PedidosState = ({ children }) => {
  // State principal
  const initialState = {
    productos: [],
  };

  const [state, dispatch] = useReducer(pedidosReducer, initialState);

  // Funciones
  const addDataProducto = producto => {
    dispatch({
      type: AGREGAR_PRODUCTOS,
      payload: producto,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        productos: state.productos,
        addDataProducto,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
