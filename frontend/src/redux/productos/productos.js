import axios from "axios";

const dataInicial = {
  products: [],
  marca: [],

}

export default function productosReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case "filt":
      console.log(action.payload)
      const filtered = state.products.filter((product) =>
        product.productName.toLowerCase().startsWith(action.payload.toLowerCase().trim())
      );

      switch (action.type) {

        case GET_ALL_PRODUCTS:
          return {
            ...state,
            products: action.payload
          }
        case MARCA:
          return {
            ...state,
            marca: action.payload
          }
        default:
          return state
      }

  },
  //ruta api
  const URLProductos = "http://localhost:4000/api";
  //aciones
  const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
  const MARCA = "MARCA"

  export const getAllProducts = () => async (dispatch, getState) => {

    const res = await axios.get(URLProductos + "/allGoods")
    /* console.log(res); */
    const productosTotales = res.data.respuesta.products
    dispatch({ type: GET_ALL_PRODUCTS, payload: productosTotales })
  },

  export const modificarStock = (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      try {
        let response = await axios.put(
          URLProductos + "/allGoods/" + id,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        dispatch({ type: "GET_ALL_PRODUCTS", payload: response.data.respuesta });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const filterProducts = (value) => {
    console.log(value)
    return (dispatch, getState) => {
      dispatch({ type: 'filt', payload: value })
    }
  },

  export const seachProductsMarca = (id) => {

    return async (dispatch, getState) => {

      const res = await axios.get(URLProductos + "/allGoods/brand/" + id)

      dispatch({ type: MARCA, payload: res.data.respuesta.brands })

    }
  }

}
