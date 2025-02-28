import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ✅ Register the required chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <p className="text-gray-500 text-center mt-4">No data available for visualization.</p>;
  }

  // Extract row labels
  const labels = Object.keys(data);

  // Extract SUM, AVERAGE, MAX, MIN, COUNT values
  const sumValues = labels.map((key) => data[key].SUM || 0);
  const avgValues = labels.map((key) => data[key].AVERAGE || 0);
  const maxValues = labels.map((key) => data[key].MAX || 0);
  const minValues = labels.map((key) => data[key].MIN || 0);
  const countValues = labels.map((key) => data[key].COUNT || 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: "SUM",
        data: sumValues,
        backgroundColor: "#3b82f6",
      },
      {
        label: "AVERAGE",
        data: avgValues,
        backgroundColor: "#ef4444",
      },
      {
        label: "MAX",
        data: maxValues,
        backgroundColor: "#22c55e",
      },
      {
        label: "MIN",
        data: minValues,
        backgroundColor: "#fbbf24",
      },
      {
        label: "COUNT",
        data: countValues,
        backgroundColor: "#9333ea",
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl bg-white shadow-lg p-4 rounded-lg mt-6 mx-auto">
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">Spreadsheet Data Visualization</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartComponent;
