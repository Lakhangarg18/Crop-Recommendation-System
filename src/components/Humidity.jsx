import React from 'react';

const Humidity = () => {
  return (
    <div className="p-6 bg-white rounded-lg m-4 
    flex flex-col md:flex-row-reverse justify-evenly
    transition duration-300">
      <div>
      <h2 className="text-6xl font-bold text-teal-600 mb-2">Humidity</h2>
      <p className="text-gray-700 text-2xl">
        Influences transpiration, evaporation, and disease occurrence.
      </p>
      <ul className="list-disc text-xl ml-5 mt-2 text-gray-600">
        <li><strong>High:</strong> Fungal diseases (mildew).</li>
        <li><strong>Low:</strong> Increased water loss.</li>
      </ul>
      </div>
      <img src="/humidity.png" alt="" className='w-64 h-64 object-cover rounded-lg mt-4 md:mt-0 md:ml-4' />
    </div>
  );
};

export default Humidity;
