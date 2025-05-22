import React from 'react';

const Temperature = () => {
  return (
    <div className="p-6 bg-white  rounded-lg m-4 
        flex flex-col md:flex-row justify-evenly
    transition duration-300">
     <div>
     <h2 className="text-6xl font-bold text-red-500 mb-2">Temperature</h2>
      <p className="text-gray-700 text-2xl">
        Affects germination, flowering, and crop maturity.
      </p>
      <ul className="list-disc text-xl ml-5 mt-2 text-gray-600">
        <li><strong>Low:</strong> Delayed germination.</li>
        <li><strong>High:</strong> Wilting and reduced pollination.</li>
      </ul>
     </div>
        <img src='/temperature.jpg' alt='Rainfall' className='w-64 h-64 object-cover rounded-lg mt-4 md:mt-0 md:ml-4' />
    </div>
  );
};

export default Temperature;
