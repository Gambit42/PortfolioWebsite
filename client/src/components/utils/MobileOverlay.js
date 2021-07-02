import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  position: fixed;
  background: #111;
  opacity: 0.8;
  transition: transform 0.5s ease-in;
  display: block;
`;

const MobileOverlay = () => {
  return <StyledDiv />;
};

export default MobileOverlay;
