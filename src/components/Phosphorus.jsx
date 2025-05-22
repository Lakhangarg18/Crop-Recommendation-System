import React from 'react';

const Phosphorus = () => {
  return (
    <div className="p-6 bg-white  rounded-lg m-4 flex flex-col md:flex-row-reverse justify-evenly transition duration-300">
      <div className=''>
      <h2 className="text-6xl font-bold text-purple-600 mb-2">Phosphorus (P)</h2>
      <p className="text-gray-700 text-2xl">
        Supports root development, flowering, and energy transfer.
      </p>
      <ul className="list-disc ml-5 mt-2 text-xl text-gray-600">
        <li><strong>Deficiency:</strong> Poor roots, delayed maturity.</li>
        <li><strong>Excess:</strong> Nutrient imbalance (e.g., Zinc lockout).</li>
      </ul>
      </div>
      <img src="/ph.svg" alt="" className='
        w-64 h-64 object-cover rounded-lg mt-4 md:mt-0 md:ml-4' />
    </div>
  );
};

export default Phosphorus;
