import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
let data = [
  {
    img : "https://res-console.cloudinary.com/dau39qnjp/thumbnails/v1/image/upload/v1695223568/cG9ydGZvbGlvL2Zyb250ZW5kX21lbnRvcl9wcm9maWxlX2NhcmRfdWNhN2Z1/preview",
    disc : "A profile card page challenge from Frontend Mentor website"
  },
  {
    img : "https://res-console.cloudinary.com/dau39qnjp/thumbnails/v1/image/upload/v1695223554/cG9ydGZvbGlvL2Zyb250ZW5kX21lbnRvcmVfcHJvZHVjdF9rOGJsZGg=/preview",
    disc : "A product card page challenge from Frontend Mentor website"
  },
  {
    img : "https://res-console.cloudinary.com/dau39qnjp/thumbnails/v1/image/upload/v1695223568/cG9ydGZvbGlvL2Zyb250ZW5kX21lbnRvcl9yb29tX3NwY3R0eQ==/preview",
    disc : "A room homepage challenge from Frontend Mentor website"
  },
  {
      img : "https://res-console.cloudinary.com/dau39qnjp/thumbnails/v1/image/upload/v1695223569/cG9ydGZvbGlvL2Jyb2NjYXJfaW1nX3lseHA0Mg==/preview",
      disc : "A furnitures store homepage."
  },
  {
      img : "https://res-console.cloudinary.com/dau39qnjp/thumbnails/v1/image/upload/v1695223553/cG9ydGZvbGlvL1VudGl0bGVkMl90cmM3aTU=/preview",
      disc : "A fullstack project of LMS that I have worked in a team as a project while learning in ASAC"
  },
{
    img : "https://res-console.cloudinary.com/dau39qnjp/thumbnails/v1/image/upload/v1695223554/cG9ydGZvbGlvL2xvZ2luX2RnYnNoag==/preview",
    disc : "Login page of a fullstack project of LMS that I have worked in a team as a project while learning in ASAC"
}
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`