import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  min-height: 50vh;
`;

const StyledH1 = styled.h1`
  text-align: left;
  font-weight: 700;
  position: relative;

  /* &:after {
    content: "";
    position: absolute;
    bottom: 18px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(
      90deg,
      hsla(234, 89%, 74%, 1) 0%,
      hsla(213, 94%, 68%, 1) 100%
    );
  } */
`;

const About = () => {
  return (
    <StyledDiv
      id="about"
      className="px-5 pt-20 pb-5 flex flex-col sm:px-10 lg:flex-row"
    >
      <div className="lg:flex lg:flex-col">
        <div className="flex flex-col justify-center items-center pb-0 mx-auto">
          <StyledH1 className="font-rubik font-bold text-4xl pt-5 overflow-hidden">
            What I do
          </StyledH1>
          <p className="pt-2 font-karla w-4/5 text-gray-700 text-base mx-auto text-center">
            I do front-end design and also fullstack web applications.
          </p>
        </div>
        <div className="md:flex md:flex-row lg:w-4/5 mx-auto">
          <div className="my-5 py-10 mx-5 hover:shadow-lg hover:bg-white">
            <div className="relative flex flex-col mx-auto justify-center items-center sm:w-8/12 h-full">
              <img
                className="w-40 h-28"
                alt="responsive-design"
                src="./images/svg/responsiveDesign.svg"
              />
              <h1 className="font-rubik font-bold text-center text-lg pt-5 pb-4">
                Front-end Development
              </h1>
              <p className="text-gray-700 font-karla text-base font-light	text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis nam nobis voluptatum fugiat, temporibus architecto
                tempore quo aspernatur reprehenderit fugit!
              </p>
            </div>
          </div>
          <div className="my-5 py-10 mx-5 hover:shadow-lg hover:bg-white">
            <div className="relative flex mx-auto flex-col justify-center items-center sm:w-8/12">
              <img
                className="w-40 h-28"
                alt="backend-development"
                src="./images/svg/fullstack.svg"
              />
              <h1 className="font-rubik text-center font-bold text-lg pt-5 pb-4">
                Fullstack Development
              </h1>
              <p className="text-gray-700 font-karla text-base font-light	text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis nam nobis voluptatum fugiat, temporibus architecto
                tempore quo aspernatur reprehenderit fugit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default About;
