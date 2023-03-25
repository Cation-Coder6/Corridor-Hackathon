import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Histogram({ chartData }) {
  return (
    <div className='w-1/2'>
      <Bar data={chartData} />;
    </div>
  )
}

export default Histogram




