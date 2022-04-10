import axios from "axios"



const dataInicial = {
    brand: [],


}

export default function BrandReducer(state = dataInicial, action) {

    switch (action.type) {

        case GET_ALL_BRAND:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}
//ruta api      
const URLB = "http://localhost:4000/api"
//aciones
const GET_ALL_BRAND = "GET_ALL_BRAND"


export const getAllbrand = () => async (dispatch, getState) => {

    const res = await axios.get(URLB + "/allBrand")
    console.log(res);
    const BrandAll = res.data.respuesta
    dispatch({ type: GET_ALL_BRAND, payload: brandAll })
}