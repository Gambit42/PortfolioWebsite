import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-image: url("./images/svgBackground.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Background = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
