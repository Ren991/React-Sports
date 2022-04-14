


const dataInicial = {
<<<<<<< HEAD
  carritoUser: [],
  cantProducts: 0,
  carritoParcial: []

}

export default function carritoReducer(state = dataInicial, action) {

=======
  carritoUser:[],
  cantProducts: 0,
  estadoCarrito:[]
}

export default function carritoReducer(state = dataInicial, action) {
  
>>>>>>> 76bd107153adf20811977d8b8a101513496b025f
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        carritoUser: [...state.carritoUser, (action.payload)],
        cantProducts: state.carritoUser.length + 1,
        
      }
<<<<<<< HEAD
    case "Lista_de_ID_productos":
      return {
        ...state,
        carritoParcial: action.payload,
=======
    case MANTENER_ESTADO:
      return{
        ...state,
        estadoCarrito: action.payload
>>>>>>> 76bd107153adf20811977d8b8a101513496b025f

      }
    default:
      return state;
  }
}

const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO"
const MANTENER_ESTADO = "MANTENER_ESTADO"
<<<<<<< HEAD
const CAMBIATE_ESTADO = "CAMBIATE_ESTADO"
export const addOneProduc = (comeProduc) => (dispatch, getState) => {
  console.log(comeProduc)
  dispatch({ type: AGREGAR_PRODUCTO, payload: comeProduc })

}


export const carrryInitial = (variable) => (dispatch, getState) => {
  console.log(variable)
  dispatch({ type: "Lista_de_ID_productos", payload: variable })

}
=======
export const addOneProduc = (comeProduc) => (dispatch, getState) => {
        
       /*  localStorage.setItem("productosID", JSON.stringify([comeProduc]))
        const total = localStorage.getItem("productosID")
        const elmentoParseado = JSON.parse(total)
        console.log(elmentoParseado.length) */
      /*   const elIDAnterior = localStorage.getItem("carrito") */
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

>>>>>>> 76bd107153adf20811977d8b8a101513496b025f
