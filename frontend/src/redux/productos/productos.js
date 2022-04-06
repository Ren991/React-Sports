import axios from "axios"

const dataInicial = {
    products: []
    
}

export default function productosReducer(state=dataInicial, action){
    
    switch (action.type) {
        
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            } 
            default:
                return state
            }
            
        }
//ruta api      
const URLProductos = "http://localhost:4000/api"
//aciones
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

export const getAllProducts= () => async (dispatch, getState) => {
                
                const res = await axios.get(URLProductos + "/allGoods")
                console.log(res);
                const productosTotales = res.data.respuesta.products
                dispatch({ type: GET_ALL_PRODUCTS, payload: productosTotales})
            }






