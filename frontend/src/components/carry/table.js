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
} */

   /*  var conta = []
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

    } */
    /* 
        function remove(id) {
            //console.log(id);
            //console.log(productosLocalStorage)
            productosLocalStorage = productosLocalStorage.filter(idLocal => idLocal != id)
            localStorage.setItem('cart', JSON.stringify(productosLocalStorage))
            console.log(productosLocalStorage);
            props.setProductosDeLocalStorage(JSON.parse(localStorage.getItem("cart")))
            props.setReload(true)
            //console.log(props.reload);
        } */


    return (
        <>
       
        {/* <tbody> */}
            <h2>Empiece su compra</h2>
        {/* </tbody>  */}
    
   </>
    )
}