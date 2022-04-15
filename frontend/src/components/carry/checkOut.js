import React, { useEffect, useState } from 'react'
import '../../styles/checkOut.css'
import TableTwo from './TableTwo'
import { connect, useDispatch, useSelector } from 'react-redux'

import { getAllProducts } from '../../redux/productos/productos'
import Paypal from './Paypal'

var localStorageID = []
var productosEnArray = []
var productosAMostar = []
var productosBaseDeDatos = []
var producAddRenderIDArray = ""

function CheckOut(props) {
    const cambio = useSelector(state => state.carritoMain.reload)
    const todosLosProductos = useSelector(state => state.productosMain.products)    //ESTADO CARGADO CON getAllProducts
    const renderProd = []
    const [canasta, setCanasta] = useState([])


    /* console.log(renderProd) */
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem("carrito") !== null ){
        setCanasta(localStorage.getItem("carrito").split(" "))
        }   
      },[])
      console.log(canasta)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    console.log(todosLosProductos)

    canasta?.forEach((id) => {
        renderProd.push(...todosLosProductos.filter(productos => productos._id == id))
    })

    console.log(renderProd)


    
    return (

        <main id="main">
            <section id='general'>
                <div >


                    <table id='tabla'>
                        <thead id='encabezado'>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                {/* <th>asdasd</th> */}
                            </tr>

                        </thead>
                        <TableTwo productosAMostar={renderProd} />
                         
                    </table>
                </div>
                <div id='botones' ><button onClick={()=>{localStorage.removeItem("carrito")}} id="clear">Clear</button></div>

            </section>

            <div id="CarritoDetalle">

            </div>
            <div style={{ width: "50%" }}>
                <Paypal productosAMostar={renderProd} />
            </div>


        </main>
    )

}



const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
        products: state.productosMain.products
    }
}

export default connect(mapStateToProps, null)(CheckOut)