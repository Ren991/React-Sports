//cada componente con su logica!!!!!
//iportaciones externas
import React, { useEffect, useState } from 'react';
//iportaciones internas
//importacion redux
import { useDispatch, useSelector } from "react-redux";
import {addOneProduc} from '../../redux/carrito/carrito'
//Componente
const AddProduct = (props) => {
    const products = useSelector(state => state.productosMain.products)
    const [addProduct, setAddProduct] = useState({})
    const [stock, setStock] = useState()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setAddProduct(products?.find(unProduct =>unProduct._id === props.id))
       /*  setStock(props.stock) */
    },[])
   
    
    const scremProduc= (oneProduc)=>{
            
            dispatch(addOneProduc(oneProduc._id))
             
    }
    return ( <button onClick={()=>scremProduc(addProduct)} >
        Add to cart
      </button> );
}
 
export default AddProduct;