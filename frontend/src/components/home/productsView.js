import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/cardsView.css'
import ProductCard from '../cards/productCard'
import './cssMain/main.css'
import {getAllProducts} from '../../redux/productos/productos'
function ProductsView() {
  const products = useSelector(state => state.productosMain.products)
  const usuario = useSelector(state => state.usersMain.usuario)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  //
  return (
    <main>
      
      {products.map(oneProducts=>{
        return(
          
          <ProductCard key={oneProducts._id} product={oneProducts}/> 
        )
      })}
            
    </main>
  )
}

export default ProductsView