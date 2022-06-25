import React from "react";
import NailProject from "./../assets/projects/lbldesktop.png";
import MobileProject from "./../assets/projects/lblmobile.png";
import lbllogin from "./../assets/projects/lbllogin.png";
import { CgWebsite } from "react-icons/cg";
// import darklogin from "./../assets/projects/darklbllogin";

const Projects = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center py-6 dark:bg-gray-600'>
      <h1 className='font-custom text-3xl dark:text-neutral-100'>Projects</h1>
      <div className='w-full flex flex-col gap-8 py-12 desktop:pl-6 desktop:flex-row'>
        <div className='w-[100%] md:w-[35%]'>
          <img
            className='w-full h-fit border border-black rounded-md'
            src={NailProject}
            alt=''
          />
          <CgWebsite className='hidden hover:block' />
          <img
            className='w-full h-fit border border-black my-14 rounded-md'
            src={lbllogin}
            alt=''
          />
        </div>
        <div className='md:w-[35%]'>
          <img
            className='w-full border border-black rounded-md md:w-[70%] h-[80%] '
            src={MobileProject}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
