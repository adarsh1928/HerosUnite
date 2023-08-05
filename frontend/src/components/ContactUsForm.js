import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import {  toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';
import { Navigate } from 'react-router-dom';
import { ToastBar } from 'react-hot-toast';

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    title: '',
    contactNo: '',
    message: '',
  });

  const email = user.email;
  const { title, message, contactNo } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    // e.preventDefault();
    try {
      console.log('submit button pressed');
      const response = await apiConnector('POST', endpoints.CONTACT_US_API,{email,title,message,contactNo});

      console.log('success', response);

      ToastBar.success("We got your message",{duration:5000,position:'top-center'})
      


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-6 bg-richblack-25 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              defaultValue={email}
              name="email"
              type="email"
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-400"
              placeholder="Your Email Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
            required
              type="text"
              name="title"
              onChange={handleOnChange}
              value={title}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-400"
              placeholder="Title of your message"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact No:</label>
            <input
            required
              type="text"
              name="contactNo"
              onChange={handleOnChange}
              value={contactNo}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-400"
              placeholder="Your Contact Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
            required
              type="text"
              name="message"
              onChange={handleOnChange}
              value={message}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-400 h-32 resize-none"
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="w-full py-3 text-white font-bold bg-yellow-700 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
