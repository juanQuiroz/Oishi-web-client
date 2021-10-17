import React, { useReducer } from "react";
import pedidosReducer from "./pedidosReducer";
import PedidosContext from "./pedidosContex";

import {
  AGREGAR_PRODUCTOS,
  SUMAR_SUBTOTALES,
  ACTUALIAZAR_CANTPRESENTACION,
  VACIAR_CESTA,
  VACIAR_TOTALPEDIDO,
  ELIMINAR_PRESENTACION,
} from "../../types";

const PedidosState = ({ children }) => {
  // State principal
  const initialState = {
    presentacion: [],
    pedido: {
      totalPedidos: 0,
    },
  };

  const [state, dispatch] = useReducer(pedidosReducer, initialState);

  // Funciones
  const addDataProducto = producto => {
    dispatch({
      type: AGREGAR_PRODUCTOS,
      payload: producto,
    });
  };

  const addPresentacion = dataPresentacion => {
    dispatch({
      type: ACTUALIAZAR_CANTPRESENTACION,
      payload: dataPresentacion,
    });
  };

  // vacia todos los productos de la cesta
  const vaciarCesta = () => {
    dispatch({
      type: VACIAR_CESTA,
    });
  };

  // vacia todos los productos de la cesta
  const vaciarTotalPedido = () => {
    dispatch({
      type: VACIAR_TOTALPEDIDO,
    });
  };

  // agrega el monto total de los pedidos
  const addTotalPedidos = subtotal => {
    dispatch({
      type: SUMAR_SUBTOTALES,
      payload: subtotal,
    });
  };

  // elimina una presentacion del array presentacion del initialState -> presentacion:[]
  const deletePresentacion = idPedido => {
    dispatch({
      type: ELIMINAR_PRESENTACION,
      payload: idPedido,
    });
  };

  // MEJOR LO PASAMOSMDIRECTAMENTE EN EL ONSUBMIT
  // // Agrega los datos principales al pedido
  // const addDataPedido = data => {
  //   dispatch({
  //     type: "AGREGAR_DATOSPEDIDO",
  //     payload: data,
  //   });
  // };

  return (
    <PedidosContext.Provider
      value={{
        presentacion: state.presentacion,
        pedido: state.pedido,
        addDataProducto,
        addPresentacion,
        vaciarCesta,
        addTotalPedidos,
        vaciarTotalPedido,
        deletePresentacion,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
