import React from 'react';

const testimonialsData = [
  {
    text: "As the wife of a serving soldier, I want to express my heartfelt thanks to all the donors on this platform. Your support has provided us with much-needed assistance during challenging times. It's reassuring to know that we are not alone in this journey. Thank you for standing by us.",
    author: "Nisha Sharma, Wife of a Soldier"
  },
  {
    text: "The experience of donating through this platform has been smooth and transparent. It's heartening to know that every contribution makes a difference in the lives of our soldiers and their families. Let's unite to support our heroes.",
    author: "Priya Sharma"
  },
  {
    text: "I have witnessed firsthand the impact of donations on improving the lives of soldiers. This website provides an excellent opportunity for all citizens to show their appreciation and stand by our armed forces.",
    author: "Captain Akash Saxena"
  },
  {
    text: "During my husband's deployment, we faced numerous challenges as a family. The support we received from this website's donors was like a lifeline. Your contributions not only helped us financially but also lifted our spirits knowing that people care about soldiers' families too.",
    author: "Pooja Singh, Spouse of a Soldier"
  },
  {
    text: "Being a soldier's child comes with its own set of unique experiences. Thanks to the donors on this website, we have received educational support and various resources that have eased our journey. Your kindness has made us feel proud of our soldier parent and the community we belong to.",
    author: "Aryan Gupta, Son of a Soldier"
  }
];


const Testimonials = () => {
    return (
      <div className=" py-16 relative z-[-2]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl text-yellow-500 font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-richblue-25 rounded-lg shadow-lg w-full sm:w-70 lg:w-80 p-6 mx-4 my-6 transition-transform transform hover:-translate-y-2 hover:bg-richblue-200"
              >
                <p className="text-lg font-bold text-richblack-800 mb-4">{testimonial.text}</p>
                <p className="text-base text-pink-900 font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Testimonials;
