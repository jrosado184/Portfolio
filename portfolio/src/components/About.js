import React from 'react';
import me from '../assets/me.webp';
import { ReactComponent as HtmlLogo } from '../assets/html.svg';
import { ReactComponent as ReactLogo } from '../assets/react.svg';
import { ReactComponent as CSSLogo } from '../assets/css.svg';
import { ReactComponent as JSLogo } from '../assets/js.svg';
import { ReactComponent as NodeLogo } from '../assets/node.svg';
import { ReactComponent as PGLogo } from '../assets/pgsql.svg';
import { ReactComponent as JestLogo } from '../assets/jest.svg';
import { ReactComponent as GHLogo } from '../assets/github.svg';
import { ReactComponent as VercelLogo } from '../assets/vercel.svg';
import { ReactComponent as HerokuLogo } from '../assets/heroku.svg';
import { ReactComponent as TailwindLogo } from '../assets/tailwind.svg';
import { ReactComponent as FirebaseLogo } from '../assets/firebase.svg';
import { ReactComponent as TSLogo } from '../assets/ts.svg';
import { ReactComponent as ReduxLogo } from '../assets/redux.svg';
import { ReactComponent as GitLogo } from '../assets/git.svg';

const About = () => {
  return (
    <div className='w-full'>
      <div className='md:flex'>
        <div className='w-full h-full flex flex-col items-center my-16 md:w-[50%]'>
          <div className='flex flex-col items-center'>
            <h1 className='font-custom text-3xl dark:text-neutral-100 desktop:text-5xl'>
              Welcome to my page!
            </h1>
            <h2 className='font-custom text-gray-900 text-1xl ml-20 desktop:text-3xl desktop:ml-80 dark:text-neutral-100'>
              My name is Javier Rosado.
            </h2>
            <div className='flex flex-col desktop:flex-row justify-center items-center'>
              <img className='w-96' src={me} alt='author' />
              <button className='w-24 h-10 font-custom ml-8 bg-gray-900 text-neutral-100 rounded-md animate-bounce'>
                <a
                  href='https://docs.google.com/document/d/1BiUdLN4Lq72yS2iGwXbwPcu4cOjIs__u/edit?usp=sharing&ouid=106553958242504573354&rtpof=true&sd=true'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className='py-20 flex flex-col items-center md:w-[50%] lg:h-[100vh] dark:bg-gray-700'>
          <h3 className='font-custom text-3xl dark:text-neutral-100 my-6 desktop:text-4xl'>
            Full Stack Web Developer
          </h3>
          <div className='w-[70%] flex flex-wrap items-start my-12 justify-evenly gap-8 desktop:w-[60%] h-[30%]'>
            <div className='flex flex-col justify-center items-center'>
              <HtmlLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <CSSLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <JSLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>JavScript</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <TSLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Typescript</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <ReactLogo className='w-20 h-20 animate-spin-slow' />
              <p className='text-neutral-100 font-custom m-2'>React</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <JestLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Jest</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <ReduxLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Redux</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <NodeLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Node</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <FirebaseLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Firebase</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <PGLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>PostgreSQL</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <VercelLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Vercel</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <HerokuLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Heroku</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <GHLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Github</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <GitLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Git</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <TailwindLogo className='w-20 h-20' />
              <p className='text-neutral-100 font-custom m-2'>Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
