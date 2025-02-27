import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ✅ Register the required scales & elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <p className="text-gray-500 text-center mt-4">No data available for visualization.</p>;
  }

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Spreadsheet Data",
        data: Object.values(data),
        backgroundColor: ["#3b82f6", "#ef4444", "#22c55e", "#fbbf24"],
      },
    ],
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-lg p-4 rounded-lg mt-6">
      <Bar data={chartData} />
    </div>
  );
};

export default ChartComponent;
