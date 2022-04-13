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

  modifyProduct: (prodId,toModifyProduct) => {
    console.log(toModifyProduct)

    return async (dispatch, getState) => {
        try{
            const res = await axios.put('http://localhost:4000/api/allGoodsId/' +  prodId,  { ...toModifyProduct })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }catch(err){
            console.log(err)
        }

    }
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
