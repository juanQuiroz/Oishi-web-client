/* eslint-disable import/no-anonymous-default-export */
import {
  SUMAR_SUBTOTALES,
  ACTUALIAZAR_CANTPRESENTACION,
  VACIAR_CESTA,
  VACIAR_TOTALPEDIDO,
  ELIMINAR_PRESENTACION,
  AGREGAR_OFERTA,
  ELIMINAR_OFERTA,
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
          pedido: {
            ...state.pedido,
            totalPedidos: state.presentacion
              .map(pre => pre.cantidad * pre.precio)
              .reduce((prev, curr) => prev + curr, 0),
          },
        };
      }
      return {
        ...state,
        presentacion: [...state.presentacion, action.payload],
        pedido: {
          ...state.pedido,
          totalPedidos: state.presentacion
            .map(pre => pre.cantidad * pre.precio)
            .reduce((prev, curr) => prev + curr, 0),
        },
      };

    case SUMAR_SUBTOTALES:
      return {
        ...state,
        pedido: {
          ...state.pedido,
          totalPedidos:
            state.presentacion
              .map(pre => pre.cantidad * pre.precio)
              .reduce((prev, curr) => prev + curr, 0) +
            state.ofertasSeleccionada
              .map(ofe => ofe.precio_oferta * ofe.cantidad)
              .reduce((prev, curr) => prev + curr, 0),
        },
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

    case AGREGAR_OFERTA:
      if (
        state.ofertasSeleccionada.some(
          o => o.oferta_id === action.payload.oferta_id,
        )
      ) {
        return {
          ...state,
          ofertasSeleccionada: state.ofertasSeleccionada.map(ofer =>
            ofer.oferta_id === action.payload.oferta_id
              ? (ofer = action.payload)
              : ofer,
          ),
        };
      }
      return {
        ...state,
        ofertasSeleccionada: [...state.ofertasSeleccionada, action.payload],
      };

    default:
      return state;
  }
};
