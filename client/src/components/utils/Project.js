import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import styled from "styled-components";

const StyledDiv = styled.div`
  transition: 1s ease-in all;
  &:hover .project-image {
    transform: scale(1.1);
  }
  &:hover .magnifying-glass {
    opacity: 1;
  }
  &:hover::after {
    visibility: visible;
    opacity: 0.8;
  }
  &::after {
    z-index: 0;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #818cf8, #60a5fa);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: 0.2s all ease-in-out;
    -o-transition: 0.2s all ease-in-out;
    transition: 0.2s all ease-in-out;
  }
`;

const Project = ({ project, setActiveProject, setIsModalOpen }) => {
  const handleActiveProject = () => {
    setActiveProject(project);
    setIsModalOpen(true);
  };
  return (
    <div className="flex flex-col mb-10" onClick={handleActiveProject}>
      <StyledDiv className="focus:outline-none overflow-hidden flex justify-center items-center cursor-pointer rounded-lg mb-3 relative w-full h-80 shadow-md transition duration-300 ease-in-out z-0 sm:mx-auto">
        <GiMagnifyingGlass className="magnifying-glass w-14 h-14 absolute text-white z-10 opacity-0" />
        <img
          alt="project"
          className="transition duration-300 ease-in-out project-image rounded-lg object-cover w-full h-full"
          src={project.image}
        />
      </StyledDiv>
      <div className="h-30">
        <h1 className="font-rubik font-bold text-2xl">{project.title}</h1>
        <h2 className="font-karla text-black text-lg">{project.subTitle}</h2>
        <div className="flex flex-row flex-wrap ">
          {project.madeWith.map((element, index) => (
            <p key={index} className="pr-2 font-karla text-gray-700">
              {element}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
