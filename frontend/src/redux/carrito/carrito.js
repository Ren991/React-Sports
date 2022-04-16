const dataInicial = {
  carritoUser: [],
  cantProducts: 0,
  estadoCarrito: [],
};

export default function carritoReducer(state = dataInicial, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        carritoUser: [...state.carritoUser, action.payload],
        cantProducts: state.carritoUser.length + 1,
      };
    case MANTENER_ESTADO:
      return {
        ...state,
        estadoCarrito: action.payload,
      };
    default:
      return state;
  }
}

const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
const MANTENER_ESTADO = "MANTENER_ESTADO";
export const addOneProduc = (comeProduc) => (dispatch, getState) => {
  if (localStorage.getItem("carrito") !== null) {
    const acumular = localStorage.getItem("carrito");
    localStorage.setItem("carrito", comeProduc + " " + acumular);
  } else {
    localStorage.setItem("carrito", comeProduc);
  }
  dispatch({ type: AGREGAR_PRODUCTO, payload: comeProduc });
};

export const mantenerEstado = (unArrayProduct) => (dispatch, getState) => {
  console.log(unArrayProduct);

  dispatch({ type: MANTENER_ESTADO, payload: unArrayProduct });
};
