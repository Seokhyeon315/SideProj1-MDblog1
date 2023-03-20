import React, { useState } from "react";

function BMI() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBMI] = useState(0);


    const calculateBMI = () => {
        const bmiValue = weight / Math.pow(height / 100, 2);
        setBMI(bmiValue.toFixed(2));
    };



    return (
        <div className="flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-2xl font-bold mb-4">BMI Calculator (Body Mass Index)</h2>

            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Weight (kg):
                </label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Height (cm):
                </label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md mb-4" onClick={calculateBMI}>Calculate BMI</button>
            <div className="text-lg font-medium">BMI: {bmi}</div>
            <div className="text-lg font-semibold mt-4">
                Healthy BMI range: 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup>
            </div>
        </div>
    );
}

export default BMI;
