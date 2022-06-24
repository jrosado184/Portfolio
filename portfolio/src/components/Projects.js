import React from 'react';

const Projects = ({ dark }) => {
  return (
    <>
      <h1
        className={
          !dark
            ? 'text-5xl text-center font-custom'
            : 'text-5xl text-center text-white font-custom'
        }
      >
        Projects
      </h1>
      <div className='flex justify-center py-16'>
        <div className='w-[100%] flex justify-center flex-wrap'>
          <div
            className={!dark ? 'w-100 h-96 m-6 flex' : 'w-100 h-96 m-6'}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
