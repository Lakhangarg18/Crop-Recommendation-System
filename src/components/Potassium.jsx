import React from 'react';

const Potassium = () => {
  return (
    <div className="p-6 bg-white rounded-lg m-4 flex flex-col md:flex-row justify-evenly transition duration-300">
      <div>
      <h2 className="text-6xl font-bold text-yellow-500 mb-2">Potassium (K)</h2>
      <p className="text-gray-700 text-2xl">
        Enhances water uptake, resistance to diseases, and fruit quality.
      </p>
      <ul className="list-disc text-xl ml-5 mt-2 text-gray-600">
        <li><strong>Deficiency:</strong> Weak stems, scorched leaf tips.</li>
        <li><strong>Excess:</strong> Interferes with Calcium uptake.</li>
      </ul>
      </div>
      <img src="/potassium.svg" alt="" className='w-64 h-64 object-cover rounded-lg mt-4 md:mt-0 md:ml-4 ' />
    </div>
  );
};

export default Potassium;
