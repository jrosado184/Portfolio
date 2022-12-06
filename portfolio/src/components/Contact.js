import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [input, setInputs] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputs = (e) => {
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    !input.user_name || !input.user_email || !input.message
      ? setSuccessMessage("Please fill all required fields!")
      : emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
              setSuccessMessage("Message Sent!");
            },
            (error) => {
              console.log(error.text);
            }
          );
  };

  return (
    <div className='w-full h-[95vh]  bg-slate-200'>
      <div className='flex justify-center py-10'>
        <h1 className='text-2xl font-poppins font-bold text-blue-900'>
          Contact
        </h1>
      </div>
      <div className='w-full flex justify-center items-center'>
        <form ref={form} className='w-[90%] h-[40vh] lg:w-[40%]'>
          <input
            className='w-[100%] h-[5vh] pl-4 bg-slate-100 rounded-full'
            name='user_name'
            placeholder='Name'
            value={input.user_name}
            onChange={handleInputs}
          />
          <input
            className='w-[100%] h-[5vh] pl-4 bg-slate-100 rounded-full my-6'
            name='user_email'
            placeholder='Email'
            value={input.user_email}
            onChange={handleInputs}
          />
          <textarea
            className='w-[100%] h-[14vh] pl-4 py-2 bg-slate-100 rounded-md my-6'
            name='message'
            placeholder='Email'
            value={input.message}
            onChange={handleInputs}
          />
          <p
            className={
              successMessage === "Message Sent!"
                ? "text-blue-900"
                : "text-red-900 pb-4"
            }
          >
            {successMessage}
          </p>
          <div className='w-full flex justify-center'>
            <button
              onClick={sendEmail}
              className='w-20 h-8 bg-slate-50 rounded-full border border-blue-900'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
