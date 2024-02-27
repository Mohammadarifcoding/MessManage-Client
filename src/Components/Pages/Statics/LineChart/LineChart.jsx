import React from "react";
import ReactApexChart from "react-apexcharts";
import getDateArray from "../../../../Custom/GetDateArray";

const LineChart = () => {


  // Print or use the current month name

  const series = [
    {
      name: "Meal month Chart",
      data:[87, 56, 93, 41, 64, 74, 25, 82, 38, 95, 59, 31, 46, 68, 79, 23, 88, 72, 60, 27, 90, 48, 22, 55, 67, 43, 76]
      ,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: getDateArray(),
    },
  };

  return (
    <div className="bg-white mt-10 p-3">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LineChart;
