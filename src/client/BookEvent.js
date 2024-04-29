import React from 'react';
import img1 from '../main/main_images/simg1.jpg';
import img2 from '../main/main_images/simg2.jpg';
import img3 from '../main/main_images/simg3.jpeg';
import img4 from '../main/main_images/simg4.jpg';
import img5 from '../main/main_images/simg5.jpeg';
import img6 from '../main/main_images/simg6.jpeg';
import { useNavigate } from 'react-router-dom';
import './client_css/bookevent.css';

export default function BookEvent() {
  const navigate = useNavigate();

  const showEvent = (category) => {
    navigate(`/viewallevents`, { state: { category } });
  };

  return (
    <div>
      <div align="center" style={{ color: "white", fontFamily: "cursive", paddingTop: "10px", fontSize: "25pt" }}>
        <strong>BOOK EVENT</strong>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div className='CustomCard1'>
          <div className="ImageWithNameContainer">
            <div className="CustomImageContainer">
              <img src={img1} alt='Wedding' />
            </div>
            <div className="image-name" style={{color:"white"}}>Wedding</div>
          </div>
          <div className="button-container"style={{paddingLeft:"120px",paddingTop:"20px"}}>
            <button className="CustomButton button-85" onClick={() => showEvent("Wedding")}style={{color:"black"}}>View</button>
          </div>
        </div>

        <div className='CustomCard1' style={{ marginLeft: "100px", marginRight: "100px" }}>
          <div className="ImageWithNameContainer">
            <div className="CustomImageContainer">
              <img src={img2} alt='Party' />
            </div>
            <div className="image-name" style={{color:"white"}}>Birthday Parties</div>
          </div>
          <div className="button-container"style={{paddingLeft:"120px",paddingTop:"20px"}}>
            <button className="CustomButton button-85" onClick={() => showEvent("Birthday")}style={{color:"black"}}>View</button>
          </div>
        </div>

        <div className='CustomCard1'>
          <div className="ImageWithNameContainer">
            <div className="CustomImageContainer">
              <img src={img3} alt='Racing' />
            </div>
            <div className="image-name" style={{color:"white"}}>Racing</div>
          </div>
          <div className="button-container"style={{paddingLeft:"120px",paddingTop:"20px"}}>
            <button className="CustomButton button-85" onClick={() => showEvent("Racing")}style={{color:"black"}}>View</button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='CustomCard2'>
          <div className="ImageWithNameContainer">
            <div className="CustomImageContainer">
              <img src={img5} alt='Summit' />
            </div>
            <div className="image-name" style={{color:"white"}}>Summit</div>
          </div>
          <div className="button-container"style={{paddingLeft:"120px",paddingTop:"20px"}}>
            <button className="CustomButton button-85" onClick={() => showEvent("Summit")}style={{color:"black"}}>View</button>
          </div>
        </div>

        <div className='CustomCard2' style={{ marginLeft: "100px", marginRight: "100px" }}>
          <div className="ImageWithNameContainer">
            <div className="CustomImageContainer">
              <img src={img4} alt='Tech' />
            </div>
            <div className="image-name"style={{color:"white"}}>Tech</div>
          </div>
          <div className="button-container"style={{paddingLeft:"120px",paddingTop:"20px"}}>
            <button className="CustomButton button-85" onClick={() => showEvent("Technical")}style={{color:"black"}}>View</button>
          </div>
        </div>

        <div className='CustomCard2'>
          <div className="ImageWithNameContainer">
            <div className="CustomImageContainer">
              <img src={img6} alt='Social' />
            </div>
            <div className="image-name" style={{color:"white"}}>Social</div>
          </div>
          <div className="button-container" style={{paddingLeft:"120px",paddingTop:"20px"}}>
            <button className="CustomButton button-85" onClick={() => showEvent("Social")} style={{color:"black"}}>View</button>
          </div>
        </div>
      </div>
    </div>
  )
}
