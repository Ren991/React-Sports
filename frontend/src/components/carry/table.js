import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/checkOut.css'

var articulo = []
const Table = (props) => {


    const productos = props.productos



    var cantidad = []
    cantidad.unshift(productos)




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
                genre: element.gender,
                brand: element.brand,
                cantidad: 1,
            }
        )
    })



    var [contador, setContador] = useState(1)
    var conta = []
    function Suma(id) {


        conta = [...articulo.filter(arti => arti._id === id)]
        console.log(conta);
        conta.map(function anonima(arti) {
            if (arti.cantidad < arti.stock) {
                arti.cantidad++
            }

        })

        setContador(conta[0].cantidad)

    }

    var conta = []
    function Resta(id) {
        ;

        conta = [...articulo.filter(arti => arti._id === id)]
        console.log(conta);
        conta.map(function anonima(arti) {
            if (arti.cantidad > 0) {
                arti.cantidad--
            }

        })

        setContador(conta[0].cantidad)

    }

    function remove(id) {
        //console.log(id);
        //console.log(productosLocalStorage)
        productosLocalStorage = productosLocalStorage.filter(idLocal => idLocal != id)
        localStorage.setItem('cart', JSON.stringify(productosLocalStorage))
        console.log(productosLocalStorage);
        props.setProductosDeLocalStorage(JSON.parse(localStorage.getItem("cart")))
        props.setReload(true)
        //console.log(props.reload);
    }


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
                            <input id='input' type="string" value={(productos.price * contador)} />
                        </div>
                    </div>
                </td>
                <td className='botonera2'>

                    <button className='restaSuma' onClick={(() => (Resta(productos._id)))}>
                        -
                    </button>
                </td>
                <td className='botonera2'>
                    {contador}
                </td>
                <td className='botonera2'>
                    <button className='restaSuma' onClick={(() => (Suma(productos._id)))} >
                        +
                    </button>
                </td>
                <td className='botonera2'>
                    <button className='restaSuma' /* onClick={(() => (remove(productos._id)))} */>
                        x
                    </button>

                </td>
            </tr>

        </tbody >
    )
}
export default Table