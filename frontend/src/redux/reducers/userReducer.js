const initialState = {
    user: null,
    sweetalert: {view: false,
        message: '',
        success: false
    },
}

const userReducer = (state = initialState, action) => {

    switch(action.type){
        case 'user':
            return{
                ...state,
                user: action.payload,
            }
        
        case 'message':
            return{
                ...state,
                sweetalert: action.payload
            }
        
        default:
            return state    
    }
}

export default userReducer