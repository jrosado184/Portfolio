import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";
import ToggleSwitch from "./utils/ToggleSwitch";

const Header = ({ dark, setDark }) => {
  return (
    <div className='w-full h-16 font-custom bg-text-900 bg-gray-900 sticky top-0 z-20'>
      <div className='flex justify-between'>
        <div className='hidden desktop:flex justify-end items-end pb-2 h-16'>
          <Link to='/about' className='ml-6 text-neutral-100'>
            About
          </Link>
          <Link to='/projects' className='ml-6 text-white'>
            Projects
          </Link>
          <Link to='/resume' className='ml-6 text-neutral-100'>
            Resume
          </Link>
          <Link to='/contact' className='ml-6 text-neutral-100'>
            Contact
          </Link>
        </div>
        <div className='flex justify-evenly items-end pb-2 w-full  gap-3 desktop:justify-end desktop:items-end desktop:w-62 h-16'>
          <a
            href='https://github.com/jrosado184'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub className='w-9 h-9 text-neutral-100' />
          </a>
          <a
            href='https://www.linkedin.com/in/javier-rosado-2974721b5/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin className='w-9 h-9 text-neutral-100' />
          </a>
          <a
            href='https://www.instagram.com/_papijavy/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram className='w-9 h-9 text-neutral-100' />
          </a>
          <a
            href='https://twitter.com/Javier_E_Rosado'
            target='_blank'
            rel='noreferrer'
          >
            <SiTwitter className='w-9 h-9 text-neutral-100' />
          </a>
          <div className='hidden desktop:block'>
            <ToggleSwitch dark={dark} setDark={setDark} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
