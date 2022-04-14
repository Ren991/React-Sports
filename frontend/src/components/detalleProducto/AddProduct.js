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
        setStock(props.stock)
    },[])
    
         
    console.log(props.stock)
    const scremProduc= (oneProduc)=>{
       
            dispatch(addOneProduc(oneProduc))
            setStock(stock -1)
            
        
    }
    
    return ( <button onClick={()=>scremProduc(addProduct)} >
        Add to cart
      </button> );
}
 
export default AddProduct;