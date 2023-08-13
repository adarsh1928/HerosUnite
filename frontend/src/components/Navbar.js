
import logo from "../assets/logo.png"

import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarLinksForStudents } from "../data/NavbarLinks";
import { matchPath } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropDown";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const [isinternshipDropDown, setinternshipDropDown] = useState(false);

  const { user } = useSelector((state) => state.profile);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-center">
                <img src={logo} className="rounded-full h-12 w-16" alt="Logo" />
              </div>
              <div className="hidden md:block ml-10 flex-grow ">
                <div className="flex items-baseline space-x-4 ">
                  {NavbarLinksForStudents.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${matchRoute(link.path) ? "text-yellow-400 text-2xl" : "text-richblack-800"
                        } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 items-center">
              {!token && (
                <>
                  <Link to="/login">
                    <button className="border border-richblack-700 bg-richblack-500 px-3 py-2 text-richblack-100 rounded-md">
                      Log in
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-200 rounded-md">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
              {token && <ProfileDropdown />}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex gap-x-4 items-center">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NavbarLinksForStudents.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`${matchRoute(link.path) ? "text-yellow-400" : "text-richblack-800"
                    } hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}

      </nav>



    </>
  );
};

export default Navbar;
