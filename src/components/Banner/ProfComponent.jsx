import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import ghyath from '../../assets/ghyath.jpeg'
import CV from '../../assets/MHD-KEATH-2023-AUG.pdf'


const ProfComponent = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.setAttribute('download', CV);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container id="home">
      <Slide direction="left">
        <Profile>
          <img
            src={ghyath}
            alt="profile"
          />
        </Profile>
      </Slide>
      <Slide direction="right">
        <Texts>
          <h4>
            Hello <span className="green">I am</span>
          </h4>
          <h1 className="green">MHD KEATH ZAYTOWNA</h1>
          <h3>Full stack JS developer</h3>
         
          <p>
          Highly motivated and skilled JavaScript developer, I have valuable knowledge in both front-end and 
          back-end technologies, allowing me to create dynamic and user-friendly web applications.
          </p>
          <button onClick={handleDownload} >Download My CV</button>
          <Social>
            {/* <p>Check out my</p> */}
            <div className="social-icons" >
              <span>
                <a target='_blank' rel="noreferrer" href="https://github.com/Mohammad-Keath">
                  <AiOutlineGithub />
                </a>
              </span>
            
              <span>
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/mhd-keath-zaytowna/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 6rem;
  padding-top: 12rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    position: fixed;
    bottom:0;
    right:0;
    display: flex;
    
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2.3rem;
      // border:2px solid gray;
      background-color: #191923;
      position: relative;
      transition: transform 400ms ease-in-out;
      border-radius: 10%;
      :hover {
        background-color:#DE650C;
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 20rem;
    border-radius: 30%;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
