import React from "react";
import nailsHP from "./../assets/projects/nails homepage.png";
import nailHPLight from "./../assets/projects/nails homepage light.png";
import { AiFillGithub } from "react-icons/ai";
// import darklogin from "./../assets/projects/darklbllogin";

const Projects = () => {
  return (
    <div className='w-full bg-slate-100 h-full flex flex-col items-center py-20 lg:h-[100vh] dark:bg-gray-600'>
      <h1 className='font-custom text-3xl dark:text-neutral-100'>Projects</h1>
      <div className='flex flex-col items-center my-14'>
        <img
          className='hidden w-[95%] h-[32vh] rounded-md lg:h-[50vh] lg:w-[50vw] dark:flex'
          src={nailsHP}
          alt=''
        />
        <img
          className='w-[95%] h-[32vh] border border-gray-300 rounded-md lg:h-[50vh] lg:w-[50vw] dark:hidden'
          src={nailHPLight}
          alt=''
        />
        <div className='w-[95%] flex justify-between'>
          <p className='font-bold dark:text-neutral-100'>LoveByLaysha</p>
          <div className='flex items-center justify-center gap-1'>
            <a
              href='https://github.com/jrosado184/LoveByLaysha'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub className='w-6 h-5 dark:text-neutral-100' />
            </a>
            <a href='https://lovebylaysha.com' target='_blank' rel='noreferrer'>
              <svg
                className='w-6 h-5 dark:text-neutral-100'
                viewBox='0 0 15 15'
                stroke='currentColor'
                strokeWidth='.3'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z'
                  fill='currentColor'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
