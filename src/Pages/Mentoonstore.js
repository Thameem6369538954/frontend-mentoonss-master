import React, { useState,useEffect } from 'react'
import '../pagecss/Mentoonstore.css'
import Productnav from '../Pages/Productnav.js'
import ProductShowcase from '../Pages/ProductShowcase.js'
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate,NavLink } from 'react-router-dom';
import axios from '../api/Baseurl.js'

const Mentoonstore = () => {

  
const [products,setProducts] = useState();

  
  useEffect(()=>{
    const fetchProduct= async () =>{
      
      try {
        const response = await axios.get('/products')
        setProducts(response.data.prod)
        
      } catch (err){
        return { status: false , message:"not found product"}
      }
    }
    fetchProduct()
  },[])
  console.log(products);
  // useEffect(()=>{
  //   const fetchProducts = async () =>{
  //  const response = await   fetch('https://fakestoreapi.com/products')
  //        const data = await response.json()
  //       //  console.log(products);
  //        setProducts(data)
  //   }
  //   fetchProducts()
  // },[])
  
  
  return (
    <div>
      <Productnav />
      {products?.length > 0 ? <ProductShowcase products={products} />:<div>Loading.........</div>}
    

      </div>


  )
}

export default Mentoonstore