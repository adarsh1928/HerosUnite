import React, { useEffect, useState } from 'react';
import { apiConnector } from '../services/ApiConnector';
import { endpoints } from '../services/APIs';
import { useSelector } from 'react-redux';

export default function DonationHistory() {
  const { user } = useSelector((state) => state.profile);
  const [donateHistory, setDonateHistory] = useState([]);

  const userId = user._id;

  const handleGetDonateHistory = async () => {
    try {
      const response = await apiConnector("POST", endpoints.GET_DONATE_HISTORY, { userId });
      setDonateHistory(response.data.historyData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetDonateHistory();
  }, []);

  // Function to add the "st", "nd", "rd", or "th" suffix to the day
  function addSuffix(day) {
    if (day >= 11 && day <= 13) {
      return day + "th";
    } else {
      const lastDigit = day % 10;
      switch (lastDigit) {
        case 1:
          return day + "st";
        case 2:
          return day + "nd";
        case 3:
          return day + "rd";
        default:
          return day + "th";
      }
    }
  }

  // Function to convert the date to the desired format
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = addSuffix(date.getUTCDate());
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  }

  const DonationCard = ({ name, amount, date }) => {
    const formattedDate = formatDate(date);

    return (
      <div className="bg-richblack-25 rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
        <div className="text-lg font-bold">{name}</div>
        <div>{formattedDate}</div>
        <div className="text-lg">{amount+" Rs"}</div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-richblue-50">
        <div className="text-3xl font-bold mb-6">Donate History</div>
        <div className="w-full max-w-md">
          {donateHistory.map((data, index) => (
            <DonationCard key={index} name={data.donatedTo.name} amount={data.amount} date={data.date} />
          ))}
        </div>
      </div>
    </>
  );
}
