// Water Intake Calculator:
// Daily water intake = weight in kg x 0.033

import React, { useState } from "react";

function DWI() {
    const [weight, setWeight] = useState(0);
    const [dwi, setORM] = useState(0);

    const calculateDWI = () => {
        let dwi = weight * 0.033;
        setORM(dwi.toFixed(2));
    };

    return (
        <div className="flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-2xl font-bold mb-4">DWI (Daily Water Intake)</h2>
            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Weight (kg):
                </label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>




            <button className=" bg-blue-600 text-white py-2 px-4 rounded-md mb-4" onClick={calculateDWI}>Calculate DWI</button>
            <div className="text-lg font-medium">Daily Water Intake: {dwi} (L/day)</div>

        </div>
    );
}

export default DWI;
