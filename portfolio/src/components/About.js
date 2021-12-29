import React from "react";
import me from "../assets/me.png";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import node from "../assets/node.svg";
import redux from "../assets/redux.svg";
import tailwind from "../assets/tailwind.png";

const About = (props) => {
  const { dark } = props;

  return (
    <div className=" w-full py-16">
      <h1 className={!dark ? "text-6xl ml-40" : "text-white text-6xl ml-40"}>
        Welcome to my page.
      </h1>
      <p className={!dark ? " text-4xl ml-80" : "text-white text-4xl ml-80"}>
        My name is Javier Rosado!
      </p>
      <div className="display: flex">
        <img className="w-1/4 ml-80" src={me} />
        <div className="ml-24">
          <h2 className=" text-4xl my-16 underline">
            {" "}
            Full Stack Web Developer
          </h2>
          <div className="w-80 h-80 display: flex flex-wrap justify-evenly m-6">
            <div className="w-24 h-28">
              <img className="h-24 w-fit" src={html} />
            </div>
            <div className="w-24 h-28">
              <img className="w-fit h-24" src={css} />
            </div>
            <div className="w-24 h-28">
              <img
                className="w-fit h-24 rounded-2xl border-2 border-black"
                src={javascript}
              />
            </div>
            <div className="w-24 h-28">
              <img className="w-fit h-24 animate-spin-slow" src={react} />
            </div>
            <div className="w-24 h-28">
              <img className="w-fit h-24" src={redux} />
            </div>
            <div className="w-24 h-28">
              <img className="w-fit h-24" src={node} />
            </div>
            <div className="w-24 h-28">
              <img className="w-fit h-24" src={tailwind} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
