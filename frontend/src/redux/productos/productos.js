import axios from "axios";

const dataInicial = {
  products: [],
  productId:[],
  marca:[],
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
      return{
        ...state,
        productId: action.payload,
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
const URLProductos = "http://localhost:4000/api";
//aciones
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = () => async (dispatch, getState) => {
  const res = await axios.get(URLProductos + "/allGoods");
  const productosTotales = res.data.respuesta.products;
  dispatch({ type: GET_ALL_PRODUCTS, payload: productosTotales });
};

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

export const filterProducts = (value)=>{
    console.log(value)
    return (dispatch, getState)=>{
        dispatch({type: 'filt', payload: value })
    }
}

export const searchProductById = async (id) => {   
  
  const res = await axios.get(URLProductos + "/allGoodsId/" + id);
<<<<<<< HEAD
  console.log(res.data.respuesta)
  return  {
=======
  return {  
>>>>>>> 0e4f75d3c394fc8f2adb076da2e5216b65b9c4d5
    response: res.data.respuesta,
  };
};

export const seachProductsMarca = (id) => {
  console.log(id);
  return async (dispatch, getState) => {

      const res = await axios.get(URLProductos + '/allGoodsFor/brand/' + id)
      console.log(res);
      dispatch({ type: "marca", payload: res.data.respuesta.brands })

  }
}
