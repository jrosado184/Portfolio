import React from "react";
import github from "../assets/github.png";
import vercel from "../assets/vercel.png";
import youtube from "../assets/youtube-clone.png";

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl text-center">Projects</h1>
      <div className="display: flex justify-center">
        <div className="w-[50%] display: flex justify-center flex-wrap">
          <div className="border w-100 h-96 border-black m-6 ">
            <img className="h-full w-100 m-auto" src={youtube} />
            <div className="display: flex justify-between"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
