import React from 'react';

const PH = () => {
  return (
    <div className="p-6 bg-white  rounded-lg m-4  flex flex-col md:flex-row-reverse justify-evenly transition duration-300">
      <div>
      <h2 className="text-6xl font-bold text-blue-500 mb-2 ">Soil pH</h2>
      <p className="text-gray-700 text-2xl">
        Determines nutrient availability and microbial activity.
      </p>
      <ul className="list-disc text-xl ml-5 mt-2 text-gray-600">
        <li><strong>Acidic:</strong> Nutrient unavailability (Phosphorus).</li>
        <li><strong>Alkaline:</strong> Reduces Iron availability.</li>
      </ul>
      </div>
      <img src="ph.jpg" alt="" className='
      
        w-64 h-64 object-cover rounded-lg mt-4 md:mt-0 md:ml-4
      ' />
    </div>
  );
};

export default PH;
