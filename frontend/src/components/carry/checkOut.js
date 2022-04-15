import React, { useEffect, useState } from 'react'
import '../../styles/checkOut.css'
import Table from './table'
import TableTwo from './TableTwo'
import { connect, useDispatch, useSelector } from 'react-redux'

import { getAllProducts } from '../../redux/productos/productos'
import Paypal from './Paypal'

var localStorageID = []
var productosEnArray = []
const productosAMostar = []

function CheckOut(props) {
    const cambio = useSelector(state => state.carritoMain.reload)
    const todosLosProductos = useSelector(state => state.productosMain.products)
    const producAddRenderID = useSelector(state => state.carritoMain.estadoCarrito)
    const [renderProd, setRenderProd] = useState()
    console.log(todosLosProductos)
    console.log(producAddRenderID)
    /* console.log(renderProd) */
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



    /*     console.log(todosLosProductos); */

    const [productosDeLocalStorage, setProductosDeLocalStorage] = useState(JSON.parse(localStorage.getItem("cart")))

    /*     useEffect(() => {
            setProductosDeLocalStorage(JSON.parse(localStorage.getItem("cart")))
        }, [reload]) */
    console.log(productosDeLocalStorage);

    productosDeLocalStorage?.map((id) => {
        productosEnArray.push(...todosLosProductos.filter(productos => productos._id == id))
    })
    /*  const renderProd =todosLosProductos.filter(oneIDProd=>producAddRenderID.indexOf(oneIDProd._id) === 1) */


    const productosAMostar = useSelector(state => state.carritoMain.carritoUser)

    /*     const productos = new Set(productosEnArray);
        productosAMostar = [...productos] */
    console.log(productosAMostar);


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
                        <TableTwo />
                        {productosAMostar?.map((productos) =>
                            <Table productos={productos} productosDeLocalStorage={productosDeLocalStorage} setProductosDeLocalStorage={setProductosDeLocalStorage} />)}
                    </table>
                </div>
                <div id='botones' ><button type="button" id="btncomprar">Comprar</button><button id="clear" >Clear</button></div>

            </section>

            <div id="CarritoDetalle">

            </div>
            <div style={{ width: "50%" }}>
                <Paypal productosAMostar={productosAMostar} />
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