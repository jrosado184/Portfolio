import React from "react";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

const Header = () => {
  return (
    <div className="w-full h-48 border-b-2 border-black ">
      <div className="display: flex flex space-x-4 ">
        <nav className="my-40 ml-6">About</nav>
        <nav className="my-40">Projects</nav>
        <nav className="my-40">Resume</nav>
        <nav className="my-40">Contact</nav>
        <div className="w-full h-48 display: flex justify-end my-36 ">
          <a href="https://github.com/jrosado184" target="_blank">
            <img className="w-8 h-8 mr-4 my-1.5" src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-rosado-2974721b5/"
            target="_blank"
          >
            <img className="mr-4 w-12 h-12" src={linkedin} alt="github" />
          </a>
          <a href="https://www.instagram.com/_papijavy/" target="_blank">
            <img
              className="w-7 h-7 mr-4 w- h-3 my-2"
              src={instagram}
              alt="github"
            />
          </a>
          <a href="https://twitter.com/Javier_E_Rosado" target="_blank">
            <img
              className="w-7 h-7 mr-4 w-9 h-9 my-1"
              src={twitter}
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
