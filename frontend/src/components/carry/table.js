import React from 'react'
import '../../styles/checkOut.css'


export default function Table(props) {

    return (
        <tbody id='cuerpo'>
            <tr>
                <td id='nombreProducto'>
                    <div >
                        <img id='imagenProducto' src='https://w7.pngwing.com/pngs/323/773/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers.png' />
                    </div>
                    <div>
                        <h6>Nombre de Producto</h6>
                        <h5 id="id">$ 000</h5>
                    </div>
                </td>
                <td >
                    <div >
                        <div >
                            <input id='input' type="number" value={1} />
                        </div>
                    </div>
                </td>
                <td className='botonera2'>

                    <button className='restaSuma'>
                        -
                    </button>
                </td>
                <td className='botonera2'>
                    $ 000
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