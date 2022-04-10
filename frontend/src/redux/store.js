// mi tienda
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducer

//import usuarioReducer from './usuarios/usuarios'
import productosReducer from './productos/productos'
import userReducer from './reducers/userReducer'
import BrandReducer from './productos/marcas'

const rootReducer = combineReducers({
    productosMain: productosReducer,
    userReducer,
    BrandReducer

    /* usuarioMain:usuarioReducer, */

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}