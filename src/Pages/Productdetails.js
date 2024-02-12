import React, { useEffect, useState } from 'react'
import { useParams,NavLink, json } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addCart } from '../redux/action/action/index.js'
import Lottie from 'lottie-react'
import Productani from '../animation/Productani.json'
import '../pagecss/Productdetail.css'
import { MdCurrencyRupee } from "react-icons/md";
import Productnav from './Productnav.js'
import axios from '../api/Baseurl.js'
import { object } from 'yup'
import Cart from './Cart.js'


const Productdetails = ({cartitems,addtoCart}) => {
  

  // const dispatch = useDispatch();
  // const addProduct =(product) =>{
  //   dispatch(addCart(product));
  // }
  
  const [product,setProduct] = useState([]);

  const [side,setSide]=useState(false);
  
  const [loding,setLoading] = useState(false);

  const {id} = useParams();
  console.log(id,"999999999999999999999999999999");
  useEffect(()=>{
    const fetchProduct= async (id) =>{

       try {
          const response = await axios.get(`/prodView/${id}`)
          console.log(response,"....----.......>");
          setProduct(response.data.data.result)
          console.log(response);
       } catch (err){
         return { status: false , message:"not found product"}
       }
    }
    fetchProduct(id)

  },[])

  

  !Object.keys(product).length > 0 && <div>ppp</div>
  const ShowProduct = () =>{
    return(
      <>
    
 <div className="product-main-box" >
      <div className='detile-image'key={{id}}>
          <img src={product.thumbnail} alt="" />
      
      </div>
      <div className="product-detile">
      <h2>{product?.productName}</h2>
      <br></br>
      <h3>{product.ageCategory}   Years Old</h3>
      <p></p>
      <p className='pd'><MdCurrencyRupee className='rs-icon'/>{product.price}</p>
      <p>{product.productDescription}</p>
 <button className='buy-btn'>Buy Right Away!</button>
<button className='Add-btn' onClick={()=>addtoCart(product)}>Add To Cart</button>
      </div>  
      </div>

      
      </>
    )
  }
console.log(cartitems,"dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  return (
    <div>
        <Productnav  cartitems={cartitems} />
      <div className='cart-container'>
     <ShowProduct />
     {side && <Cart product={cartitems} />}
      </div>
    </div>
  )
}

export default Productdetails