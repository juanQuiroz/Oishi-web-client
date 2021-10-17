/* eslint-disable import/no-anonymous-default-export */
import {
  SUMAR_SUBTOTALES,
  ACTUALIAZAR_CANTPRESENTACION,
  VACIAR_CESTA,
  VACIAR_TOTALPEDIDO,
  ELIMINAR_PRESENTACION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ACTUALIAZAR_CANTPRESENTACION:
      if (state.presentacion.some(p => p.id === action.payload.id)) {
        return {
          ...state,
          presentacion: state.presentacion.map(pre =>
            pre.id === action.payload.id ? (pre = action.payload) : pre,
          ),
        };
      }
      return {
        ...state,
        presentacion: [...state.presentacion, action.payload],
      };

    case VACIAR_CESTA:
      return {
        ...state,
        presentacion: [],
        pedido: { ...state.pedido, totalPedidos: 0 },
      };
    case VACIAR_TOTALPEDIDO:
      return {
        ...state,
        pedido: { ...state.pedido, totalPedidos: 0 },
      };
    case SUMAR_SUBTOTALES: // fn: addTotalPedido
      return {
        ...state,
        pedido: {
          ...state.pedido,
          totalPedidos: state.pedido.totalPedidos + action.payload,
        },
      };
    case ELIMINAR_PRESENTACION: // fn: deletePresentacion
      console.log(
        "REDUCER: ",
        state.presentacion.filter(pre => pre.id === action.payload),
      );
      return {
        ...state,
        presentacion: state.presentacion.filter(
          pre => pre.id !== action.payload,
        ),
        // actualizar total -> total actual - (precio X cantidad) de la presentacion eliminada
        pedido: {
          ...state.pedido,
          totalPedidos:
            state.pedido.totalPedidos -
            state.presentacion.filter(pre => pre.id === action.payload)[0]
              .precio *
              state.presentacion.filter(pre => pre.id === action.payload)[0]
                .cantidad,
        },
      };

    default:
      return state;
  }
};
