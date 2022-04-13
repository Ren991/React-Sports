import axios from "axios";

const productsActions = {
  addProduct: (productData) => {
    console.log("AddProduct");
    console.log(productData)
    return async (dispatch, getState) => {
      try {
        const res = await axios.post(`http://localhost:4000/api/allGoods/`, {productData});
        console.log(res)
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: 'Product uploaded',
            success: res.data.success,
          },
        });
        return res;
      } catch (error) {
        console.log(error);
      }
    };
  },

  modifyProduct: (productData) => {
    console.log("@productsActions modifyProduct");
    console.log(productData);
    // return async(dispatch, getState)=>{
    //     try{
    //         const res = await axios.put(`https://mytinerary-viola.herokuapp.com/api/itineraries/comments`,
    //             {comment},
    //             {headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         dispatch({
    //             type: 'message',
    //             payload: {
    //                 view: true,
    //                 message: res.data.message,
    //                 success: res.data.success,
    //             }
    //         })
    //         return res
    //     }catch(error){
    //         console.log(error)
    //     }
    // }
  },

  deleteProduct: (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        const res = await axios.delete(`http://localhost:4000/api/allGoodsId/${id}`)  
        dispatch({
            type: 'message',
            payload: {
                view: true,
                message: 'The product has been deleted!',
                success: res.data.success
            }
        })
        return res
    }
}
};

export default productsActions;
