import React from "react";
import { IoClose } from "react-icons/io5";
import { GoMarkGithub } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  z-index: 60;
  background: #fff;
  border-radius: 0.375rem;

  @media (min-width: 640px) {
    width: 80%;
    height: 90%;
  }
  @media (min-width: 1024px) {
    width: 700px;
    height: 90%;
  }
`;

const StyledMainBtn = styled.button`
  color: #fff;
  background: linear-gradient(to right, #818cf8, #60a5fa);
  transition: all 0.2s ease-in-out;
  border: #60a5fa 1px solid;
  cursor: pointer;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:focus {
    outline: none;
  }
  &:hover {
    background: #fff;
    border: #60a5fa 1px solid;
    color: #60a5fa;
  }
`;

const StyledSubBtn = styled.button`
  background: #fff;
  border: #60a5fa 1px solid;
  color: #60a5fa;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #3b82f6;
    color: white;
    background-image: linear-gradient(to right, #818cf8, #60a5fa);
    transition: all 0.2s ease-in-out;
  }
`;

const StyledH1 = styled.h1`
  position: relative;
  padding: 0 0.7rem;
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

const ProjectModal = ({ setIsModalOpen, activeProject }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledModal>
      <div className="relative w-full h-full">
        <div className="px-2 border border-b-1 fixed h-10 w-full bg-white flex flex-row justify-between items-center">
          <h1 className="font-rubik text-lg font-bold">
            {activeProject.title}
          </h1>
          <IoClose
            onClick={handleCloseModal}
            className="cursor-pointer text-2xl text-red-600"
          />
        </div>
        <div className="px-3 pt-14">
          <div>
            <img
              alt={activeProject.title}
              className="w-full rounded-lg object-contain mb-2 mt-2"
              src={activeProject.image}
            />
            <div className="flex flex-row flex-wrap">
              <h1 className="font-rubik font-bold mr-2">Built using:</h1>
              <ul className="flex flex-wrap flex-row mb-5">
                {activeProject.madeWith.map((element, index) => (
                  <li key={index} className="font-karla pr-2">
                    {element}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2 flex flex-row justify-end items-center">
              <StyledSubBtn className="mr-2 bg-gray-900 rounded-lg cursor-pointer px-5 py-1 flex flex-row justify-center items-center font-karla">
                <GoMarkGithub className="mr-1" />
                <p className="font-karla font-bold text-lg">Github</p>
              </StyledSubBtn>
              <StyledMainBtn className="bg-gray-900 rounded-lg cursor-pointer px-5 py-1 flex flex-row justify-center items-center font-karla">
                <FaEye className="mr-1" />
                <p className="font-karla font-bold text-lg">Demo</p>
              </StyledMainBtn>
            </div>
          </div>
          <div className="my-5">
            <div className="pb-5">
              <StyledH1 className="font-rubik font-bold text-xl my-2">
                Description:
              </StyledH1>

              <p className="px-2 font-karla">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                repellendus velit ea soluta quos aliquam corporis, reprehenderit
              </p>
            </div>
            <div className="pb-5">
              <StyledH1 className="font-rubik font-bold text-xl my-2">
                Features:
              </StyledH1>
              <ul class="list-disc list-inside">
                <li className="font-karla">Lorem ipsum dolor sit amet.</li>
                <li className="font-karla">Lorem ipsum dolor sit amet.</li>
                <li className="font-karla">Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default ProjectModal;
