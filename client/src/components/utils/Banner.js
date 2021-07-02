import React from "react";

const Banner = () => {
  return (
    <div
      id="skills"
      className="px-5 pt-20 pb-5 flex flex-col md:flex-row-reverse md:w-10/12 md:mx-auto"
    >
      <div className="flex flex-col justify-center items-center md:justify-center md:items-center md:px-10 md:w-4/5">
        <h1 className="inline-block overflow-hidden font-rubik font-bold text-4xl pt-5 text-black z-10 text-center lg:text-right 2xl:text-5xl">
          My skills as a <span className="text-blue-400">Web Developer</span>
        </h1>
        <p className="pt-5 font-karla text-center text-grey-700 lg:text-right">
          Besides characteristics such as being passionate and being able to
          work well with others, I as a web developer also have these technical
          skills. Below are the list of my skills including my works.
        </p>
      </div>
      <img
        alt="show skills"
        className="px-10 pt-20 md:pt-10 md:px-0 md:w-full lg:w-4/6 2xl:w-3/6"
        src="./images/svg/portfolio.svg"
      />
    </div>
  );
};

export default Banner;
