import React from 'react';
import desktop from './../assets/desktop.png';

const Projects = ({ dark }) => {
  return (
    <div className='w-full h-[100vh]  flex flex-col items-center'>
      <h1 className='font-custom text-3xl dark:text-neutral-100'>Projects</h1>
      <div>
        <div className='w-[40%] rounded-md'></div>
      </div>
    </div>
  );
};

export default Projects;
