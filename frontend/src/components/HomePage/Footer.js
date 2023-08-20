import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-richblack-900 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-8">
            <h3 className="text-white text-xl font-bold mb-4">About Us</h3>
            <p className="text-richblack-5">
             I am adarsh and a software Engineer and also available for part time or freelancing kind of work
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-richblack-5">Email: adarshappatel@gmail.com</p>
            <p className="text-richblack-5">(+91) 8849987685</p>
            <p className="text-richblack-5">Ghadkan,prantij,sabarkantha Gujarat 383205</p>
          </div>
          <div className="flex items-center mt-8">
            <div className="w-1/2 lg:w-3/4 ml-8">
              <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-richblack-5 hover:text-white">
                  <i className="fab fa-facebook-f text-xl"><AiFillFacebook /></i>
                </a>
                <a href="#" className="text-richblack-5 hover:text-white">
                  <i className="fab fa-twitter text-xl"><AiOutlineTwitter /></i>
                </a>
                <a href="#" className="text-richblack-5 hover:text-white">
                  <i className="fab fa-instagram text-xl"><AiOutlineInstagram /></i>
                </a>
                <a href="#" className="text-richblack-5 hover:text-white">
                  <i className="fab fa-linkedin-in text-xl"><AiFillLinkedin /></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-center text-richblack-5">© {new Date().getFullYear()} HerosUnite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
