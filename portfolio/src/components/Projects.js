import React from "react";
import github from "../assets/github.png";
import vercel from "../assets/vercel.png";

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl text-center">Projects</h1>
      <div className="display: flex justify-center">
        <div className="w-3/4 display: flex justify-center flex-wrap">
          <div className="border w-96 h-80 border-black m-6">
            <img
              className="h-full"
              src="https://picsum.photos/640/360
"
            />
            <div className="display: flex justify-between">
              <a>
                <img className="w-8 h-7 m-4 m-1" src={github} />
              </a>
              <a>
                <img className="w-18 h-8" src={vercel} />
              </a>
            </div>
          </div>
          <div className="border w-96 h-80 border-black m-6">
            <img
              className="h-full"
              src="https://picsum.photos/640/360
"
            />
            <div className="display: flex justify-between">
              <a>
                <img className="w-8 h-7 m-4 m-1" src={github} />
              </a>
              <a>
                <img className="w-18 h-8" src={vercel} />
              </a>
            </div>
          </div>
          <div className="border w-96 h-80 border-black m-6">
            <img
              className="h-full"
              src="https://picsum.photos/640/360
"
            />
            <div className="display: flex justify-between">
              <a>
                <img className="w-8 h-7 m-4 m-1" src={github} />
              </a>
              <a>
                <img className="w-18 h-8" src={vercel} />
              </a>
            </div>
          </div>
          <div className="border w-96 h-80 border-black m-6">
            <img
              className="h-full"
              src="https://picsum.photos/640/360
"
            />
            <div className="display: flex justify-between">
              <a>
                <img className="w-8 h-7 m-4 m-1" src={github} />
              </a>
              <a>
                <img className="w-18 h-8" src={vercel} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
