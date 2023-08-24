import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { DiAndroid,DiApple } from "react-icons/di";
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
            disc={`As a web developer, I specialize in creating dynamic and responsive websites that cater to modern user expectations. My expertise includes crafting user-friendly interfaces and implementing seamless navigation for optimal user experiences. By utilizing the latest web technologies, I bring creative visions to life and deliver websites that effectively communicate my clients' messages to their target audiences.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiCodesandbox}
            title={"Backend Developer"}
            disc={`As a backend developer, I focus on building the foundation of web applications, ensuring they run smoothly and securely behind the scenes. I design and develop server-side logic, databases, APIs, and integrations, working to optimize performance and enhance data management. With a strong understanding of server technologies, I empower applications to handle complex tasks and deliver efficient and reliable functionality to users.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={DiAndroid}
            title={"Android Applications"}
            disc={`Crafting intuitive and user-focused Android applications is my passion. I harness the power of the Android platform to create applications that provide seamless experiences across various devices. From elegant UI design to efficient coding practices, I ensure that the apps I build are not only visually appealing but also deliver robust functionality and exceptional performance to meet the demands of today's mobile users.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={DiApple}
            title={"IOS Applications"}
            disc={`With a keen eye for detail and a commitment to excellence, I specialize in developing iOS applications that are both elegant and functional. Leveraging the capabilities of Apple's ecosystem, I create applications that provide a delightful user experience on iOS devices. From design to implementation, I work diligently to ensure that each app I develop aligns with the high standards set by Apple and resonates with users on the iOS platform.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
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
