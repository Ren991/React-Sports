
const dataInicial = {
  carritoUser:[],
  cantProducts: 0
}

export default function carritoReducer(state = dataInicial, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        carritoUser: [...state.carritoUser, (action.payload)],
        cantProducts: state.carritoUser.length + 1
      }
    default:
        return state;
    }
}
  
const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO"

export const addOneProduc = (comeProduc) => (dispatch, getState) => {
        console.log(comeProduc)
        dispatch({ type: AGREGAR_PRODUCTO, payload: comeProduc})

}

