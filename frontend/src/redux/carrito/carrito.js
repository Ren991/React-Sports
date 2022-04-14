


const dataInicial = {
<<<<<<< HEAD
  carritoUser:[],
  cantProducts: 0,
  estadoCarrito:[],
  reload:false
=======
  carritoUser: [],
  cantProducts: 0,
  carritoParcial: []

>>>>>>> b47edcc953a52ff3cb55e2e70e43863a02db9496
}

export default function carritoReducer(state = dataInicial, action) {

  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        carritoUser: [...state.carritoUser, (action.payload)],
        cantProducts: state.carritoUser.length + 1,
        
      }
<<<<<<< HEAD
    case MANTENER_ESTADO:
      return{
        ...state,
        estadoCarrito: action?.payload?.split(" ")

      }
    case CAMBIATE_ESTADO:
    
    return{
      ...state,
      reload: action.payload
    }
=======
    case "Lista_de_ID_productos":
      return {
        ...state,
        carritoParcial: action.payload,

      }
>>>>>>> b47edcc953a52ff3cb55e2e70e43863a02db9496
    default:
      return state;
  }
}

const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO"
const MANTENER_ESTADO = "MANTENER_ESTADO"
const CAMBIATE_ESTADO = "CAMBIATE_ESTADO"
export const addOneProduc = (comeProduc) => (dispatch, getState) => {
<<<<<<< HEAD
        
       
        if(localStorage.getItem("carrito") !==null){
          const acumular = localStorage.getItem("carrito")
          localStorage.setItem("carrito", comeProduc+ " " + acumular)
        }else{
          localStorage.setItem("carrito", comeProduc)
        }
        dispatch({ type: AGREGAR_PRODUCTO, payload: comeProduc})

}

export const mantenerEstado = (unArrayProduct) => (dispatch, getState) => {
        console.log(unArrayProduct)
         
        dispatch({ type: MANTENER_ESTADO, payload: unArrayProduct})
        

}
export const setReload = (unCambio) => (dispatch, getState) => {
     
         
        dispatch({ type: CAMBIATE_ESTADO, payload: !unCambio})
        

}

=======
  console.log(comeProduc)
  dispatch({ type: AGREGAR_PRODUCTO, payload: comeProduc })

}


export const carrryInitial = (variable) => (dispatch, getState) => {
  console.log(variable)
  dispatch({ type: "Lista_de_ID_productos", payload: variable })

}
>>>>>>> b47edcc953a52ff3cb55e2e70e43863a02db9496
