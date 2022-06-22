import React from 'react';
import me from '../assets/me.png';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { VscGithubAlt } from 'react-icons/vsc';
import { SiTailwindcss } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiHeroku } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import { SiJest } from 'react-icons/si';

const About = () => {
  return (
    <div className='w-full h-[100vh] py-16 flex flex-col justify-center items-center desktop:block'>
      <h1 className='text-3xl dark:text-neutral-100 desktop:ml-40 desktop:text-6xl font-custom'>
        Welcome to my page.
      </h1>
      <p className='text-1xl dark:text-neutral-100 desktop:text-4xl desktop:ml-80 font-custom'>
        My name is Javier Rosado!
      </p>
      <div className='flex flex-col justify-center items-center desktop:flex-row'>
        <img className='w-80 desktop:w-1/4 desktop:ml-96' src={me} alt='' />
        <div className='flex flex-col justify-center'>
          <div className='w-full flex flex-col justify center items-center'>
            <h2 className='font-custom text-2xl py-4 pb-6 dark:text-neutral-100'>
              Full Stack Web Developer
            </h2>
            <div className='w-[78%] flex flex-wrap justify-evenly items-center desktop:w-[40%] '>
              <AiFillHtml5 className='w-20 h-20 text-orange-500' />
              <DiCss3 className='w-20 h-20 text-blue-500' />
              <DiJavascript1 className='w-20 h-20 text-yellow-500' />
              <DiReact className='w-20 h-20 text-blue-300 animate-spin-slow' />
              <SiRedux className='w-14 h-14 text-blue-300' />
              <DiNodejsSmall className='w-20 h-20 text-green-700' />
              <VscGithubAlt className='w-14 h-14 text-neutral-900 dark:text-neutral-100' />
              <SiTailwindcss className='w-14 h-14 text-blue-400' />
              <DiPostgresql className='w-20 h-20 text-purple-400' />
              <DiMongodb className='w-14 h-14 text-green-700' />
              <DiHeroku className='w-14 h-14 text-purple-700' />
              <SiJest className='w-14 h-14 text-purple-700' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
