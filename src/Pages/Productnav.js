import React from 'react'
import '../pagecss/Productnav.css'
import menlogo from '../Images/menlogo.png'
import { IoIosCart } from "react-icons/io";
import { useNavigate,NavLink } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
import { BsPersonCircle } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import Sharebtnchild from '../components/Sharebtnchild.js'
import Bigsale from '../Images/Bigsale.png'
import Cartbag from '../Images/Cartbag.png'
import Newlogo from '../Images/Newlogo.png'
const Productnav = (props) => {

  const state= useSelector((state)=>state.handleCart)
    
  return (
    <div>

<nav className='mentoon-nav'>
        <NavLink to='/'><img src={Newlogo}  className='mentoons-logo'/></NavLink>
        <div class="container-input">
  <input type="text" placeholder="Search" name="text" class="input" />
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
</svg>
</div>

        <ul className='mentoons-links'>
        <Sharebtnchild />
           <NavLink  to='/Cart'><li>
           
           <div className="cartimg">
           <img src={Cartbag} alt="" />
           </div>
           <img src={Bigsale} alt="" />
           <div className='number'><p>{props.cartitems?.length}</p></div></li></NavLink> 
          <NavLink to='/Accedit'><li><BsPersonCircle /></li></NavLink>
        </ul>
        </nav>

    </div>
  )
}

export default Productnav