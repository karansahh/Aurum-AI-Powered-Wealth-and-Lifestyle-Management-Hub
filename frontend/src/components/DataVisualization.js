import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyChart = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"], // Labels for X-axis
    datasets: [
      {
        label: "Sample Dataset", // Label for the chart
        data: [12, 19, 3, 5, 2], // Values for each bar in the chart
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Color of the bars
        borderColor: "rgba(255, 99, 132, 1)", // Border color for the bars
        borderWidth: 1, // Border width of the bars
      },
    ],
  };

  return <Bar data={chartData} />; // Renders the bar chart with the given data
};

export default MyChart;
