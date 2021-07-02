import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { RiVipCrownLine } from "react-icons/ri";
import styled, { css } from "styled-components";

const StyledNavbar = styled.nav`
  position: fixed;
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
  transition: all 0.2s ease-in;
  z-index: 40;
  background-color: white;
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  ${({ isNavbarActive }) =>
    isNavbarActive &&
    css`
      background-color: white;
      --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    `}

  ${({ isBurgerActive }) =>
    isBurgerActive &&
    css`
      background-color: white;
      --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    `}

    
  @media (min-width: 768px) {
    height: 5rem;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 700;
  background: linear-gradient(
    90deg,
    hsla(234, 89%, 74%, 1) 0%,
    hsla(213, 94%, 68%, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
`;

const StyledUL = styled.ul`
  min-width: 100vw;
  min-height: 100vh;
  background: #dbeafe;

  /* background-color: #ecf3ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23cbefff'/%3E%3Cstop offset='1' stop-color='%23ecf3ff'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23afb3ff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23afb3ff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.32'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; */
  transition: transform 0.2s ease-in;
  transform: translateX(100%);

  ${({ isNavListActive }) =>
    isNavListActive &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 768px) {
    all: unset;
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: 1rem;
    width: 50%;
    padding: 0 1rem;
    margin-right: 1rem;
  }
  @media (min-width: 1024px) {
    width: 35%;
    right: 2rem;
    margin-right: 2rem;
  }
`;

/* 
 h-14 w-full bg-transparent flex flex-row justify-between items-center px-2 py-2 absolute text-black */

const Navbar = ({ burgerState, setBurgerState }) => {
  const [navbarState, setNavbarState] = useState(false);
  const navList = [
    {
      id: 1,
      navLi: "Home",
      to: "#",
    },
    {
      id: 2,
      navLi: "About",
      to: "#about",
    },
    {
      id: 3,
      navLi: "Skills",
      to: "#skills",
    },
    {
      id: 4,
      navLi: "Projects",
      to: "#projects",
    },
    {
      id: 5,
      navLi: "Contact",
      to: "#contact",
    },
  ];

  const handleBurgerClick = () => {
    setBurgerState(!burgerState);
  };

  const handleNavbarState = () => {
    if (window.scrollY >= 80) {
      setNavbarState(true);
    } else {
      setNavbarState(false);
    }
  };

  window.addEventListener("scroll", handleNavbarState);
  return (
    <StyledNavbar
      className="p-4 md:p-6"
      isNavbarActive={navbarState}
      isBurgerActive={burgerState}
    >
      <div className="flex items-center cursor-pointer h-full md:ml-10 lg:ml-20">
        <RiVipCrownLine className="mr-1 h-7 w-7 text-indigo-400" />
        <StyledH1 className="font-rubik text-2xl">PRNS</StyledH1>
      </div>
      <StyledUL
        isNavListActive={burgerState}
        className="font-karla flex flex-col pt-20 items-center fixed top-14 h-screen left-0 z-40"
      >
        {navList.map((list) => (
          <li
            className="font-rubik transition duration-200 ease-in-outtext-2xl py-4 cursor-pointer md:text-lg hover:text-indigo-400 px-2"
            key={list.id}
            onClick={() => {
              setBurgerState(false);
            }}
          >
            <a href={list.to}>{list.navLi}</a>
          </li>
        ))}
      </StyledUL>
      {burgerState === false ? (
        <HiMenu
          className="h-full w-8 cursor-pointer md:hidden"
          onClick={handleBurgerClick}
        />
      ) : (
        <HiOutlineX
          className="h-full w-8 cursor-pointer md:hidden"
          onClick={handleBurgerClick}
        />
      )}
    </StyledNavbar>
  );
};

export default Navbar;
