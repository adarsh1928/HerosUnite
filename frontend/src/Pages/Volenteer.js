import React from 'react';
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image16.png";
import { toast } from 'react-hot-toast';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import { useSelector } from 'react-redux';

export default function VolunteerPage() {
  const { user } = useSelector((state) => state.profile);
  const name = user.firstName;
  const email = user.email;
  // const contactNo = user.contactNo;

  // console.log("user , email,contact",name,email,contactNo)

  const handleVolunteer = async () => {
    try {
      const response = await apiConnector("POST", endpoints.ADD_VOLENTEER, { name, email });

     if(response.data.message==="You are already in our request"){
         toast.success("You are already in our request")
     }

     else toast.success("Thank You for Requesting to Volunteer, our Team will contact you soon", { duration: 5000 }); // 5 seconds duration
      // console.log(response);
    } catch (err) {
      toast.error("Not added, please try again", { duration: 5000 }); // 5 seconds duration
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-500">Make Volunteer or Give Service</h1>
      <p className="mb-4 text-xl lg:text-2xl font-bold text-center text-pink-600">
        Our soldiers sacrifice so much to protect us and our country. You can play a crucial role in supporting them in various ways. Here are some volunteer opportunities where you can serve our soldiers
        Give service
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <VolunteerCard
          title="Veteran Care Assistance"
          description="Provide care and support to veterans who may need assistance with daily activities or companionship. Your time and compassion can make a significant impact on their well-being."
          image={image12}
          handleVolunteer={handleVolunteer} // Pass the handleVolunteer function as a prop
        />
        <VolunteerCard
          title="Military Family Support"
          description="Support the families of deployed soldiers by offering practical help or organizing events that boost their morale and provide them with a strong community of support."
          image={image14}
          handleVolunteer={handleVolunteer} // Pass the handleVolunteer function as a prop
        />
        <VolunteerCard
          title="Military Hospital Visitation"
          description="Visit wounded or recovering soldiers at military hospitals and show them your appreciation and care. Your presence can bring comfort and positivity during their healing process."
          image={image13}
          handleVolunteer={handleVolunteer} // Pass the handleVolunteer function as a prop
        />
      </div>
    </div>
  );
}

const VolunteerCard = ({ title, description, image, handleVolunteer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-center h-38">
        <img src={image} alt={title} className="h-full" />
      </div>
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button onClick={handleVolunteer} className="mt-4 bg-richblue-500 hover:bg-richblue-600 text-white font-bold py-2 px-4 rounded-full">
        Volunteer Now
      </button>
    </div>
  );
};
