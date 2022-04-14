import React, { useEffect, useState } from 'react'
import '../../styles/checkOut.css'
import Table from './table'
import { connect, useDispatch, useSelector } from 'react-redux'
import {mantenerEstado} from '../../redux/carrito/carrito'

function CheckOut(props) {
    const todosLosProductos = useSelector(state => state.productosMain.products)
    const producAddRenderID = useSelector(state => state.carritoMain.estadoCarrito)
    const [renderProd, setRenderProd] = useState()
    console.log(todosLosProductos)
    console.log(producAddRenderID)
    /* console.log(renderProd) */
    const dispatch = useDispatch() 
    
    useEffect(() => {

        if (localStorage.getItem('token') !== null) { //usuario ==null
        const estado = localStorage.getItem("carrito") 
        dispatch(mantenerEstado(estado))
        }
    }, []) 
    /* [1, 2, 5, 10].map(a=> ()=>{return a}) */
    
        const productoss = producAddRenderID?.map(oneId=> todosLosProductos.find(producto=>producto._id === oneId))
        /* producAddRenderID.map(oneId=> todosLosProductos.find(producto=>producto._id === oneId)) */
        console.log(productoss)
  /*   const renderProd =producAddRender?.map((id) => {
        productosEnArray.push(...todosLosProductos.filter(productos => productos._id == id))
    }) */
   /*  const renderProd =todosLosProductos.filter(oneIDProd=>producAddRenderID.indexOf(oneIDProd._id) === 1) */
    

    /* //const productos = new Set(productosEnArray); //logica sin repetidos
    const productos = productosEnArray  // logica repetidos
    productosAMostar = [...productos]
     */


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
                                <th>saddsadsa</th>
                            </tr>
                       
                        </thead>
                        { 
                        productoss?.map((oneProductos) =>
                            <Table onePro={oneProductos} />)
                            
                        }
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