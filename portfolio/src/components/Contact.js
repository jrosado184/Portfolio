import React from "react";

const Contact = () => {
  return (
    <div className='w-full h-[95vh]  bg-slate-200'>
      <div className='flex justify-center py-10'>
        <h1 className='text-2xl font-poppins font-bold text-blue-900'>
          Contact
        </h1>
      </div>
      <div className='w-full flex justify-center items-center'>
        <form className='w-[90%] h-[40vh] lg:w-[40%]'>
          <input
            className='w-[100%] h-[5vh] pl-4 bg-slate-100 rounded-full'
            name='name'
            placeholder='Name'
          />
          <input
            className='w-[100%] h-[5vh] pl-4 bg-slate-100 rounded-full my-6'
            name='name'
            placeholder='Email'
          />
          <textarea
            className='w-[100%] h-[14vh] pl-4 py-2 bg-slate-100 rounded-md my-6'
            name='name'
            placeholder='Email'
          />
          <div className='w-full flex justify-center'>
            <button className='w-20 h-8 bg-slate-50 rounded-full border border-black'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
