import React from "react";
import youtube from "../assets/youtube-clone.png";
import Nails from "../assets/Nails.png";

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl text-center">Projects</h1>
      <div className="flex justify-center my-16">
        <div className="w-[100%] flex justify-center flex-wrap">
          <div className="border w-100 h-96 border-black m-6 ">
            <img className="h-full w-100 m-auto" src={youtube} alt="" />
          </div>
          <div className="border w-100 h-96 border-black m-6 ">
            <img className="h-full w-100 m-auto" src={Nails} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
