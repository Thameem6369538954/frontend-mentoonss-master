import React from 'react'
import '../pagecss/ProductShowcase.css'
import { Link } from 'react-router-dom';
const ProductShowcase = ({products}) => {
    
    console.log(products);
  return (
    <div>
            <div className="productshowcase-main">
                {
                    products.map((product)=>{
                        console.log(product,"me");
                        var id =product._id;
                        console.log(id,"ideeeeeee");

                       
                        return<div>
                           <Link to={`/ProductShowcase/:${id}`} ><div className="showcase-mainbox" >
                                <div className="prod-showcase">
                                    <img src={product.image} alt="" />
                                    <h1>{product.productCategory}</h1>
                                    <p>{product.productName}</p>
                                    <button>View
</button>
                                </div>
                            </div>
                            </Link>
                            </div>
                    })
                }
            </div>
    </div>
  )
}

export default ProductShowcase