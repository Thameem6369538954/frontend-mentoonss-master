import React, { useState } from 'react'
import '../css/Cart.css'
import {NavLink} from 'react-router-dom';
import Lottie from 'lottie-react';
import Sorry from '../animation/Sorry.json'
const Cart = ({product,deleteItem}) => {
  console.log(product);

  const amount = product.reduce((c,a)=>parseInt(a.price)+c,0)
  console.log({amount});

  return (
    <div >
      
      
      { product?.length?  <div className="main-cart">
      <div className="headings">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Category</h1>
        <h1>Remove</h1>

      </div>
      {product.map((item)=>{
        return<div className='cart-list'>
          
          <div className="th">
          <img src={item.thumbnail} width={100} alt="" />

          </div>
          <p>Price : {item.price}</p>
          <h1>{item.productCategory}</h1>
          <button onClick={()=>deleteItem(item._id)}>Delete</button>
          </div>
      })}
      <p className='total'>Total Price :   {amount}</p>
      <NavLink to='/Checkout'><button className='check-btn' >Checkout</button></NavLink>
      </div>:<div> <Lottie animationData={Sorry} loop={true} className='sry' /> <p className='noitems'> No items in cart</p> </div>
    }
      </div>
  )
}

export default Cart