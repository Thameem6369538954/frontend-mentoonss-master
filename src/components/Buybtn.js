import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Buybtn = () => {
  const [product, setProduct] = useState({
    name: "Comics",
    price: 20 * 100,
    productBy: "Mentoons",
  });
  const makePayment =(token)=>{
        const body ={
            token,
            product
        }
        const header ={
            "Content-type" :"application/json"
        }
        return fetch("http://localhost:5001/payment",{
            method:"POST",
            header,
            body:JSON.stringify(body)
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
  }
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51OdsRhSEmPJtLOkWHnYHe11vfNnrquG18gVP4un7nNnPSFPNOX4f4XzdnBYjxfRCuD1OqBD9nMM8sLMtbykf5YOv00lOfBkzKs"
        name="Mentoons Store"
        amount={product.price}
        currency="INR"
        token={makePayment}
      >
        <button style={{backgroundColor:"royalblue", color:"white",padding:"10px", borderRadius:"10px"}}>Buy Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Buybtn;
