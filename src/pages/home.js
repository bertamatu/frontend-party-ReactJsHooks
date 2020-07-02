import React from "react";
import BackgroundImage from "../assets/images/surfing_wave.jpg";
import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  @media (min-width: 768px) {
    background-position: right;
  }
`;

const Home = () => {
  return <Container></Container>;
};

export default Home;
