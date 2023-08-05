import React from 'react';

import HighlightText from '../components/HomePage/HighlightedText';
import CTAButton from '../components/HomePage/Button';
import Testimonials from '../components/HomePage/Testimonials';
import Footer from '../components/HomePage/Footer';
import army5 from "../assets/army1.png"
import army6 from "../assets/army4.png"
//react

const HomePage = () => {

  const ButtonLabels = [
    'BSF', 'GARUD', 'PARA SF', 'MARCOS', 'CHETAK',
    'RASTRIY RIFLES', 'JAK LI', 'GURKHA', 'SHIKH', 'NSG', 'CRPF'
  ];

  return (
    <>

      <div className="min-h-screen overflow-x-hidden">
        <div className="text-center">
          <p className="text-4xl font-bold text-richblue-500 my-8">
            At <span className="text-pink-700">HerosUnite</span>, we are dedicated to supporting our brave soldiers and their families
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {ButtonLabels.map((label, index) => (
              <button
                key={index}
                className="bg-pink-700 text-richblack-25 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-8 items-center">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <img src={army5} className="w-full rounded-lg shadow-lg" alt="Soldiers" />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 md:ml-12">
            <p className="text-xl lg:text-2xl text-[#4B5320] font-bold text-center">
              <p className='text-pink-800'>
                Support by Providing them with the help they need.

              </p>

              <p className='mt-4 lg:mt-16'>
                Our mission is to unite heroes from all walks of
                life to contribute towards a better world and make a positive impact on the lives of those
                who serve our nation.
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-8 items-center">
          <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 md:ml-12 lg:mr-16">
            <p className="text-xl lg:text-2xl text-[#4B5320] font-bold text-center">
              <p className='text-pink-800'>
                Bound by Duty, Driven by Sacrifice.
              </p>

              <p className='mt-4 lg:mt-16'>
                Our soldiers sacrifice so much to protect our nation, and it's our responsibility to stand by them in their time of need. Your contribution can make a significant impact on their lives and provide them with the support they deserve.
              </p>
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-[48%]">
            <img src={army6} className="w-full rounded-lg shadow-lg" alt="Soldiers" />
          </div>
        </div>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
