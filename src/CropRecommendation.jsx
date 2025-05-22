import React, { useState } from "react";
import axios from "axios";

function CropRecommendation() {
  const [inputs, setInputs] = useState({
    N: 90,
    P: 42,
    K: 43,
    temperature: 20.88,
    humidity: 82.0,
    ph: 6.5,
    rainfall: 202.9,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: parseFloat(value) });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", inputs);
      setResult(response.data.crop);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 md:p-8 flex flex-col items-center ">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-8 m-20">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
          Crop Recommendation System 🌾
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Enter the following parameters to get the recommended crop:
        </p>

        {/* Input Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Nitrogen (N)", name: "N" },
            { label: "Phosphorus (P)", name: "P" },
            { label: "Potassium (K)", name: "K" },
            { label: "Temperature (°C)", name: "temperature" },
            { label: "Humidity (%)", name: "humidity" },
            { label: "pH Level", name: "ph" },
            { label: "Rainfall (mm)", name: "rainfall" },
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              <input
                type="number"
                name={field.name}
                value={inputs[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          ))}
        </form>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Recommend Crop
          </button>
        </div>

        {/* Result Display */}
        {result && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-green-800">
              Recommended Crop: <span>{result.toUpperCase()}</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default CropRecommendation;
