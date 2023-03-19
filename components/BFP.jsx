// Body Fat Percentage Calculator:
// Body fat percentage = (1.20 x BMI) + (0.23 x age) - (10.8 x gender) - 5.4
// gender = 1 for males and 0 for females



import React, { useState } from "react";

function BFP() {

    const [bmi, setBMI] = useState(0);
    const [gender, setGender] = useState(1); // updated default value for gender
    const [age, setAge] = useState(0); // added age state
    const [bfp, setBFP] = useState(0);

    const calculateBFP = () => {
        let bfp = (1.20 * bmi) + (0.23 * age) - (10.8 * gender) - 5.4;
        setBFP(bfp.toFixed(2));
    };

    return (
        <div className="flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-2xl font-bold mb-4">Body Fat Percentage Calculator</h2>
            <div className="mb-4">
                <label className="block font-medium mb-2">
                    BMI:
                </label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="number" value={bmi} onChange={(e) => setBMI(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2">Age:</label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-2">Gender:</label>
                <div className="flex">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="gender"
                            value="1"
                            checked={gender === 1}
                            onChange={(e) => setGender(parseInt(e.target.value))}
                        />
                        <span className="ml-2">Male</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="0"
                            checked={gender === 0}
                            onChange={(e) => setGender(parseInt(e.target.value))}
                        />
                        <span className="ml-2">Female</span>
                    </label>
                </div>
            </div>


            <button className="bg-yellow-600 text-white py-2 px-4 rounded-md mb-4" onClick={calculateBFP}>Calculate BFP</button>
            <div className="text-lg font-medium">Body Fat Percentage: {bfp} %</div>

        </div>
    );
}

export default BFP;
