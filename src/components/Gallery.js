import React from 'react'
import bord from '../Images/bord.png'
import '../css/gallery.css'
import Lottie from 'lottie-react'
import gallery from '../animation/gallery.json'

const Gallery = () => {
  const data =[
    
    {
      id:1,
      img:'https://mentoons.com/img/gallery1.jpg',
      catrgory:'events',
    },
    {
      id:2,
      img:'https://mentoons.com/img/gallery2.jpg',
      catrgory:'ofclife',
    },
    {
      id:3,
      img:'https://mentoons.com/img/gallery3.jpg',
      catrgory:'ofclife',
    },
    {
      id:4,
      img:'https://mentoons.com/img/gallery4.jpg',
      catrgory:'ofclife',
    },
    {
      id:5,
      img:'https://mentoons.com/img/gallery6.jpg',
      catrgory:'ofclife',
    },
    {
      id:6,
      img:'https://mentoons.com/img/gallery5.jpg',
      catrgory:'events',
    },
  ];
  return (
    <div className='image-gallery'>
      <Lottie animationData={gallery} className='glry-anime' />
        <div className="gallery-pic"  data-aos="zoom-in-down"
        data-aos-duration="1000">
    
    <img src={bord} id='gallery'
    />
   
    <p>OUR GALLERY</p>
  </div>

      <div>
        <div className='gallery-photos'> 
          {
            data.map((value)=>{
              return(
                <img src={value.img} alt="" />
              )
            })
          }
        </div>
      </div>
      <div>
        
      </div>
  
    </div>
  )
}

export default Gallery