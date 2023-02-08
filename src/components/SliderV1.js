import React from 'react'
import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png' 
import img3 from '../assets/image3.png'
import "./Slide.css"
// import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'



const SliderV1 = () => {
   
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

  return (
    
    <div className="">
    
    <Carousel
      autoPlay
      infiniteLoop
      swipeable={true}
      showArrows={true}
      emulateTouch={true}
      animateIn="fadeIn"
      axis="horizontal"
      centerSlidePercentage
      dynamicHeight={true}
      
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, color: "red" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {"cust " + index}
          </span>
        );
      }}
    >
      <div key="slide1" >
        <img src={img1} />
      </div>
      <div key="slide1">
        <img src={img2} />
      </div>
      <div key="slide1">
        <img src={img3} />
      </div>
    </Carousel>
    </div>
);
    }


export default SliderV1;