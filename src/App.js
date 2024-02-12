import React,{useState,useEffect}   from 'react';
import Home from './Pages/Home.js';
import './App.css';
import Signin from './Pages/Signin.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Lottie from 'lottie-react';
import loding from '../src/animation/loding.json'
import Jobapply from './components/Jobapply.js'
import Signup from './Pages/Signup.js'
import Error from './components/Error.js';
import Logbtn from './components/Logbtn.js';
import WorkShopmain from './components/WorkShopmain.js'
import Shopping from './Pages/Shopping.js';
import Admintpanal from './Pages/Admintpanal.js'
import Mentoonstore from './Pages/Mentoonstore.js';
import Productdetails from './Pages/Productdetails.js'
import Cart from './Pages/Cart.js'
import Additems from './Pages/Additems.js'
import Product from './Pages/Product.js'
import Checkout from './Pages/Checkout.js'
import Payment from './Pages/Payment.js'
import Accedit from './components/Accedit.js'
import Buybtn from './components/Buybtn.js';
function App() {

  const [cartitems,setCartitems] = useState([]);


  const addtoCart = (product) =>{
    const existingitems = JSON.parse(localStorage.getItem("cartitems"))??[]
    existingitems.push(product)
    localStorage.setItem("cartitems",JSON.stringify(existingitems))
    setCartitems(existingitems)
    console.log({product,existingitems},);
  }

  const deleteItem = (id) =>{
    const existingitems = JSON.parse(localStorage.getItem("cartitems"))??[]
    const updatedItem = existingitems.filter(item=>item._id!=id)
    localStorage.setItem("cartitems",JSON.stringify(updatedItem))
    setCartitems(updatedItem)
    console.log({existingitems,updatedItem},"rgggggggggggggggrg");
  }

  useEffect(()=>{
    const items =JSON.parse(localStorage.getItem("cartitems"))??[]
    setCartitems(items)
  },[]) 

const [ loading , setloading] = useState (false)

useEffect(()=>{
  setloading(true)
  setTimeout(() => {
    setloading(false)
  }, 5000);
},[])


  return (

    
  
       
      <div >
        {
          loading ? <Lottie animationData={loding} className='loding'/>:
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ProductShowcase/:id' element={<Product />} />
            <Route path='/Mentoonstore' element={<Mentoonstore cartitems={cartitems} />} />
            <Route path='/Admintpanal' element={<Admintpanal />} />
            <Route path='/Shopping' element={<Shopping />} />
            <Route path='/WorkShopmain' element={<WorkShopmain />} />
            <Route path='*' element={<Error />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Checkout' element={<Checkout product={cartitems} deleteItem={deleteItem}/>} />
            <Route path='/Jobapply' element={<Jobapply />} />
            <Route path='/Logbtn' element={<Logbtn />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Logbtn' element={<Logbtn />} />
            <Route path='/Cart' element={<Cart product={cartitems} deleteItem={deleteItem} />} />
            <Route path='/Additems' element={<Additems />} />
            <Route path='/Productdetails/:id' element={<Productdetails  cartitems={cartitems} addtoCart={addtoCart}/>} />
            <Route  path='/Payment'  element={<Payment />} />
            <Route  path='/Accedit'  element={<Accedit />} />
            <Route  path='/Buybtn'  element={<Buybtn />} />
  
          </Routes>
          </BrowserRouter>
       
        }
      </div>
    
  );
}

export default App;


