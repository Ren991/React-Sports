import React from 'react'
import '../../styles/checkOut.css'


export default function Table(props) {
    console.log(props.productos);
    const productos = props.productos
    console.log(typeof productos);
    var cantidad = []
    cantidad.unshift(productos)
    console.log(cantidad);



    return (
        <tbody id='cuerpo'>
            <tr>
                <td id='nombreProducto'>
                    <div >
                        <img id='imagenProducto' src={process.env.PUBLIC_URL + `/img/productImages/${productos.image}`} />
                    </div>
                    <div>
                        <h6>{productos.productName}</h6>
                        <h5 id="id">$ {productos.price}</h5>
                    </div>
                </td>
                <td >
                    <div >
                        <div >
                            <input id='input' type="number" value={productos.price} />
                        </div>
                    </div>
                </td>
                <td className='botonera2'>

                    <button className='restaSuma'>
                        -
                    </button>
                </td>
                <td className='botonera2'>
                    {cantidad.length}
                </td>
                <td className='botonera2'>
                    <button className='restaSuma'>
                        +
                    </button>
                </td>
                <td className='botonera2'>
                    <button className='restaSuma'>
                        x
                    </button>

                </td>
            </tr>

        </tbody >
    )
}