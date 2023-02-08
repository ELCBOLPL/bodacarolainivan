import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png' 
import img3 from '../assets/image3.png'
import "./Slide.css"
import {FaArrowCircleLeft,FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'



const SliderV1 = () => {
  return (
    <Carousel showArrows="true" emulateTouch={true} className="main-slide "
    axis="horizontal"
  showStatus={false}
  renderArrowPrev={(clickHandler, hasPrev) => {
    return (
      <div
        className={`${
          hasPrev ? "absolute" : "hidden"
        } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
        onClick={clickHandler}
      >
        <FaArrowAltCircleLeft/>
      </div>
    );
  }}
        
    renderArrowNext={(clickHandler, hasNext) => {
    return (
      <div
        className={`${
          hasNext ? "absolute" : "hidden"
        } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
        onClick={clickHandler}
      >
        <FaArrowAltCircleRight/>
      </div>
    );
  }}
>
        
    <div>
        <img src={img1} height="300px" width="200px" />
    </div>
    <div>
        <img src={img2} height="300px" width="200px"/>
    </div>
    <div>
        <img src={img3} height="300px" width="200px" />
    </div>
    
</Carousel>
  )
}

export default SliderV1