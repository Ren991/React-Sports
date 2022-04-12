import axios from "axios"



const dataInicial = {
    brand: [],


}

export default function brandReducer(state = dataInicial, action) {

    switch (action.type) {

        case GET_ALL_BRAND:
            return {
                ...state,
                brand: action.payload
            }
        default:
            return state
    }
}
//ruta api      
const URLB = "http://localhost:4000/api"
//aciones
const GET_ALL_BRAND = "GET_ALL_BRAND"


export const getAllbrand = (brand) => async (dispatch, getState) => {
    /* console.log(brand) */
    const res = await axios.get(URLB + "/allBrand/",{brand})
    /* console.log(res); */
    const brandAll = res.data.respuesta.brandLocal
   
    dispatch({ type: GET_ALL_BRAND, payload: brandAll })
}