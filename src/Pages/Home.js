import React from 'react'
import Team from '../components/Team.js'
import Navbar from '../components/Navbar.js'
import Carousel from '../components/Carousel.js'
import Header from '../components/Header.js'
import Join  from '../components/Join.js'
import Workshop from '../components/Workshop.js'
import Gallery from '../components/Gallery.js'
import Namecarousel from '../components/Namecarousel.js'
import Joinourteam from '../components/Joinourteam.js'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer.js'
import Crochild from '../components/Crochild.js'
import Gototop from '../components/Gototop.js'


const Home = () => {


  return (
    
    <div>
    
   <Navbar />
   <Carousel />
   <Header />
   <Join />
   <Workshop />
   <Team />
   <Namecarousel/>
 
   <Gototop />
   {/* <Joinourteam /> */}
     <Gallery />
   <Crochild />
   <Contact />
   <Footer /> 
{/*    
      <Header />
     
      <Join />
    <Workshop />
      
      
      
      
    
    
    <Contact />
   
    <Footer /> */}
    </div>
  )
}

export default Home