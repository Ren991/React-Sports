import React, { useEffect } from 'react'
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

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



    /*     console.log(todosLosProductos); */

    var productosDeLocalStorage = JSON.parse(localStorage.getItem("cart"))



    productosDeLocalStorage?.map((id) => {
        productosEnArray.push(...todosLosProductos.filter(productos => productos._id == id))
    })



    const productos = new Set(productosEnArray);
    const productosAMostar = [...productos]
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
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {productosAMostar?.map((productos) =>
                            <Table productos={productos} />)}
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