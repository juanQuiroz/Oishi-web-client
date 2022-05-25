/* eslint-disable import/no-anonymous-default-export */
import {
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
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_CLIENTE:
      return {
        ...state,
        cliente: action.payload,
      };

    case AGREGAR_CLIENTE_TOKEN:
      return {
        ...state,
        customerToken: action.payload,
      };

    case SET_CONFIRMARPEDIDO:
      return {
        ...state,
        confirmarPedido: action.payload,
      };

    case SELECCIONAR_LOCAL:
      return {
        ...state,
        localSeleccionado: action.payload,
      };

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
              .reduce((prev, curr) => prev + curr, 0) +
            state.combosSeleccionados
              .map(comb => comb.precio * comb.cantidad)
              .reduce((prev, curr) => prev + curr, 0),
        },
      };

    case VACIAR_CESTA:
      return {
        presentacion: [],
        ofertasSeleccionada: [],
        combosSeleccionados: [],
        pedido: {
          presentacionesPedidas: [], // ids de las presentaciones seleccionadas
          totalPedidos: 0,
        },
        localSeleccionado: "",
      };

    case VACIAR_TOTALPEDIDO:
      return {
        ...state,
        pedido: { ...state.pedido, totalPedidos: 0 },
      };

    case ELIMINAR_PRESENTACION: // fn: deletePresentacion
      return {
        ...state,
        presentacion: state.presentacion.filter(
          pre => pre.id !== action.payload,
        ),
      };

    case ELIMINAR_OFERTA: // fn: deleteOferta
      return {
        ...state,
        ofertasSeleccionada: state.ofertasSeleccionada.filter(
          ofe => ofe.oferta_id !== action.payload,
        ),
      };

    case ELIMINAR_COMBO: // fn: deleteCombo
      return {
        ...state,
        combosSeleccionados: state.combosSeleccionados.filter(
          comb => comb.id !== action.payload,
        ),
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

    case AGREGAR_COMBO:
      if (state.combosSeleccionados.some(c => c.id === action.payload.id)) {
        return {
          ...state,
          combosSeleccionados: state.combosSeleccionados.map(c =>
            c.id === action.payload.id ? (c = action.payload) : c,
          ),
        };
      }
      return {
        ...state,
        combosSeleccionados: [...state.combosSeleccionados, action.payload],
      };

    case AGREGAR_COMBO_TOPPING:
      // if (state.combosSeleccionados.some(c => c.id === action.payload.id)) {
      //   return {
      //     ...state,
      //     combosSeleccionados: state.combosSeleccionados.map(c =>
      //       c.id === action.payload.id ? (c = action.payload) : c,
      //     ),
      //   };
      // }
      return {
        ...state,
        combosSeleccionados: [...state.combosSeleccionados, action.payload],
      };

    default:
      return state;
  }
};
