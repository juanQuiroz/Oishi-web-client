/* eslint-disable import/no-anonymous-default-export */
import { AGREGAR_PRODUCTOS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTOS:
      return {
        ...state,
        productos: [{ cantidad: action.payload }],
      };

    default:
      return state;
  }
};
