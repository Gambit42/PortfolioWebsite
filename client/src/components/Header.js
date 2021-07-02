import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 60vh;
  /* background-color: #ecf3ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23cbefff'/%3E%3Cstop offset='1' stop-color='%23ecf3ff'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23afb3ff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23afb3ff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.32'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; */
`;

const Header = () => {
  return (
    <StyledDiv className="flex flex-col justify-start items-center pt-14 md:justify-center">
      <div className="px-10 w-full h-full flex flex-col py-20 md:px-20 md:mb-40  lg:px-30 lg:w-11/12">
        <h1 className="font-rubik font-bold text-4xl overflow-hidden lg:text-5xl lg:w-4/5 lg:pt-5">
          Hello there, <br />
          I'm Prins Ocampo.
        </h1>
        <p className="font-karla font-normal text-lg mt-4 md:text-xl text-gray-700  md:w-10/12 lg:w-5/12 2xl:w-2/5">
          I'm a <span className="text-black font-bold">web developer</span> that
          is passionate about creating fully{" "}
          <span className="text-black font-bold">responsive</span> and
          functional web applications.
        </p>
        <button className="font-karla font-medium hover:--tw-scale-y: 1; transition duration-200 ease-in-out outline-none focus:outline-none text-white py-2 px-4 w-36 rounded-lg mt-5 shadow-lg bg-gradient-to-r from-indigo-400 to-blue-400  hover:from-white border border-transparent hover:to-white hover:border-blue-400 hover:text-blue-600 md:text-lg">
          Download CV
        </button>
      </div>
      <img
        alt="programming"
        className="px-10 pt-5 pb-20 md:absolute md:w-4/6 md:bottom-0 md:right-8 md:pb-5 lg:w-3/6 lg:right-2 lg:bottom-10"
        src="./images/svg/programming.svg"
      ></img>
    </StyledDiv>
  );
};

export default Header;
