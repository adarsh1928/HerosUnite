import React, { useEffect, useState } from 'react'
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import { useSelector } from 'react-redux';

export default function DonationHistory() {

    const {user}=useSelector((state)=>state.profile)
    const [donateHistory,setDonateHistory]=useState([])
    // console.log(user._id)
    const userId=user._id

    const handleGetDonateHistory=async (e)=>{

        try{ 
            
            const response=await apiConnector("POST",endpoints.GET_DONATE_HISTORY,{userId})
            console.log(response.data.historyData);
            console.log(response.data.historyData[0].donatedTo.name)

            setDonateHistory(response.data.historyData )
        }
        catch(err){
            console.log(err);
        }
    }

  useEffect(()=>{
         handleGetDonateHistory()
  },[])

  const DonationCard = ({ name, amount }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
        <div className="text-lg font-bold">{name}</div>
        <div>25 June 2022</div>
        <div className="text-lg">{amount}</div>
      </div>
    );
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl font-bold mb-6">Donate History</div>
      <div className="w-full max-w-md">
        {donateHistory.map((data, index) => (
          <DonationCard key={index} name={data.donatedTo.name} amount={data.amount} />
        ))}
      </div>
    </div>
    </>
  )
}
