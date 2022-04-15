import React from 'react';
import { useSelector } from 'react-redux'
import './tablacss/tableTwo.css'
const TableTwo = (props) => {
    const productsUser = props.productosAMostar
    console.log(productsUser)

    return (
        <tbody id='cuerpo'>
            {productsUser.map((productos, index) => {
                return (
                    <tr key={index}>
                        <td id='nombreProducto'>
                            <div >
                                <img id='imagenProducto' src={process.env.PUBLIC_URL + `/img/productImages/${productos.image}`} />
                            </div>
                            <div>
                                <h6>{productos.productName}</h6>

                            </div>
                        </td>

                        <td>
                            {productos.price}
                        </td>

                        <td className='botonera2'>
                            <button className='restaSuma'>
                                -
                            </button>
                        </td>

                        <td className='botonera2'>
                            unContador
                        </td>

                        <td className='botonera2'>
                            <button className='restaSuma'>
                                +
                            </button>
                        </td>

                        <td className='botonera2'>
                            <button className='restaSuma' >
                                x
                            </button>
                        </td>
                    </tr>
                )
            })

            }


        </tbody >
    )
}

export default TableTwo;