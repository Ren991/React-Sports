import React from 'react'
import '../../styles/checkOut.css'
import Table from './table'
import { connect } from 'react-redux'

function CheckOut(props) {


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
                        <Table />
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

const mapStateToProps= (state)=>{
    return{
        cart: state.cartReducer.cart
    }
}

export default connect(mapStateToProps,null)(CheckOut)