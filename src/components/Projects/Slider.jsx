import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
let data = [
  {
    img : "https://res.cloudinary.com/dau39qnjp/image/upload/v1697293392/portfolio/giityatutdef5y6utbtn.png",
    disc : "LMS project using Next JS, Tailwind CSS, Node JS and Sequelize as final project in my deploma"
  },
  {
    img : "https://res.cloudinary.com/dau39qnjp/image/upload/v1695223568/portfolio/frontend_mentor_profile_card_uca7fu.png",
    disc : "A profile card page challenge from Frontend Mentor website"
  },
  {
    img : "https://res.cloudinary.com/dau39qnjp/image/upload/v1695223554/portfolio/frontend_mentore_product_k8bldh.png",
    disc : "A product card page challenge from Frontend Mentor website"
  },
  {
    img : "https://res.cloudinary.com/dau39qnjp/image/upload/v1695223568/portfolio/frontend_mentor_room_spctty.png",
    disc : "A room homepage challenge from Frontend Mentor website"
  },
  {
      img : "https://res.cloudinary.com/dau39qnjp/image/upload/v1695223569/portfolio/broccar_img_ylxp42.png",
      disc : "A furnitures store homepage."
  },
  {
      img : "https://res.cloudinary.com/dau39qnjp/image/upload/v1695223567/portfolio/control_panel_ok3jdg.png",
      disc : "A fullstack project of LMS that I have worked in a team as a project while learning in ASAC"
  },
{
    img : "https://res.cloudinary.com/dau39qnjp/image/upload/v1695223554/portfolio/login_dgbshj.png",
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