import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { DiAndroid } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Web Developer"}
            disc={`as a web developer, I work with HTML, CSS, Tailwind CSS, JavaScript, Python, Next JS, React JS, React Hooks, Redux, Socket.io, Git, GitHub, and Jest`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiCodesandbox}
            title={"Backend Developer"}
            disc={`As a backend developer, I work with JavaScript, Node JS, PostgerSQL, Express, Jest, API, Authorization, Authentication, Linked List, Stack, Queues, Tree, Qraph and Hashmap`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={DiAndroid}
            title={"Applications Developer"}
            disc={`As am application developer, I work with react native to build applications for both OS (android and ios)`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"Web designer"}
            disc={`As a web deigner, I work with figma, adobe color`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 70%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
