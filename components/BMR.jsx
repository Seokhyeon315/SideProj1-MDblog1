import React, { useState } from "react";


// Basal Metabolic Rate (BMR) Calculator:
// For Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
// For Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)


function BMR() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("male")
    const [bmr, setBMR] = useState(0);

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

    const calculateBMR = () => {
        let bmrValue = 0;
        if (gender === 'male') {
            bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * getAge(birthdate));
        } else {
            bmrValue =
                447.593 + (9.247 * weight) + (3.098 * height) - 4.330 * getAge(birthdate);
        }
        setBMR(bmrValue.toFixed(2));
    };



    return (
        <>
            <div className="flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
                <h2 className="text-2xl font-bold mb-4">BMR (Basal Metabolic Rate)</h2>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Gender:</label>
                    <div className="flex">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <span className="ml-2">Female</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Birthdate:</label>
                    <input
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">
                        Weight (kg):
                    </label>
                    <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">
                        Height (cm):
                    </label>
                    <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <button className="bg-orange-600 text-white py-2 px-4 rounded-md mb-4" onClick={calculateBMR}>Calculate BMR</button>
                <div className="text-lg font-medium">BMR: {bmr}</div>
            </div>
        </>
    )
};


export default BMR;
