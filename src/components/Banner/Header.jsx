import React, { useState } from 'react'
import styled from 'styled-components';


const Header = () => {
    const [bar, setBar] = useState(false);
  return (
    <Container bar={bar}>
        <Nav bar={bar}>
        <span>
                    <a href="#home" onClick={() => setBar(!bar)}>
                        Home
                    </a>
                </span>
                <span>
                    <a href="#service" onClick={() => setBar(!bar)}>
                        Services
                    </a>
                </span>
                <span>
                    <a href="#project" onClick={() => setBar(!bar)}>
                        Projects
                    </a>
                </span>
                <span>
                    <a href="#footer" onClick={() => setBar(!bar)}>
                        Contact Me
                    </a>
                </span>
        </Nav>
        <div
        onClick={() => setBar(!bar)}
        className="bars">
            <div className="bar"></div>
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: right;
    justify-content: flex-end;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`

const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : "0"}; // Update the height property here
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        color:#01be96;
        a{
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #DE650C;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
                
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
                
            }
            :hover{
                opacity: 0.7;
                color:#DE650C;
            }
        }
    }
`