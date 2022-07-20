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
  AGREGAR_OFERTA,
  ELIMINAR_OFERTA,
  AGREGAR_COMBO,
  ELIMINAR_COMBO,
  SELECCIONAR_LOCAL,
  SET_CONFIRMARPEDIDO,
  AGREGAR_CLIENTE,
  AGREGAR_CLIENTE_TOKEN,
  AGREGAR_COMBO_TOPPING,
  AÑADIR_PRECIO_DELIVERY,
  AÑADIR_COORDENADAS_DELIVERY,
} from "../../types";

const PedidosState = ({ children }) => {
  // State principal
  const initialState = {
    presentacion: [],
    ofertasSeleccionada: [],
    combosSeleccionados: [],
    pedido: {
      presentacionesPedidas: [], // ids de las presentaciones seleccionadas
      totalPedidos: 0,
    },
    localSeleccionado: "",
    confirmarPedido: false,
    cliente: null,
    customerToken: null,
    salsasConfig: [],
    deliveryPrice: null,
    deliveryCoordinates: null,
  };

  const [state, dispatch] = useReducer(pedidosReducer, initialState);

  // Funciones

  // Agregar informacion del cliente al stateContext
  const addCustomer = (customer) => {
    dispatch({
      type: AGREGAR_CLIENTE,
      payload: customer,
    });
  };
  // agregar token del cliente
  const addCustomerToken = (customer_token) => {
    dispatch({
      type: AGREGAR_CLIENTE_TOKEN,
      payload: customer_token,
    });
  };

  const setConfirmarpedido = (data) => {
    dispatch({
      type: SET_CONFIRMARPEDIDO,
      payload: data,
    });
  };

  const selectLocal = (local) => {
    dispatch({
      type: SELECCIONAR_LOCAL,
      payload: local,
    });
  };

  const addDataProducto = (producto) => {
    dispatch({
      type: AGREGAR_PRODUCTOS,
      payload: producto,
    });
  };

  const addPresentacion = (dataPresentacion) => {
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
  const addTotalPedidos = () => {
    dispatch({
      type: SUMAR_SUBTOTALES,
    });
  };

  // elimina una presentacion del array presentacion del initialState -> presentacion:[]
  const deletePresentacion = (idPedido) => {
    dispatch({
      type: ELIMINAR_PRESENTACION,
      payload: idPedido,
    });
  };

  const addSalsasConfig = (salsas) => {
    dispatch({
      type: "AGREGAR_SALSAS_CONFIG",
      payload: salsas,
    });
  };

  const addOferta = (oferta) => {
    dispatch({
      type: "AGREGAR_OFERTA",
      payload: oferta,
    });
  };

  const addCombo = (combo) => {
    dispatch({
      type: "AGREGAR_COMBO",
      payload: combo,
    });
  };
  const addComboWithTopping = (combo) => {
    dispatch({
      type: "AGREGAR_COMBO_TOPPING",
      payload: combo,
    });
  };

  const deleteOferta = (idOferta) => {
    dispatch({
      type: "ELIMINAR_OFERTA",
      payload: idOferta,
    });
  };

  const deleteCombo = (combo) => {
    dispatch({
      type: "ELIMINAR_COMBO",
      payload: combo,
    });
  };

  const setDeliveryPrice = (price) => {
    dispatch({
      type: AÑADIR_PRECIO_DELIVERY,
      payload: price,
    });
  };
  const setDeliveryCoordinates = (coordinates) => {
    dispatch({
      type: AÑADIR_COORDENADAS_DELIVERY,
      payload: coordinates,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        presentacion: state.presentacion,
        pedido: state.pedido,
        ofertasSeleccionada: state.ofertasSeleccionada,
        combosSeleccionados: state.combosSeleccionados,
        localSeleccionado: state.localSeleccionado,
        totalPedidos: state.pedido.totalPedidos,
        confirmarPedido: state.confirmarPedido,
        cliente: state.cliente,
        customerToken: state.customerToken,
        salsasConfig: state.salsasConfig,
        deliveryPrice: state.deliveryPrice,
        deliveryCoordinates: state.deliveryCoordinates,
        addCustomerToken,
        setConfirmarpedido,
        addDataProducto,
        addPresentacion,
        vaciarCesta,
        addTotalPedidos,
        vaciarTotalPedido,
        deletePresentacion,
        addOferta,
        deleteOferta,
        addCombo,
        addComboWithTopping,
        deleteCombo,
        selectLocal,
        addCustomer,
        addSalsasConfig,
        setDeliveryPrice,
        setDeliveryCoordinates,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
