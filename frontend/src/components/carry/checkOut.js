import React, { useEffect, useState } from 'react'
import '../../styles/checkOut.css'
import Table from './table'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/productos/productos'

var localStorageID = []
var productosEnArray = []
const productosAMostar = []

function CheckOut(props) {
    console.log(props);
    const todosLosProductos = useSelector(state => state.productosMain.products)
    const dispatch = useDispatch()
    const [reload, setReload] = useState(false)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



    /*     console.log(todosLosProductos); */

    const [productosDeLocalStorage, setProductosDeLocalStorage] = useState([])

    useEffect(() => {
        setProductosDeLocalStorage(JSON.parse(localStorage.getItem("cart")))
    }, [reload])

    productosDeLocalStorage?.map((id) => {
        productosEnArray.push(...todosLosProductos.filter(productos => productos._id == id))
    })

    var [productosAMostar, setProductosAMostar] = useState([])

    const productos = new Set(productosEnArray);
    productosAMostar = [...productos]
    console.log(productosAMostar);


    return (

        <main id="main">

            <section id='general'>
                {/*                 <div >
                    <div >
                        <div > */}
                <div >


                    <table id='tabla'>
                        <thead id='encabezado'>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        {productosAMostar?.map((productos) =>
                            <Table productos={productos} productosDeLocalStorage={productosDeLocalStorage} setProductosAMostar={setProductosAMostar} setProductosDeLocalStorage={setProductosDeLocalStorage} reload={reload} setReload={setReload} />)}
                    </table>
                </div>
                {/*                        </div>
                    </div>
                </div> */}
                <div id='botones' ><button type="button" id="btncomprar">Comprar</button><button id="clear">Clear</button></div>

            </section>

            <div id="CarritoDetalle">

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