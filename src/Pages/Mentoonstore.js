import React, { useState,useEffect } from 'react'
import '../pagecss/Mentoonstore.css'
import Productnav from '../Pages/Productnav.js'
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate,NavLink } from 'react-router-dom';
import axios from '../api/Baseurl.js'

const Mentoonstore = (props) => {

  
  const [items,setItems] = useState([]);
  const [category,setCategory] = useState([])
  const [loading,setLoading] = useState(false);
  const [filter,setFilter] = useState()
  let componentMounted = true;

 



  
  const navigate = useNavigate();
  
  
  useEffect(()=>{
    const fetchProduct= async () =>{
      
      try {
        const response = await axios.get('/products')
        var categories = await axios.get('/getCategory')
        // console.log(categories,"categriesss.........");
        console.log(response,"++++++++++");
        setItems(response.data.prod)
        // console.log(items);
        setCategory(categories.data.cate)
        
      } catch (err){
        return { status: false , message:"not found product"}
      }
    }
    fetchProduct()
  },[])
  

    var getCate = async (e,key)=>{
      e.preventDefault()
      const response = await axios.get(`/getCatProduct/:${key}`)
      console.log(response,"filtering..........");
    }
 
  const Loading = () =>{
    return (
      <>
      <p className='loading'>Loading.....</p>
      </>
    )
  }

    //  const  filterProduct = (cat)=>{
    //     const updateitems =items.filter((x)=>x.category === cat) ;
    //     setFliter(updateitems)
    //  }
  
  return (
    <div>
      <Productnav cartitems={props.cartitems}/>
        <div className="main-mentoons" >
        
        </div>
      {/* <div className="setlading">
        {loading ? <Loading /> : <ShowPro />}
      </div> */}
      
      <div className="btns">
  {category.map((item) => (
    <div className="categorys-box">
      <div className="btn-box"  key={item._id}>
        <button onClick={(e)=>getCate(e,item._id)}>{item.CategoryName}</button>
      </div>
    </div>
  ))}
</div>

       
      {/* <button onClick={()=>{}}>E-Comics</button>
      <button onClick={()=>{}}>Audio-Comics</button>
      <button onClick={()=>{}}>WorkShops</button>
      <button onClick={()=>{}}>Podcast</button> */}
    {items.length > 0 ?
       <div className="show-product">
       {items.map((item)=>{
            return<div className='product-main' onClick={()=>navigate(`/Productdetails/${item._id}`)}>
              <div className="dispay-flex">
              <div className='product-box' key={item._id}>
                <div className="showcage-image">

              <img src={item.thumbnail} alt="" />
                </div>
                <div className="showcase-items">
                  
              <h2>{item.productName }<br></br></h2>
              <p>{item.productCategory}</p>
              <h1> {item.ageCategory}  Years Old</h1>
              <p className='ten-rs-offer'><MdCurrencyRupee /> <p>Rs.29</p><span>Offer 30%</span></p>
              <p><MdCurrencyRupee />{item.price}</p>
                  
              {item?.count > 0 ?   <button className="addtocart-btn">
                    Go To Cart
                  </button>:
                  <button to= {`/Productdetails/${item.id}`} className="addtocart-btn">
                Check Me Out
                </button>
                
                }
                </div>
            </div>
            </div>
            </div>
            
          })}
       </div>
       :<h2>Loading</h2>} 
         
    </div>
  )
}

export default Mentoonstore