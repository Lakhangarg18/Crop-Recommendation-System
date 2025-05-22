import React from 'react';

const Rainfall = () => {
  return (
    <div className="p-6 bg-white  rounded-lg m-4 
    flex flex-col md:flex-row justify-evenly
     transition duration-300">
      <div>
      <h2 className="text-6xl font-bold text-blue-400 mb-2">Rainfall</h2>
      <p className="text-2xl text-gray-700">
        Crucial for crop growth, germination, and water balance.
      </p>
      <ul className="list-disc text-xl ml-5 mt-2 text-gray-600">
        <li><strong>Deficiency:</strong> Wilting and poor yields.</li>
        <li><strong>Excess:</strong> Waterlogging and root rot.</li>
      </ul>
      </div>
        <img src='/rainfall.png' alt='Rainfall' className='w-64 h-64 object-cover rounded-lg mt-4 md:mt-0 md:ml-4' />
    </div>
  );
};

export default Rainfall;
