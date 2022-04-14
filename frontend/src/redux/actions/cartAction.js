let cartProducts = [];

const cartAction = {



    addToCart: (prodId) => {
        cartProducts.push(prodId);
        console.log(cartProducts)
        const uniqueProducts = new Set(cartProducts);
        console.log(uniqueProducts);
        var clearProducts = [...uniqueProducts];
        console.log(clearProducts);


        return async () => {

            console.log(clearProducts)

            localStorage.setItem('cart', JSON.stringify(clearProducts))
            /*  dispatch({
                 type: 'ADD',
                 payload: prodId,
             }) */
        }
    },







};


export default cartAction