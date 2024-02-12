import React from "react";
import "../pagecss/Showcase.css";
import Fade from '../Images/Fade.jpg'
import Wisely from '../Images/Wisely.jpg'
import Gaming from '../Images/Gaming.jpg'
import { NavLink } from "react-router-dom";
const Showcase = () => {
  return (
    <div className="showcase-main">
      <h1>Take a look at our new comics</h1>
     <div className="hole-showcase">
      <div className="showcase-box">
      <div className="box">
          <img src={Fade} alt="" />
          <div className="price-details">
            <h3>Don't Fade Away</h3>
            <p>13-19</p>
            <div className="ofr">
              <h6>Rs:29</h6>
              <p>Offer 30%</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="box">
          <img src={Fade} alt="" />
          <div className="price-details">
            <h3>Don't Fade Away</h3>
            <p>13-19</p>
            <div className="ofr">
              <h6>Rs:29</h6>
              <p>Offer 30%</p>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={Fade} alt="" />
          <div className="price-details">
            <h3>Don't Fade Away</h3>
            <p>13-19</p>
            <div className="ofr">
              <h6>Rs:29</h6>
              <p>Offer 30%</p>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={Fade} alt="" />
          <div className="price-details">
            <h3>Don't Fade Away</h3>
            <p>13-19</p>
            <div className="ofr">
              <h6>Rs:29</h6>
              <p>Offer 30%</p>
            </div>
          </div>
        </div>
        <div className="box-4">
          <img src="" alt="" />
          <div className="price-details"></div>
        </div>
      </div>

      <div className="showcase-side-line">

      </div>

      <div className="add">
        <h4>OUR PRODUCT</h4>
        <div className="add-box">
        <div className="box-a">
          <img src={Fade} alt="" />
          <div className="price-details">
            <h3>Don't Fade Away</h3>
            <p>13-19</p>
            <div className="ofr">
              <h6>Rs:29</h6>
              <p>Offer 30%</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="box-a">
          <img src={Fade} alt="" />
          <div className="price-details">
            <h3>Don't Fade Away</h3>
            <p>13-19</p>
            <div className="ofr">
              <h6>Rs:29</h6>
              <p>Offer 30%</p>
            </div>
          </div>
        </div>
        </div>
      </div>
     

      </div>
    </div>
  );
};

export default Showcase;

