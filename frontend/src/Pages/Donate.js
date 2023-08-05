import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DonateForSoldiers } from '../services/operation/SoldierFeature';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import image9 from "../assets/image13.png"
import { toast } from 'react-hot-toast';

export default function Donate() {

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const token = localStorage.token;

  const handleDonateButton = (index) => {
    // console.log("index",index)
    const id = soldierData[index]._id

    const soldier = id
    DonateForSoldiers(token, soldier, user, navigate, dispatch);
  }

  const initialSearchQuery = '';
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);


  const [soldierData, setSoldiersData] = useState([]);

  const handleDonateHistory = async (e) => {
    navigate("/donationHistory")
  }
  const fetchSoldiersDetail = async (e) => {
    try {

      const response = await apiConnector("POST", endpoints.GET_SOLDIERS_DETAILS)
      console.log(response.data.deatilOfSoldiers)
      setSoldiersData(response.data.deatilOfSoldiers)
    }
    catch (err) {
      console.log(err);
    }
  }
  const filteredSoldierData = soldierData.filter(
    (data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.soldierUnit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchSoldiersDetail()

  }, [])

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mb-5 gap-6 mt-5">
        <button onClick={handleDonateHistory} className="border-5 p-1 mr-8 bg-richblue-800 text-richblack-25 w-1/2 md:w-1/5 font-bold ml-5 ">
          My Donation History
        </button>

        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[50%]  md:w-[20%] px-4 py-2 rounded-md md:mr-5 focus:outline-none focus:ring focus:border-richblue-900 text-black placeholder-black bg-richblue-50"
        />
      </div>
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-box">
        {filteredSoldierData.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col">
            <div className="flex-shrink-0 w-full h-48 md:h-32 rounded-t-lg overflow-hidden">
           
              <img src={image9} alt="Soldier" className="w-full h-full object-cover" />
            </div>
              <h2 className="font-semibold mt-3 text-xl text-center">{data.name}</h2>
              
              <p className="text-gray-600 text-center">{data.address}</p>
            <div className="p-4 flex-grow">
            
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="font-semibold">Position:</p>
                  <p>{data.position}</p>
                </div>
                <div>
                  <p className="font-semibold">Soldier Unit:</p>
                  <p>{data.soldierUnit}</p>
                </div>
                <div>
                  <p className="font-semibold">Incident:</p>
                  <p>{data.incident}</p>
                </div>
                <div>
                  <p className="font-semibold">Age:</p>
                  <p>{data.age}</p>
                </div>
                {/* You can add more info fields here */}
              </div>

              {/* Soldier Name */}

              {/* Donate Button */}
              <button onClick={() => handleDonateButton(index)} className="bg-richblue-300 hover:bg-richblue-600 text-white font-bold py-2 px-4 mt-4 rounded-full ">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}
