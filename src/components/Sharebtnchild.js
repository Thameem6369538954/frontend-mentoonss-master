import React,{useState} from 'react'
import '../css/Sharebtn.css'
import { IoShareSocialSharp } from "react-icons/io5";
import Whapp from '../Images/Whapp.png'
import Insta from '../Images/Insta.png'
import chat  from '../Images/chat.png'
import Telegram from '../Images/Telegram.png'
const Sharebtnchild = () => {
    const [toggle,setToggle] = useState(false)
     const toggleModel = () =>{
        setToggle(!toggle)
     }
  return (
    <div>
        <IoShareSocialSharp onClick={toggleModel} className='share'/>

                {toggle && (
            <div className="share-box" onClick={toggleModel}>
                <h1> hi vanakkam and welcome</h1>
                <div className="share-images">
                    <div className="images-txt">
                        <img src={Whapp} alt="" />
                    </div>
                    <div className="images-txt">
                        <img src={Whapp} alt="" />
                    </div>
                    <div className="images-txt">
                        <img src={Whapp} alt="" />
                    </div>
                    <div className="images-txt">
                        <img src={Whapp} alt="" />
                    </div>
                </div>
                <button
                onClick={toggleModel}>Close</button>
            </div>

                )}


    </div>
  )
}

export default Sharebtnchild