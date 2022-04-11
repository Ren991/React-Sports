let cartProducts=[];

const cartAction = {
    


    addToCart:(prodId) =>{
        cartProducts.push(prodId);
        console.log(cartProducts)
        const uniqueProducts = new Set(cartProducts);
        var clearProducts = [...uniqueProducts];
        

        return async() => {

            console.log(clearProducts)

            localStorage.setItem('cart',JSON.stringify(clearProducts))
           /*  dispatch({
                type: 'ADD',
                payload: prodId,
            }) */
        }
    },

    

    
    
};


export default cartAction