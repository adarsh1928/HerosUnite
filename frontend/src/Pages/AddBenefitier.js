import React, { useState } from 'react';
import AddBenefitierFields from '../components/AddBenefitierFields';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import { useNavigate } from 'react-router-dom';
import army7 from "../assets/army2.png"

const AddBenefitier = () => {
  const initialFormData = {
    name: '',
    position: '',
    soldierUnit: '',
    address: '',
    contactOfRelative: '',
    YearOfDeath: '',
    age: '',
    incident: '',
    otherInfo: '',
  };

  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialFormData);
  const { name, position, soldierUnit, address, contactOfRelative, YearOfDeath, incident, otherInfo, age } = formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {

      // console.log(name, position, soldierUnit, address, contactOfRelative, YearOfDeath, incident, otherInfo, age)
      const response = await apiConnector("POST", endpoints.ADD_BENEFITIER, { name, position, soldierUnit, address, contactOfRelative, YearOfDeath, incident, otherInfo, age })

      console.log("response", response)
      // Reset the form after submission
      setFormData({
        name: '',
        position: '',
        soldierUnit: '',
        address: '',
        contactOfRelative: '',
        YearOfDeath: '',
        age: '',
        incident: '',
        otherInfo: '',
      });
      navigate("/")


    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex justify-start'>
      <div className="flex flex-col md:flex-row w-full mt-4 lg:ml-10">
        <img
          className="w-[95%] md:w-[60%] lg:w-[40%] max-h-96 md:max-h-[95%] object-cover mr-5"
          src={army7}
          alt="Army"
        />
        <form className="bg-gradient-to-br from-richblue-50 to-pink-900 shadow-lg rounded-lg px-4 md:px-8 py-6 md:py-8 mb-4 w-[95%] md:w-[70%] lg:w-[40%] lg:ml-48 mt-6 lg:mt-0"  >
          <h2 className="text-2xl text-yellow font-bold mb-3">Benefitier Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <AddBenefitierFields label="Name" field="name" formData={formData} handleChange={handleChange} />
            <AddBenefitierFields label="Position" field="position" formData={formData} handleChange={handleChange} />
            <AddBenefitierFields label="Working Unit" field="soldierUnit" formData={formData} handleChange={handleChange} />
            <AddBenefitierFields label="address" field="address" formData={formData} handleChange={handleChange} />
            <AddBenefitierFields label="Contact Of Relative" field="contactOfRelative" formData={formData} handleChange={handleChange} />
            <AddBenefitierFields label="Year Of Death" field="YearOfDeath" formData={formData} handleChange={handleChange} />
            <AddBenefitierFields label="age" field="age" formData={formData} handleChange={handleChange} />
            <AddBenefitierFields label="incident" field="incident" formData={formData} handleChange={handleChange} />
          </div>

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={formData.otherInfo}>
            Other Information
          </label>
          <textarea className="w-full h-16" name="otherInfo" value={formData.otherInfo} onChange={handleChange}></textarea>

          <div className="flex items-center justify-center mt-2">
            <button
              onClick={handleSubmit}
              className="transform transition-all duration-300 ease-in-out bg-richblue-900 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBenefitier;
