import React, {useEffect, useState} from 'react';
import '../../styles/detalleProducto.css';
import {connect} from 'react-redux';
import {searchProductById} from '../../redux/productos/productos'
import { Link, useParams } from 'react-router-dom';
import cartAction from '../../redux/actions/cartAction';




function DetalleProducto(props) {

  // TO_DO__crashea con F5

  const {id} = useParams()
  const productId = id
  console.log(productId)
  const [reload, setReload] = useState(false)
  
  
  useEffect(() => {
    
    searchProductById(productId).then(res=>console.log(res))
    
  }, [])
  
  
  console.log(props)




  async function addCart (event){

    props.addToCart(event.target.id)


  }

  console.log(props)

 

  return (
    <div className='contenedorDetalleProducto'>
        <div className="detalleProductoIzquierda">
        <div className='detalleProductoCarrito'>
            <input type='number' defaultValue='1'></input>
            <button id={productId} onClick={addCart}>Añadir al carrito</button>
          </div>
        
        </div>
    </div>
  )
}

 const mapDispatchToProps = {
   addToCart: cartAction.addToCart,
 }
 const mapStateToProps = (state) => {
   return {
    cart: state.cartReducer.cart,
    productId: state.productosMain.productId,
    

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(DetalleProducto)

