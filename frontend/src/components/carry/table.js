import React, { useEffect, useState } from 'react'
import '../../styles/checkOut.css'

var articulo = []
export default function Table(props) {
    /* console.log(props.onePro); */
   /*  const productos = props.productos
    var productosLocalStorage = props.productosDeLocalStorage

    console.log(typeof productos);
    var cantidad = []
    cantidad.unshift(productos)
    console.log(cantidad);



    cantidad.forEach(element => {
        articulo.push(
            {
                _id: element._id,
                type: element.type,
                description: element.description,
                image: element.image,
                price: element.price,
                size: element.size,
                stock: element.stock,
                color: element.color,
                sport: element.sport,
                productName: element.productName,
                genre: element.genre,
                brand: element.brand,
                cantidad: 1,
            }
        )
    })

    console.log(articulo);

    var [contador, setContador] = useState(1)
    var conta = []
    function Suma(id) {
        console.log(id);

        conta = [...articulo.filter(arti => arti._id === id)]
        console.log(conta);
        conta.map(function anonima(arti) {
            if (arti.cantidad < arti.stock) {
                arti.cantidad++
            }

        })
        console.log(conta[0].cantidad);
        setContador(conta[0].cantidad)

    }

    var conta = []
    function Resta(id) {
        console.log(id);

        conta = [...articulo.filter(arti => arti._id === id)]
        console.log(conta);
        conta.map(function anonima(arti) {
            if (arti.cantidad > 0) {
                arti.cantidad--
            }

        })
        console.log(conta[0].cantidad);
        setContador(conta[0].cantidad)

    }

    function remove(id) {
        console.log(id);
        console.log(productosLocalStorage)
        productosLocalStorage = productosLocalStorage.filter(idLocal => idLocal != id)
        localStorage.setItem('cart', JSON.stringify(productosLocalStorage))
        console.log(productosLocalStorage);

        props.setReload(!props.reload)
    }

 */
    return (
        <tbody id='cuerpo'>
            <tr>
                <td id='nombreProducto'>
                    <div >
                        <img id='imagenProducto' src={process.env.PUBLIC_URL + `/img/productImages/${props.onePro?.image}`} />
                    </div>
                    <div>
                        <h6>{props.onePro?.productName}</h6>
                        <h5 id="id">$ {props.onePro?.price}</h5>
                    </div>
                </td>
                <td >
                    <div >
                        <div >
                            {/* <input id='input' type="string" value={(props.onePro.price * contador)} /> */}
                        </div>
                    </div>
                </td>
                <td className='botonera2'>

                    {/* <button className='restaSuma' onClick={(() => (Resta(props.onePro._id)))}>
                        -
                    </button> */}
                </td>
                {/* <td className='botonera2'>
                    {contador}
                </td> */}
                <td className='botonera2'>
                    
                </td>
                <td className='botonera2'>
                   

                </td>
            </tr>

        </tbody >
    )
}