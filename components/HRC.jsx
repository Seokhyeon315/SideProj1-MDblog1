import React, { useState } from "react";


// Heart Rate Calculator:
// Maximum heart rate = 220 - age in years
// Target heart rate for exercise = 50-85% of maximum heart rate


function HRC() {

    const [birthdate, setBirthdate] = useState("");
    const [maxHR, setMaxHR] = useState(0);
    const [targetHR, setTargetHR] = useState("");

    const getAge = (dateString) => {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    const calculateHR = () => {
        const maxHeartRate = 220 - getAge(birthdate);
        const targetStartHR = maxHeartRate * 0.5;
        const targetEndHR = maxHeartRate * 0.85;
        setMaxHR(maxHeartRate);
        setTargetHR(`${targetStartHR.toFixed(0)}-${targetEndHR.toFixed(0)}`);
    };



    return (
        <>
            <div className="flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
                <h2 className="text-2xl font-bold mb-4">Heart Rate Calculator</h2>



                <div className="mb-4">
                    <label className="block font-medium mb-2">Birthdate (To measure age):</label>
                    <input
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>

                <button className="bg-red-600 text-white py-2 px-4 rounded-md mb-4" onClick={calculateHR}>Calculate Heart Rate</button>

                <div className="text-lg font-medium">- Maximum Heart Rate: {maxHR}</div>
                <div className="text-lg font-medium mt-1">- Target Heart Rate for Excersie: {targetHR}</div>


            </div>
        </>
    )
};


export default HRC;
