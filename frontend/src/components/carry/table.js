import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/checkOut.css'
import {setReload} from '../../redux/carrito/carrito'

export default function Table(props) {
    const cambio = useSelector(state => state.carritoMain.reload)
    const dispatch = useDispatch()

  /*   function remove(e) {
    const indice = e.target.id
    const lista = localStorage.getItem("carrito")?.split(" ")
   

    removeItemFromArr(lista, indice)
    console.log("antes "+localStorage.getItem("carrito"))
    
    localStorage.removeItem("carrito")
    if(lista.length!==0){
        
        localStorage.setItem("carrito", lista)
        dispatch(setReload(cambio))
        console.log("ahora "+localStorage.getItem("carrito"))
    }
    
} */


/* 
function removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
} */

    return (<>
        
        {   localStorage.getItem("carrito") !== null ?
        <tbody id='cuerpo'>
            <tr>
                <td id='nombreProducto'>
                    <div >
                        <img id='imagenProducto' src={process.env.PUBLIC_URL + `/img/productImages/${props?.onePro?.image}`} />
                    </div>
                    <div>
                        <h6>{props?.onePro?.productName}</h6>
                        <button id={props.onePro?._id} /* onClick={remove} */>delete</button>
                    </div>
                </td> 
                <td className='botonera2' style={{fontSize:"25px"}}>
                ${props.onePro?.price}
                </td>
                
            </tr>

        </tbody >
        :
        <tbody>
            <h2>Empiece su compra</h2>
        </tbody> 
    }
   </>
    )
}