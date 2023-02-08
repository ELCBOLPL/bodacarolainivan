import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import styled from 'styled-components'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);


  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  if(!Array.isArray(slides) || slides.length <= 0){
  return null;
  }

  return (
    <div>
            <Section>
                <LeftArrow >
                    <FaArrowAltCircleLeft onClick={prevSlide}/>
                </LeftArrow>
                {SliderData.map((slide, index) => {
                    return(
                        <img style={{width: "400px", height: "600px", borderRadius: "10px"}} src={slide.image} alt="image" />
                    )
                })}
                <RightArrow >
                    <FaArrowAltCircleRight onClick={nextSlide}/>
                </RightArrow>
            </Section>
            
        </div>
  )
}

const Section = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: white;
    z-index: 10;
    cursor: pointer;
    user-select: none;

`
const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: white;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`
const Image = styled.div`
    display: inline-block;
    width: 100px;
    height: 400px;
    border-radius: 10px;
`

export default ImageSlider