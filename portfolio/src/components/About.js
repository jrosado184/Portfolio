import React from 'react';
import me from '../assets/me.png';
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
    <div className='w-full h-[100vh] my-40 flex flex-col justify-center items-center desktop:block desktop:my-0'>
      <h1 className='text-3xl dark:text-neutral-100 desktop:ml-40 desktop:text-6xl font-custom'>
        Welcome to my page.
      </h1>
      <p className='text-1xl dark:text-neutral-100 desktop:text-4xl desktop:ml-80 font-custom'>
        My name is Javier Rosado!
      </p>
      <div className='flex flex-col items-center desktop:flex-row'>
        <img className='w-80 desktop:w-1/4 desktop:ml-96' src={me} alt='' />
        <div className='flex flex-col justify-center'>
          <div className='w-full flex flex-col justify center items-center'>
            <h2 className='font-custom text-2xl py-4 pb-6 dark:text-neutral-100'>
              Full Stack Web Developer
            </h2>
            <div className='flex flex-wrap justify-evenly  items-center desktop:w-[50%] gap-6 m-6 desktop:gap-6 '>
              <div className='flex flex-col items-center justify-center font-custom'>
                <HtmlLogo className='w-16 h-16' />
                <p className='dark:text-neutral-100'>HTML</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <CSSLogo className='w-16 h-16 ' />
                <p className='dark:text-neutral-100'>CSS</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <JSLogo className='w-16 h-16 border' />
                <p className='dark:text-neutral-100'>JavaScript</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <TSLogo className='w-16 h-16 border' />
                <p className='dark:text-neutral-100'>TypeScript</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <ReactLogo className='w-16 h-16 animate-spin-slow' />
                <p className='dark:text-neutral-100'>React</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <ReduxLogo className='w-16 h-16' />
                <p className='dark:text-neutral-100'>Redux</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <JestLogo className='w-16 h-16 ' />
                <p>Jest</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <NodeLogo className='w-16 h-16 ' />
                <p className='dark:text-neutral-100'>Node</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <PGLogo className='w-16 h-16 ' />
                <p className='dark:text-neutral-100'>PostgreSQL</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <FirebaseLogo className='w-16 h-16 dark:text-neutral-100 ' />
                <p className='dark:text-neutral-100'>Firebase</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <GHLogo className='w-16 h-16 dark:text-neutral-100 ' />
                <p className='dark:text-neutral-100'>GitHub</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <GitLogo className='w-16 h-16 dark:text-neutral-100 ' />
                <p className='dark:text-neutral-100'>Git</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <VercelLogo className='w-16 h-16 dark:text-neutral-100 ' />
                <p className='dark:text-neutral-100'>Vercel</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <HerokuLogo className='w-16 h-16 dark:text-neutral-100 ' />
                <p className='dark:text-neutral-100'>Heroku</p>
              </div>
              <div className='flex flex-col items-center font-custom w-20 h-20'>
                <TailwindLogo className='w-16 h-16 dark:text-neutral-100' />
                <p className='dark:text-neutral-100'>Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
