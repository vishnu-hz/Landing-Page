"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Form = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    message: ''
  });

  const animationDuration = 0.3;
  const modalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeForm();
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 font-outfit bg-black bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: animationDuration }}
    >
      <motion.div
        ref={modalRef}
        className="bg-[#F9F9F9] rounded-[20px] w-[465px] relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{
          type: 'spring',
          duration: animationDuration,
          bounce: 0.2
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <div className="text-[14px] font-light text-[#858585]">Book A 15 Minutes Demo Call</div>
          <div className="cursor-pointer" onClick={closeForm}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.73798 6.73798C7.05528 6.42067 7.56972 6.42067 7.88702 6.73798L19.262 18.113C19.5793 18.4303 19.5793 18.9447 19.262 19.262C18.9447 19.5793 18.4303 19.5793 18.113 19.262L6.73798 7.88702C6.42067 7.56972 6.42067 7.05528 6.73798 6.73798Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.262 6.73798C19.5793 7.05528 19.5793 7.56972 19.262 7.88702L7.88702 19.262C7.56972 19.5793 7.05528 19.5793 6.73798 19.262C6.42067 18.9447 6.42067 18.4303 6.73798 18.113L18.113 6.73798C18.4303 6.42067 18.9447 6.42067 19.262 6.73798Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-[#E5E5E5]"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col items-center">
          {/* Full Name */}
          <div className=" flex flex-col">
            <label className="text-[#858585] text-[12px] font-light" htmlFor="fullName">
              Full Name
            </label>
            <div className='flex justify-center'>
            <input
              className="w-[370px] h-10 mt-1 px-3 bg-white rounded-t-[10px] border-b-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          {/* Work Email */}
          <div className=" flex flex-col mt-4">
            <label className="text-[#858585] text-[12px] font-light" htmlFor="email">
              Work Email Address*
            </label>
            <div className='flex justify-center'>
            <input
              className="w-[370px] h-10 mt-1 px-3 bg-white rounded-t-[10px] border-b-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          {/* Company Name */}
          <div className=" flex flex-col mt-4">
            <label className="text-[#858585] text-[12px] font-light" htmlFor="companyName">
              Company Name*
            </label>
            <div className='flex justify-center'>
            <input
              className="w-[370px] h-10 mt-1 px-3 bg-white rounded-t-[10px] border-b-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          {/* Job Title */}
          <div className="w-[370px] flex flex-col mt-4">
            <label className="text-[#858585] text-[12px] font-light" htmlFor="jobTitle">
              Job Title*
            </label>
            <div className='flex justify-center'>
            <input
              className="w-full h-10 mt-1 px-3 bg-white rounded-t-[10px] border-b-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          {/* Message */}
          <div className="w-[370px] flex flex-col mt-4">
            <label className="text-[#858585] text-[12px] font-light" htmlFor="message">
              Message
              </label>
            <div className='flex justify-center'>
            <input
              className="w-full h-10 mt-1 px-3 bg-white rounded-t-[10px] border-b-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs leading-4 font-normal max-w-[370px] text-black mt-4 text-left">
            By submitting this form, I authorize Zelo to contact me about product offerings, services, events, and other marketing materials. I may unsubscribe at any time by contacting hello@hellozelo.com*
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[370px] h-12 mt-6 bg-black text-white rounded-full text-center"
          >
            Book A Demo
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Form;
