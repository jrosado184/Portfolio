import React from "react";
import youtube from "../assets/youtube-clone.png";
import Nails from "../assets/Nails.png";
import mac from "./../assets/mac.png";
import macbook from "./../assets/macbook.png";
import phone from "./../assets/phone.png";

const Projects = ({ dark }) => {
  return (
    <>
      <h1
        className={
          !dark
            ? "text-5xl text-center font-custom"
            : "text-5xl text-center text-white font-custom"
        }
      >
        Projects
      </h1>
      <div className="flex justify-center py-16">
        <div className="w-[100%] flex justify-center flex-wrap">
          <div className={!dark ? "w-100 h-96 m-6 flex" : "w-100 h-96 m-6"}>
            <img className="h-full w-100 m-auto" src={mac} alt="" />
            <img className="h-full w-100 m-auto" src={macbook} alt="" />
            <img className="h-full w-100 m-auto=" src={phone} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
