const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'ADD':
            let cart = [...state.cart]
            cart.push(action.payload)
            return{
                ...state,
                cart,
            }
        
        default:
            return state    
    }


}

export default cartReducer