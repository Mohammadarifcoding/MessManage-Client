import React from 'react';
import { FaRegListAlt } from "react-icons/fa";

const Statics = () => {
    return (
        <div className='lg:px-10 md:px-8 px-3 py-10'>
            <div className='flex justify-center items-center'>
                  <div className='px-4 py-3 text-xl flex gap-2 bg-primary text-fourth rounded-md'>
                  <FaRegListAlt /> Total Meal 
                  </div>
            </div>
        </div>
    );
};

export default Statics;