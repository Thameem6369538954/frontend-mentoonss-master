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

function App() {
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
            <Route path='/Mentoonstore' element={<Mentoonstore />} />
            <Route path='/Admintpanal' element={<Admintpanal />} />
            <Route path='/Shopping' element={<Shopping />} />
            <Route path='/WorkShopmain' element={<WorkShopmain />} />
            <Route path='*' element={<Error />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Jobapply' element={<Jobapply />} />
            <Route path='/Logbtn' element={<Logbtn />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Logbtn' element={<Logbtn />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Additems' element={<Additems />} />
            {/* <Route path='/Productdetails/:id' element={<Productdetails/>} /> */}
            
          </Routes>
          </BrowserRouter>
       
        }
      </div>
    
  );
}

export default App;


