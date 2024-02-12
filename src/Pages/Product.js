import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/Baseurl.js';
const Product = () => {
    const id = useParams();
    
    const [product,setProduct] = useState();
    useEffect(()=>{
        const fetchProduct= async () =>{
      
            try {
              const response = await axios.get(`/prodView/:${id}`)
              console.log(response,"responseeeeeeeee");
              setProduct(response.data.prod)
              
            } catch (err){
              return { status: false , message:"not found product"}
            }
          }
          fetchProduct()
    },[])
    console.log(product,"YTYTYTYTYTYYTYTYTYYTYYTYTYTYTYTYTYTY");
   
      // If product is an empty object, display "Product Not Found"
      if (!product) return <div>Loading..................</div>;


  return (
    <div>
      
            <div className="product-main" key={id}>
                <img src={product.image} alt="" />
                <h1>{product.category}</h1>
                <p>{product.category}</p>
            </div>
    </div>
  )
}

export default Product