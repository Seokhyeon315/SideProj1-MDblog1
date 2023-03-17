import React from "react";
import Link from "next/link";


const calculator = () => {
    return (<div className="mt-20 flex flex-col justify-center items-center ">
        <h1 className="text-3xl mb-5 p-5">Calculators for Health & Fitness</h1>
        <div className="grid grid-cols-1 gap-3 h-screen">

            {/* Use grid for each calculator, short explanation: what & when to use*/}

            <button className="rounded-md px-3 py-2 bg-green-300 hover:bg-green-500">BMI (Body Mass Index)</button>
            <button className="rounded-md px-3 py-2 bg-purple-300 hover:bg-purple-500">BMR (Basal Metabolic Rate)</button>
            <button className="rounded-md px-3 py-2 bg-yellow-300 hover:bg-yellow-500">Daily Calorie Need</button>
            <button className="rounded-md px-3 py-2 bg-red-300">Heart Rate</button>
            <button className="rounded-md px-3 py-2 bg-gray-300">One Rep Max (1RM)</button>
            <button className="rounded-md px-3 py-2 bg-orange-300">Body Fat Percentage</button>
            <button className="rounded-md px-3 py-2 bg-blue-300">Daily Water Intake</button>


        </div>

    </div>);
};

export default calculator;


// Body Mass Index (BMI) Calculator:
// BMI = weight (kg) / (height (m) x height (m))

// Basal Metabolic Rate (BMR) Calculator:
// For Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
// For Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)

// Daily Calorie Needs Calculator:
// Daily calorie needs = BMR x Activity Level
// Activity Level can be sedentary, lightly active, moderately active, very active, or extra active.

// Heart Rate Calculator:
// Maximum heart rate = 220 - age in years
// Target heart rate for exercise = 50-85% of maximum heart rate

// One Rep Max (1RM) Calculator:
// 1RM = weight lifted / (1.0278 - (0.0278 x number of repetitions))

// Body Fat Percentage Calculator:
// Body fat percentage = (1.20 x BMI) + (0.23 x age) - (10.8 x sex) - 5.4
// Sex = 1 for males and 0 for females

// Water Intake Calculator:
// Daily water intake = weight in kg x 0.033