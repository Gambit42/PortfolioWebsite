import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  min-height: 40vh;
`;

const Footer = () => {
  return (
    <StyledDiv className="flex flex-col justify-center items-center">
      <h1 className="font-rubik text-3xl font-bold overflow-hidden">
        Follow Me
      </h1>
      <p className="font-karla text-base mb-4">Let's get acquianted.</p>
      <div className="flex flex-row justify-around w-3/5 mt-4 md:w-2/5 lg:w-1/5">
        <a
          href="https://www.facebook.com/profile.php?id=1839408720"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="w-8 h-8  cursor-pointer hover:text-indigo-400  text-gray-400 transition duration-200 ease-in-out" />
        </a>
        <a
          href="https://twitter.com/Gambiiiit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="w-8 h-8  cursor-pointer  text-gray-400 hover:text-indigo-400  transition duration-200 ease-in-out" />
        </a>
        <a
          href="https://github.com/Gambit42"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-8 h-8 cursor-pointer  hover:text-indigo-400  transition duration-200 ease-in-out text-gray-400 " />
        </a>
        <a href="www.gooogle.com" rel="noopener noreferrer" target="_blank">
          <FaInstagram className="w-8 h-8 cursor-pointer  hover:text-indigo-400  transition duration-200 ease-in-out text-gray-400 " />
        </a>
      </div>
    </StyledDiv>
  );
};

export default Footer;
