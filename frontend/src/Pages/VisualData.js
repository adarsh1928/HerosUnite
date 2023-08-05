import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

const data = {
  labels: [
    'Indian Army',               // 12.37 lakh
    'Indian Navy',               // 67,228
    'Indian Air Force',          // 1,40,000
    'Indian Coast Guard',        // 11,000
    'Border Road Organization',  // 34,000
  ],
  datasets: [
    {
      data: [1237000, 67228, 140000, 11000, 34000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
    },
  ],
};
const data2 = {
  labels: [              // 12.37 lakh
    'Year 2015',               // 67,228
    'Year 2016',               // 67,228
    'Year 2017',               // 67,228
    'Year 2018',               // 67,228
    'Year 2019',               // 67,228
    'Year 2020',               // 67,228
    'Year 2021',               // 67,228
  ],
  datasets: [
    {
      data: [985, 1014, 746, 1487, 844, 954, 706],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
    },
  ],
};
const data3 = {
  labels: [
    'Param Vir Chakra',
    'Maha Vir Chakra',
    'Vir Chakra',
    'Ashoka Chakra',
    'Kirti Chakra',
    'Shaurya Chakra'
  ],
  datasets: [
    {
      data: [21, 212, 1334, 97, 486, 2122],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
    },
  ],
};

export default function VisualData() {
  Chart.register(ArcElement, Tooltip, Legend);

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = data.labels[context.dataIndex];
            let value = context.formattedValue;
            return `${label}: ${value}`;
          },
        },
      },
    },
    maintainAspectRatio: false, // Adjust chart size to fit container
    responsive: true, // Make the chart responsive
    layout: {
      padding: 10, // Add padding for better appearance
    },
    plugins: {
      tooltip: {
        displayColors: false, // Hide color indicators in tooltips
      },
      datalabels: {
        color: '#000', // Data labels color (white)
        font: {
          size: 14,
        },
      },
    },
  };


  return (
    <>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 ml-5">
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Strength of Indian Armed Forces</h2>
          <div className="chart-container">
            <Pie data={data} options={options} width={400} height={400} />
          </div>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Martyr Soldiers</h2>
          <div className="chart-container">
            <Pie data={data2} options={options} width={400} height={400} />
          </div>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Medals Won By Defence Personnel</h2>
          <div className="chart-container">
            <Pie data={data3} options={options} width={400} height={400} />
          </div>
        </div>
      </div>
    </>
  );
}
