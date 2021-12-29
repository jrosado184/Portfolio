import React, { useState } from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import whitegh from "../assets/whitegh.png";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { dark, setDark } = props;

  return (
    <div
      className={
        !dark
          ? "w-full h-48 border-b-2 border-black"
          : "w-full h-48 border-b-2 border-white bg-stone-900"
      }
    >
      <div className="display: flex flex space-x-4 ">
        <Link
          to="/about"
          className={!dark ? "my-40 ml-6" : "text-white my-40 ml-6"}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={!dark ? "my-40 ml-6" : "text-white my-40 ml-6"}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className={!dark ? "my-40 ml-6" : "text-white my-40 ml-6"}
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className={!dark ? "my-40 ml-6" : "text-white my-40 ml-6"}
        >
          Contact
        </Link>
        <div className="w-full h-48 display: flex justify-end my-36 ">
          <a href="https://github.com/jrosado184" target="_blank">
            {!dark ? (
              <img className="w-8 h-8 mr-4 my-1.5" src={github} alt="github" />
            ) : (
              <img className="w-8 h-8 mr-4 my-1.5" src={whitegh} />
            )}
          </a>
          <a
            href="https://www.linkedin.com/in/javier-rosado-2974721b5/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mr-4 w-12 h-12 mb-4"
              src={linkedin}
              alt="github"
              rel="noreferrer"
            />
          </a>
          <a
            href="https://www.instagram.com/_papijavy/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-7 h-7 mr-4 my-2.5" src={instagram} alt="github" />
          </a>
          <a
            href="https://twitter.com/Javier_E_Rosado"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-7 h-7 mr-4 w-9 h-9 my-1.5"
              src={twitter}
              alt="github"
            />
          </a>
          <Switch
            checked={dark}
            onChange={setDark}
            className={`${
              dark ? "bg-blue-400" : "bg-gray-400"
            } relative inline-flex items-center h-6 rounded-full w-11 mr-16 my-3`}
          >
            <span
              className={`${
                dark ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Header;
