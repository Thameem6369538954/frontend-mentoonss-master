import React,{useState} from 'react'
import menlogo from '../Images/menlogo.png'
import nav from '../css/nav.css'
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useNavigate } from 'react-router-dom'
import Logbtn from './Logbtn';
import { NavLink } from "react-router-dom";
const Navbar = () => {

     const [open,setopen]= useState(false);

     const handleClick = () => setopen(!open);
     const closeMenu = () => setopen(true)

  return (
    <div>
        <nav>
        <img src={menlogo}  className='logo-for-mob'/>
          <ul className={ open ? 'nav-links ' : 'nav-links active'}>
        <li onClick={closeMenu}><Link 
           to="hero"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Home
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="about"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            About
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="workshop"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            WorkShop
           </Link> </li>
           <li onClick={closeMenu}><Link 
           to="team"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Team
           </Link> </li>  
        {/* <li onClick={closeMenu}><Link 
           to="gallery"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Gallery
           </Link> </li>  */}
           <img src={menlogo}  className='logo'/>
        <li onClick={closeMenu}><Link 
           to="join"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
           Join Us
           
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="contact"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={-500}
           duration={1200}>
           Contact </Link> </li> 
           <NavLink to='/Shopping'>
            <li onClick={closeMenu}>
            Mentoons Store </li> 
       
            </NavLink>  
            <NavLink to='Signup'>
            <li onClick={closeMenu}>
        Sign up</li> 
               </NavLink> 
           
          </ul>
        
          <div onClick={handleClick} className="icons">
            {
              open ?   <TfiClose /> : <CiMenuFries /> 
            }
       
          

          </div>
          
        </nav>
    </div>
  )
}

export default Navbar