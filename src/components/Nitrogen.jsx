import React from 'react';

const Nitrogen = () => {
  return (
    <div className="p-6 bg-white rounded-lg m-4  transition duration-300 flex flex-col md:flex-row justify-evenly">
      <div className=''>
      <h2 className="text-6xl font-bold text-green-600 mb-2">Nitrogen (N)</h2>
      <p className="text-gray-700 text-2xl">
        Essential for vegetative growth as it forms chlorophyll and proteins.
      </p>
      <ul className="list-disc ml-5 mt-2 text-xl text-gray-600">
        <li><strong>Deficiency:</strong> Yellow leaves, stunted growth.</li>
        <li><strong>Excess:</strong> Delays flowering, reduces yield.</li>
      </ul>
      </div>
      <img src='/nitrogen.svg' alt='Nitrogen' className='w-64 h-64 object-cover rounded-lg mt-4 md:mt-0 md:ml-4' />
    </div>
  );
};

export default Nitrogen;
