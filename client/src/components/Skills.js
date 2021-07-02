import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  min-height: 50vh;
`;

const StyledTechStack = styled.h1`
  position: relative;
  width: 100%;
  padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -2px;
    bottom: -10px;
    width: 5px;
    height: 150%;
    background-color: #60a5fa;
  }
`;

const Skills = () => {
  const frontEnd = [
    {
      id: 1,
      name: "HTML 5",
      technology: "html.svg",
    },
    {
      id: 2,
      name: "CSS 3",
      technology: "css.svg",
    },
    {
      id: 3,
      name: "Javascript",
      technology: "javascript.svg",
    },
    {
      id: 9,
      name: "Tailwind",
      technology: "tailwind.svg",
    },
    {
      id: 4,
      name: "React JS",
      technology: "react.svg",
    },
    {
      id: 10,
      name: "Redux",
      technology: "redux.svg",
    },
  ];

  const backEnd = [
    {
      id: 5,
      name: "Node JS",
      technology: "nodeJS.svg",
    },
    {
      id: 6,
      name: "Express JS",
      technology: "express.svg",
    },
    {
      id: 7,
      name: "Mongo DB",
      technology: "mongoDB.svg",
    },
    {
      id: 8,
      name: "MySQL",
      technology: "mySQL.svg",
    },
  ];

  return (
    <StyledDiv className="px-5 pt-10 pb-5 flex flex-col sm:px-10 ">
      <div className="mt-5">
        <StyledTechStack className="font-rubik text-2xl font-bold lg:text-3xl">
          Front End
        </StyledTechStack>
        <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:w-3/5  lg:gap-y-6 mx-auto">
          {frontEnd.map((technology) => (
            <div
              key={technology.id}
              className="flex-col rounded-lg bg-transparent w-3/5 flex py-5 px-5 mx-2 my-2 justify-center items-center sm:w-2/5 lg:w-full hover:shadow-md hover:bg-white"
            >
              <img
                alt={`${technology.technology}`}
                className="h-40"
                src={`./images/svg/${technology.technology}`}
              />
              <p className="mt-5 w-28 py-1 border text-center font-karla text-sm">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
        <StyledTechStack className="font-rubik text-2xl font-bold lg:text-3xl">
          Back End
        </StyledTechStack>
        <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:w-3/5  lg:gap-y-6 mx-auto">
          {backEnd.map((technology) => (
            <div
              key={technology.id}
              className="flex-col rounded-lg bg-transparent w-3/5 flex py-5 px-5 mx-2 my-2 justify-center items-center sm:w-2/5 lg:w-full hover:shadow-md hover:bg-white"
            >
              <img
                alt={`${technology.technology}`}
                className="h-40"
                src={`./images/svg/${technology.technology}`}
              />
              <p className="mt-5 w-28 py-1 border text-center font-karla text-sm">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </StyledDiv>
  );
};

export default Skills;
