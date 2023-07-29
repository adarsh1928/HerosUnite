import React from 'react';

import HighlightText from '../components/HomePage/HighlightedText';
import CTAButton from '../components/HomePage/Button';
import StudentSection from '../components/HomePage/StudentSection';
import ProfessorSection from '../components/HomePage/ProfessorSection';
import Testimonials from '../components/HomePage/Testimonials';
import Footer from '../components/HomePage/Footer';
import army5 from "../assets/army1.png"
//react

const HomePage = () => {
  return (
    <>
      {/* <div className="text-richblack-600 text-center font-bold text-lg md:text-xl lg:text-2xl">
          <div className="mt-8 md:mt-16 lg:mt-20 text-richblack-900 text-2xl md:text-3xl lg:text-4xl">
            Welcome to <HighlightText text="HerosUnite" />,
          </div>
          We are Here For Make Your College to Career Journey and College Work Easier
        </div>
        <div className="flex flex-col md:flex-row mt-8 md:mt-12 lg:mt-16 justify-center items-center">
          <div className="font-bold text-grey-500 text-center text-lg md:text-xl lg:text-2xl mb-4 md:mb-0">
            Become a Part and
          </div>
          <div className="md:ml-2">
            <CTAButton active={true} linkto={'/login'}>
            Explore More
            </CTAButton>
          </div>
          
        </div> */}
      {/* <StudentSection />
        <ProfessorSection />  */}

      {/* and providing them with the help they need. Our mission is to unite heroes from all walks of life to contribute towards a better world and make a positive impact on the lives of those who serve our nation.
     */}
      <div className="min-h-screen overflow-x-hidden">
        <div className="text-center">
          <p className="text-4xl font-bold text-richblue-500 my-8">
            At <span className="text-pink-700">HerosUnite</span>, we are dedicated to supporting our brave soldiers and their families
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              BSF
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              GARUD
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              PARA SF
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              MARCOS
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              CHETAK
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              RASTRIY RIFLES
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              JAK LI
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              GURKHA
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              SHIKH
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              NSG
            </button>
            <button className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              CRPF
            </button>

          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-8 items-center">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <img src={army5} className="w-full rounded-lg shadow-lg" alt="Soldiers" />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 md:ml-12">
            <p className="text-xl lg:text-2xl text-[#4B5320] font-bold text-center">
              Support by Providing them with the help they need.

              <p className='mt-4 lg:mt-16'>
                Our mission is to unite heroes from all walks of
                life to contribute towards a better world and make a positive impact on the lives of those
                who serve our nation.
              </p>
            </p>
          </div>
        </div>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
