import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import LineChart from "./LineChart/LineChart";

const Statics = () => {
  return (
    <div className="lg:px-10 md:px-8 px-3 py-6">
      <div className="flex justify-start items-center">
        <h2 className="lg:text-2xl sm:text-xl text-lg font-bold text-secondary">
          Bashundara Mess
        </h2>
      </div>
      <div className="">
         <LineChart></LineChart>
      </div>
    </div>
  );
};

export default Statics;
