import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled, { css } from "styled-components";

const StyledAnchor = styled.a`
  opacity: 0;

  ${({ activeBtn }) =>
    activeBtn &&
    css`
      opacity: 1;
    `}
`;

const FooterBtn = () => {
  const [footerBtnState, setfooterBtnState] = useState(false);
  const handleFooterBtnState = () => {
    if (window.scrollY >= (document.body.scrollHeight / 100) * 70) {
      setfooterBtnState(true);
    } else {
      setfooterBtnState(false);
    }
  };

  window.addEventListener("scroll", handleFooterBtnState);

  return (
    <StyledAnchor
      href="#"
      activeBtn={footerBtnState}
      className="flex justify-center items-center fixed bottom-6 right-3 p-3  font-karla rounded-t font-medium hover:--tw-scale-y: 1; transition-all	 duration-200 ease-in-out outline-none focus:outline-none text-white shadow-lg bg-gradient-to-r from-indigo-400 to-blue-400  hover:from-white border border-white hover:to-white hover:border-blue-400 hover:text-blue-600"
    >
      <FaArrowUp className="w-4 h-6" />
    </StyledAnchor>
  );
};

export default FooterBtn;
