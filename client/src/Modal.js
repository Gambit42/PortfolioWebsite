import React from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

const StyledOverlay = styled.div`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = ({ children, isModalOpen }) => {
  if (!isModalOpen) {
    return null;
  }
  return createPortal(
    <>
      <StyledOverlay />
      <>{children}</>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
