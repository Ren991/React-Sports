import axios from "axios"

const dataInicial = {
    products: [],
   
    
}

export default function productosReducer(state = dataInicial, action) {

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

export const getAllProducts = () => async (dispatch, getState) => {

    const res = await axios.get(URLProductos + "/allGoods")
    const productosTotales = res.data.respuesta.products
    dispatch({ type: GET_ALL_PRODUCTS, payload: productosTotales })
}

export const modificarStock = (id) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
        try {
            let response = await axios.put(URLProductos + "/allGoods/" + id, {},
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
            dispatch({ type: 'GET_ALL_PRODUCTS', payload: response.data.respuesta })

        } catch (error) {
            console.log(error)
        }
    }
}

export const buscarCiudadesPorID = (id) => {
    return async (dispatch, getState) => {

        const res = await axios.get(URLProductos + "/allGoods/" + id)

        dispatch({ type: 'TRAER_UNA', payload: res.data.respuesta })

    }
}



