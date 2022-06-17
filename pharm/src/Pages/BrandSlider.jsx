import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { Component } from "react";
import Slider from "react-slick";
import Styles from "./BrandSlider.module.css"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div  style={{width:"80%", marginLeft:"150px"}}>
          <div><h2>Featured Brands</h2></div>
    
          <Slider {...settings}>
            <div className={Styles.volini}>
                <img src="https://cms-contents.pharmeasy.in/carousel_item/e8c11c3d8e1-Wellman_Dweb.jpg?dim=146x0&dpr=1.25&q=100" alt='pic1'/>
              
            </div>
            <div>
                <img src="https://cms-contents.pharmeasy.in/carousel_item/fd17e547883-Horlicks_web.jpg?dim=146x0&dpr=1.25&q=100" alt="pic2"/>
        
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/a2ec4d896ba-Web_Featured-Vicks.jpg?dim=146x0&dpr=1.25&q=100" alt="pic3"/>
        
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1.25&q=100" style={{width:"146px",height:"212px"}} alt="pic4"/>
    
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/bf633425db6-web_johnson.jpg?dim=146x0&dpr=1.25&q=100" alt="pic5"/>
              
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/ddc1db3d34a-Featured-banner_web_Zandu.jpg?dim=146x0&dpr=1.25&q=100" alt="pic6"/>
        
            </div>
            <div>
                <img src="https://cms-contents.pharmeasy.in/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1.25&q=100" alt="pic7"/>
            </div>
            <div>
                <img src="https://cms-contents.pharmeasy.in/carousel_item/ac01791d842-Featured-banner_Volini.png?dim=146x0&dpr=1.25&q=100" alt="pic8"/>
            </div>
          </Slider>
        </div>
      );
    }
  }
