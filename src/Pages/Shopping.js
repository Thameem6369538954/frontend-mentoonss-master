import React from 'react'
import '../pagecss/Shopping.css'
import youtube from '../Images/youtube.jpg'
import Teamvideo from '../videos/Teamvideo.mp4'
import Showcase from './Showcase'
import { NavLink } from 'react-router-dom'
import Productnav from '../Pages/Productnav.js'
import Proper from '../Images/Proper.png'
import Specialoffer from '../Images/Specialoffer.png'

const Shopping = () => {

  return (
   <div>
        <Productnav />
        <br></br>
        <div className="shopping-cate">
            <h1>Categories</h1>
           <NavLink to='/Mentoonstore'><ul className='shopping-ul'>
                <li>E-comics</li>
                <li>Audio Comics</li>
                <li>Podcast</li>
                 
            </ul>
            </NavLink>
        </div>
        <div className="shopping-heading-box">
            <div className="left-side-sho-box">
                    <div className="left-shopping-box-text">
                        <h1>Introducing Mentoons Store</h1>
                        <video className='Shopping-video'width={'600px'} autoPlay={false} controls={true}>
                <source src={Teamvideo} type='video/mp4' />
              </video>
              <p>Our Stores teach Key Life Lessons </p>
                    </div>
            </div>
            <div className="right-side-sho-box">
                <img src={Specialoffer} alt="" />
                <img src={Proper} alt="" />
            </div>
        </div>
        <Showcase />
   </div>
  )
}

export default Shopping