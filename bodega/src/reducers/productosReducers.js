//Importar Types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

const stateinicial = {
  productos: [],
  error: null,
};

export default function (state = stateinicial, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
