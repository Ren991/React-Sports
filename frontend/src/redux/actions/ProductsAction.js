import axios from "axios"

const ProductsActions = {
    getAllProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get()
            console.log(res);
            dispatch({ type: 'get', payload: res.data.respuesta.products })
        }

    },
}