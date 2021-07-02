import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Project from "./utils/Project";
import ProjectModal from "./utils/ProjectModal";
import Modal from "../Modal.js";

const StyledDiv = styled.div`
  width: 100vw;
  min-height: 50vh;
  padding: 6rem 1.25rem 3rem 1.25rem;

  @media (min-width: 1024px) {
    padding-right: 2.25rem;
  }
`;

const StyledListItem = styled.li`
  background: transparent;
  color: #111;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #3b82f6;
    color: white;
    background-image: linear-gradient(to right, #818cf8, #60a5fa);
    transition: all 0.2s ease-in-out;
  }

  ${({ activeItem }) =>
    activeItem &&
    css`
      color: #3b82f6;
      color: white;
      background-image: linear-gradient(to right, #818cf8, #60a5fa);
      transition: all 0.2s ease-in-out;
    `}
`;

const StyledH1 = styled.h1`
  text-align: left;
  font-weight: 700;
  padding-bottom: 10px;
  position: relative;
`;

const Projects = ({ isModalOpen, setIsModalOpen }) => {
  const categories = [
    {
      id: 1,
      dataFilter: "Featured",
    },
    {
      id: 5,
      dataFilter: "All Categories",
    },
    {
      id: 2,
      dataFilter: "Business",
    },
    {
      id: 3,
      dataFilter: "Social Media",
    },
    {
      id: 4,
      dataFilter: "Games",
    },
  ];
  const [activeList, setActiveList] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeProject, setActiveProject] = useState();

  useEffect(() => {
    const projects = [
      {
        id: 1,
        title: "Peruse",
        subTitle: "Social Media Website",
        madeWith: ["React JS", "Node JS", "Tailwind CSS", "MongoDB"],
        image:
          "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        category: "Social Media",
        featured: true,
      },
      {
        id: 2,
        title: "Memory Game",
        subTitle: "Social Media Website",
        madeWith: ["React JS", "Node JS", "Tailwind CSS", "MongoDB"],
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.unipin.com%2Fwp-content%2Fuploads%2F2021%2F01%2Flylia-mobile-legends-wallpaper-1024x576.jpg&f=1&nofb=1",
        category: "Games",
        featured: true,
      },
      {
        id: 3,
        title: "Dota 2",
        subTitle: "Social Media Website",
        madeWith: ["React JS", "Node JS", "Tailwind CSS", "MongoDB"],
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.segmentnext.com%2Fwp-content%2Fuploads%2F2020%2F02%2FDota-2-scaled.jpg&f=1&nofb=1",
        category: "Games",
        featured: true,
      },
      {
        id: 4,
        title: "Wings",
        subTitle: "Restaurant Website",
        madeWith: ["React JS", "Node JS", "Tailwind CSS", "MongoDB"],
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn0.wideopenpets.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fmolty.jpg&f=1&nofb=1",
        category: "Business",
        featured: false,
      },
    ];
    const handleFilter = () => {
      switch (activeCategory) {
        case "All Categories":
          setFilteredProjects(projects);
          break;
        case "Featured":
          setFilteredProjects(
            projects.filter((project) => project.featured === true)
          );
          break;
        case "Games":
          setFilteredProjects(
            projects.filter((project) => project.category === "Games")
          );
          break;
        case "Business":
          setFilteredProjects(
            projects.filter((project) => project.category === "Business")
          );
          break;
        case "Social Media":
          setFilteredProjects(
            projects.filter((project) => project.category === "Social Media")
          );
          break;
        default:
          setFilteredProjects(projects);
      }
    };
    handleFilter();
  }, [activeCategory]);

  return (
    <StyledDiv id="projects">
      <div className="w-full flex flex-col">
        <div className="flex flex-col justify-center items-center pb-0 mx-auto">
          <StyledH1 className="font-rubik font-bold text-4xl pt-5">
            My Projects
          </StyledH1>
          <p className="pt-2 font-karla w-4/5 text-gray-700 text-base mx-auto text-center">
            These are the notable projects that I made over the years I spent
            developing websites.
          </p>
        </div>
        <div className="mt-10 w-full flex justify-center items-center">
          <ul className="w-full grid gap-4 grid-cols-2 sm:w-4/5 md:grid-cols-3 lg:grid-cols-5 ">
            {categories.map((category) => (
              <StyledListItem
                className="w-36 font-karla text-sm sm:text-base font-medium text-black mx-auto"
                key={category.id}
                activeItem={activeList === category.id ? true : false}
                data-filter={category.dataFilter}
                onClick={() => {
                  setActiveCategory(category.dataFilter);
                  setActiveList(category.id);
                }}
              >
                {category.dataFilter}
              </StyledListItem>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 mx-auto flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-3 lg:w-11/12 2xl:w-4/5">
        {filteredProjects.map((filteredProject) => (
          <Project
            key={filteredProject.id}
            setIsModalOpen={setIsModalOpen}
            project={filteredProject}
            setActiveProject={setActiveProject}
          />
        ))}
      </div>
      <Modal isModalOpen={isModalOpen}>
        <ProjectModal
          activeProject={activeProject}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </StyledDiv>
  );
};

export default Projects;
