import axios from "axios"

const dataInicial = {
  products: [],
  productId: [],
  marca: [],
  filteredProducts: []
};

export default function productosReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case "GET_PRODUCT":
      console.log("Holas")
      return {
        ...state,
        productId: action.payload,
      };

    case "GET_PRODUCT":
      console.log("Holas")
      return {
        ...state,
        product: action.payload,
      };

    /* case "filt":
        console.log(action.payload)s
        const filtered = state.products.filter((product) =>
        product.productName.toLowerCase().startsWith(action.payload.toLowerCase().trim())
        );
        return {
          ...state,
          filteredProducts: filtered,
        }; */
    case "marca":
      return {
        ...state,
        marca: action.payload
      };

    default:
      return state;
  }
}
//ruta api      
const URLProductos = "http://localhost:4000/api"
//aciones
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const MARCA = "MARCA"



export const getAllProducts = () => async (dispatch, getState) => {

  const res = await axios.get(URLProductos + "/allGoods")
  /* console.log(res); */
  const productosTotales = res.data.respuesta.products
  dispatch({ type: GET_ALL_PRODUCTS, payload: productosTotales })
}

export const modificarStock = (id, body) => {
  const token = localStorage.getItem('token')

  return async (dispatch, getState) => {
    console.log(id)
    console.log(body);
    try {
      let response = await axios.put(URLProductos + "/allGoods/" + id, { body },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        })
      console.log(response);
      dispatch({ type: 'GET_ALL_PRODUCTS', payload: response.data.respuesta })

    } catch (error) {
      console.log(error)
    }
  }
}

export const searchProductById = async (id) => {

  const res = await axios.get(URLProductos + "/allGoodsId/" + id);
  return {
    response: res.data.respuesta,
  };
};

export const seachProductsMarca = (id) => {

  return async (dispatch, getState) => {
    const res = await axios.get(URLProductos + '/allGoodsFor/brand/' + id)
    dispatch({ type: "marca", payload: res.data.respuesta.brandsLocal })

  }
}
